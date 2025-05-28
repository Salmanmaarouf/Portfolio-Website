const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Serve static files from 'public' and root directory
app.use(express.static(path.join(__dirname, "../public")));  
app.use(express.static(path.join(__dirname, ".."))); 

// ✅ Serve specific HTML pages correctly
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.get("/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../about.html"));
});

app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../contact.html"));
});

app.get("/projects.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../projects.html"));
});

app.get("/blogs_and_commentaries.html", (req, res) => {
  res.sendFile(path.join(__dirname, "../blogs_and_commentaries.html"));
});

// ✅ Serve individual blog posts correctly
app.get("/blogs/:blogName", (req, res) => {
  res.sendFile(path.join(__dirname, `../blogs/${req.params.blogName}`));
});

// ✅ Contact form submission handler
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

// ✅ Serve static assets (JS, CSS, images) properly
app.get("/script.js", (req, res) => {
  res.sendFile(path.join(__dirname, "../script.js"));
});

app.get("/styles.css", (req, res) => {
  res.sendFile(path.join(__dirname, "../styles.css"));
});

// ✅ Handle 404 Errors (if a file doesn't exist)
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// ✅ Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
