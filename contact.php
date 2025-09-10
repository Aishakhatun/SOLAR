<?php
$host = "localhost";
$username = "root";
$password = "";
$dbname = "raj-c";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
  
if(isset($_POST["btn1"])) {
 
    $conn = new mysqli('localhost', 'root', '', 'raj-c');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $firstname = $_POST["full_name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $msg = $_POST["message"];

  
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$mail = new PHPMailer(true);

try {
    
    $mail->isSMTP();                                            
    $mail->Host       = 'smtp.gmail.com';                     
    $mail->SMTPAuth   = true;                                   
    $mail->Username   = 'aishasabugar1@gmail.com';                    
    $mail->Password   = 'miuqkdiadprxlybk';                               
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;           
    $mail->Port       = 465;                                     

    
    $mail->setFrom('aishasabugar1@gmail.com', 'contact');
    $mail->addAddress('aishasabugar1@gmail.com', 'hey');    
   

    $mail->isHTML(true);                                 
    $mail->Subject = 'test contact form';
    $mail->Body    = "Sender name:   $firstname <br> Sender email :$email   <br>  sender Number:    $phone <br>  sender Message:   $msg ";
   

    $mail->send();
   
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

    $sql = "INSERT INTO contact_queries (full_name, email, phone, message)
            VALUES ('$firstname', '$email', '$phone', '$msg')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Message sent successfully!!')</script>";
    } else {
        echo "<script>alert('Error: " . $conn->error . "')</script>";
    }

    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Solartec - Renewable Energy Website</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500&family=Roboto:wght@500;700;900&display=swap"
        rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/lightbox/css/lightbox.min.css" rel="stylesheet">

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        h3 {
            margin: 5px;
            color: #273b72;
        }

        .form-container {
            padding: 30px;
        }

        .form-group {
            margin-bottom: 15px;
            padding: 10px;
        }

        input,
        textarea {
            width: 100%;
            padding: 10px;
            border-radius: 6px;
            border: 1px solid #ccc;
            font-size: 16px;
        }

        .form-row {
            display: flex;
            gap: 10px;
        }

        .form-row .form-group {
            flex: 1;
        }

        button {
            background: black;
            color: white;
            border: none;
            padding: 12px 20px;
            border-radius: 6px;
            cursor: pointer;
        }

        .checkbox {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
        }

        .error-box {
            background: #ffe6e6;
            border: 1px solid #cc0000;
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 6px;
        }

        .error {
            color: #cc0000;
            margin: 5px 0;
        }

        #form {
            width: 50px;
            background-color: #eee;
            text-align: center;
        }

        .text-c {
            text-align: center;

            color: #273b72;
        }

        @media screen and (max-width: 500px){
         .form-row{
    display: block;
}


.container-c{
  display: block;
}
}
    </style>
</head>

<body>

    <!----------------------- navbar ------------------------->
    <div class="site-header">
        <div class="container">
            <div class="logo">
                <img src="Logo.png" alt="logo">
                <img src="LOGON.png" alt="Logo">

            </div>
            <nav class="main-nav" id="mainNav">
                <ul>
                    <li><a href="main.html">Home</a></li>
                    <li><a href="service.html">Services</a></li>
                    <li><a href="project.html">Projects</a></li>
                    <li><a href="contact.php">Contact-us</a></li>
                </ul>
            </nav>

            <div class="menu-toggle" onclick="toggleMenu()">☰</div>
        </div>
    </div>



    <div class="form-container">
        <div class="text-c">
            <h1 class="text-primary" style="text-decoration: underline;">Contact Us</h1>
            <h3 class="mb-4">Feel Free To Contact Us</h3>
        </div>



        <form method="post" >
            <div class="form-group">
                <h3>Full name:</h3>
                <input id="fullname" name="full_name" type="text" class="form-control" required pattern="[A-Za-z\s]+"
                    placeholder="Enter your full name" title="Only alphabets and spaces are allowed"><br>
            </div>

            <div class="form-row">
                <div class="form-group">
                    <h3>Phone number:</h3>
                    <div style="display: flex;">
                        <span class="form-control" id="form">+91</span>
                        <input id="phone" name="phone" type="tel" class="form-control" style="flex: 1;"
                            pattern="[6-9]{1}[0-9]{9}" maxlength="10" required placeholder="Enter 10-digit number"
                            title="Enter a valid 10-digit Indian mobile number (starts with 6-9)">
                    </div>
                </div>

                <div class="form-group">
                    <h3>E-mail:</h3>
                    <input id="email" name="email" type="email" class="form-control"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Please enter a valid email address"
                        placeholder="Enter your email" required>
                </div><br>

            </div><br>

            <div class="form-group">
                <h3>Inquiry message:</h3>
                <textarea name="message" placeholder="Message" rows="5" required></textarea>
            </div><br>
            <button name="btn1" type="submit">Submit</button>
        </form>
    </div>

    

    <!-- Quote Start -->
    <div class="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div class="container-c quote px-lg-0" style="justify-content: center;">
          <div class="row g-0 mx-lg-0">
              <div class="text-c">
               <h1 class="text-primary" style="text-decoration: underline;">Our location</h1>
               
           </div>
             
                <div class="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" style="min-height: 400px;">
                    <div class="position-relative h-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.0821827098694!2d72.96243967332154!3d23.601385394484602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db99bedd214e7%3A0x108ae1ac2fbf943d!2sRaj%20corporation!5e0!3m2!1sen!2sin!4v1748421104455!5m2!1sen!2sin"
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div class="col-lg-6 quote-text py-5 wow fadeIn" data-wow-delay="0.5s" style="Text-align: center;">
                    <div class="p-lg-5 pe-lg-0" style="text-align:left;">
                      
                       <h5 class="text-primary m-4" style="text-decoration: underline;">Our info</h5>
                        <p class="m-3 p-2"><i class="fa fa-map-marker-alt me-3"></i> <span style="font-weight:bold;">Address: </span> SUKUN COMPLEX, Madina Masjid Rd, Alkapuri Pologround, Himatnagar, Gujarat 383001</p>

                         <p class="m-3 p-2"><i class="fa fa-phone-alt me-3"></i> <span style="font-weight:bold;">Phone number:</span><br>+91 79904 52182 <br> +91 94080 03939</p>

                          <p class="m-3 p-2"><i class="fa fa-envelope me-3"></i> <span style="font-weight:bold;">E-mail : </span><br>rajcorporation07@gmail.com</p>                   
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- Quote End -->

        <!-- Footer Start -->
  
  <div class="container-fluid bg-dark text-body footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
    <div class="container py-5">
      <div class="row g-5">
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-4">Address</h5>
          <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>SUKUN COMPLEX, Madina Masjid Rd, Alkapuri Pologround, Himatnagar, Gujarat 383001</p>
          <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 79904 52182</p>
          <p class="mb-2"><i class="fa fa-envelope me-3"></i>shahidsabugar22@gmail.com</p>
          <div class="d-flex pt-2">
            <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-instagram"></i></a>
            <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
            <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
            <a class="btn btn-square btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-4">Quick Links</h5>

          <a class="btn btn-link" href="main.html">Home</a>
          <a class="btn btn-link" href="service.html">Our Services</a>
          <a class="btn btn-link" href="project.html">Our Projects</a>
          <a class="btn btn-link" href="contact.php">Contact Us</a>

        </div>
        <div class="col-lg-4 col-md-6">
          <h5 class="text-white mb-4">Project Gallery</h5>
          <div class="row g-2">
            <div class="col-4">
              <img class="img-fluid rounded" src="photo/main/main1.png" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid rounded" src="photo/project/r1.png" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid rounded" src="photo/main/about.png" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid rounded" src="photo/project/c1.png" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid rounded" src="photo/project/c2.png" alt="">
            </div>
            <div class="col-4">
              <img class="img-fluid rounded" src="photo/project/cleaning.png" alt="">
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="container">
      <div class="copyright">
        <div class="row">
          <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
            &copy; <a href="#">Raj corporation</a>, All Right Reserved.
          </div>
          <div class="col-md-6 text-center text-md-end">
            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
            Designed By <a href="https://htmlcodex.com">Aisha</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Footer End -->

  <script>
    function toggleMenu() {
      document.getElementById('mainNav').classList.toggle('show');
    }
  </script>


  <!-- Back to Top -->
  <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>


  <!-- JavaScript Libraries -->
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
  <script src="lib/wow/wow.min.js"></script>
  <script src="lib/easing/easing.min.js"></script>
  <script src="lib/waypoints/waypoints.min.js"></script>
  <script src="lib/counterup/counterup.min.js"></script>
  <script src="lib/owlcarousel/owl.carousel.min.js"></script>
  <script src="lib/isotope/isotope.pkgd.min.js"></script>
  <script src="lib/lightbox/js/lightbox.min.js"></script>

  <!-- Template Javascript -->
  <script src="js/main.js"></script>
</body>

</html>