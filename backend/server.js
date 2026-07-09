import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: '*', methods: ['GET', 'POST'] }));
app.use(express.json());

// MongoDB Connection (cached for serverless)
let isConnected = false;
const connectDB = async () => {
  if (isConnected) return;
  const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/solar';
  await mongoose.connect(mongodbUri);
  isConnected = true;
  console.log('MongoDB connected');
};

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Schema
const contactQuerySchema = new mongoose.Schema({
  full_name: { type: String, required: true, trim: true },
  email:     { type: String, required: true, trim: true, lowercase: true },
  phone:     { type: String, required: true, trim: true },
  message:   { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ContactQuery =
  mongoose.models.ContactQuery ||
  mongoose.model('ContactQuery', contactQuerySchema);

// POST — Save inquiry
app.post('/api/contact', async (req, res) => {
  await connectDB();
  const { full_name, email, phone, message } = req.body;

  if (!full_name || !email || !phone || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  try {
    const newQuery = new ContactQuery({ full_name, email, phone, message });
    await newQuery.save();

    // Send Email
    const receiverEmail = process.env.EMAIL_RECEIVER || process.env.EMAIL_USER || 'rajcorporation07@gmail.com';
    const mailOptions = {
      from: `"Solartec Website" <${process.env.EMAIL_USER}>`,
      to: receiverEmail,
      replyTo: email,
      subject: `New Inquiry from ${full_name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              background-color: #f8fafc;
              color: #334155;
              margin: 0;
              padding: 0;
            }
            .container {
              max-width: 600px;
              margin: 30px auto;
              background: #ffffff;
              border-radius: 16px;
              overflow: hidden;
              box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
              border: 1px solid #e2e8f0;
            }
            .header {
              background: linear-gradient(135deg, #1a2a6c 0%, #0d1b4b 100%);
              padding: 30px 20px;
              text-align: center;
              color: #ffffff;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 700;
              letter-spacing: -0.5px;
            }
            .header p {
              margin: 5px 0 0 0;
              font-size: 14px;
              color: #93c5fd;
            }
            .content {
              padding: 30px 40px;
            }
            .detail-row {
              margin-bottom: 20px;
              border-bottom: 1px solid #f1f5f9;
              padding-bottom: 12px;
            }
            .detail-row:last-child {
              border-bottom: none;
              padding-bottom: 0;
            }
            .label {
              font-size: 11px;
              font-weight: 700;
              text-transform: uppercase;
              color: #64748b;
              letter-spacing: 0.5px;
              margin-bottom: 4px;
            }
            .value {
              font-size: 14px;
              color: #0f172a;
              font-weight: 600;
            }
            .message-box {
              background-color: #f8fafc;
              border-left: 4px solid #1a2a6c;
              padding: 15px;
              border-radius: 0 8px 8px 0;
              font-size: 14px;
              line-height: 1.6;
              color: #334155;
              white-space: pre-wrap;
            }
            .footer {
              background-color: #f1f5f9;
              padding: 20px;
              text-align: center;
              font-size: 11px;
              color: #64748b;
              border-top: 1px solid #e2e8f0;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Inquiry Received</h1>
              <p>Solartec Contact Form Submission</p>
            </div>
            <div class="content">
              <div class="detail-row">
                <div class="label">Full Name</div>
                <div class="value">${full_name}</div>
              </div>
              <div class="detail-row">
                <div class="label">Phone Number</div>
                <div class="value">+91 ${phone}</div>
              </div>
              <div class="detail-row">
                <div class="label">Email Address</div>
                <div class="value">${email}</div>
              </div>
              <div class="detail-row">
                <div class="label">Message</div>
                <div class="message-box">${message}</div>
              </div>
            </div>
            <div class="footer">
              <p>This inquiry was sent from the Solartec website contact form.</p>
              <p>Timestamp: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully to:', receiverEmail);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
    }

    return res.status(201).json({
      success: true,
      message: 'Inquiry submitted successfully!',
      data: newQuery,
    });
  } catch (error) {
    console.error('Error saving inquiry:', error);
    return res.status(500).json({ success: false, error: 'Server error. Please try again.' });
  }
});

// GET — View all inquiries
app.get('/api/contact', async (req, res) => {
  await connectDB();
  try {
    const inquiries = await ContactQuery.find().sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Health check
app.get('/', (req, res) => res.send('Solartec API is running ✅'));

// Local dev
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;
