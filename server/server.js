const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Important: Serve static files from the root directory
// This ensures CSS, JS, and image files are properly loaded
app.use(express.static(path.join(__dirname, '..')));

// Handle the contact form submission
app.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: `New Contact Form Submission from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Email sending failed" });
  }
});

// Define specific routes for your HTML pages
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.get('/about.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../about.html'));
});

app.get('/contact.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../contact.html'));
});

app.get('/projects.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../projects.html'));
});

// For any other routes, serve index.html as fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));