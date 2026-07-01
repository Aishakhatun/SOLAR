import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/solartec';
mongoose
  .connect(mongodbUri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Schema Definition
const contactQuerySchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactQuery = mongoose.model('ContactQuery', contactQuerySchema);

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Routes
app.post('/api/contact', async (req, res) => {
  const { full_name, email, phone, message } = req.body;

  // Validation
  if (!full_name || !email || !phone || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required.' });
  }

  try {
    // Save to Database
    const newQuery = new ContactQuery({
      full_name,
      email,
      phone,
      message,
    });
    await newQuery.save();

    // Send Email Notification (in background, don't block DB success response)
    const mailOptions = {
      from: `"Solartec Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: 'New Solartec Contact Form Inquiry',
      html: `
        <h3>New Contact Inquiry Details:</h3>
        <p><strong>Name:</strong> ${full_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
        <p><em>Received at: ${new Date().toLocaleString()}</em></p>
      `,
    };

    transporter.sendMail(mailOptions, (mailErr, info) => {
      if (mailErr) {
        console.error('Error sending email notification:', mailErr.message);
      } else {
        console.log('Notification email sent successfully:', info.response);
      }
    });

    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been submitted successfully!',
      data: newQuery,
    });
  } catch (error) {
    console.error('Error saving contact query:', error);
    return res.status(500).json({
      success: false,
      error: 'An error occurred while saving your inquiry. Please try again.',
    });
  }
});

// GET route to check inquiries (optional helper for debugging)
app.get('/api/contact', async (req, res) => {
  try {
    const inquiries = await ContactQuery.find().sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Base Route
app.get('/', (req, res) => {
  res.send('Solartec API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
