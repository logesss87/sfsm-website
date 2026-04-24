import "dotenv/config";
import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import multer from "multer";
import path from "path";
import fs from "fs";

// Configure multer for file uploads (store in memory temporarily)
const upload = multer({ 
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB limit
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Parse JSON bodies
  app.use(express.json());

  // API routes FIRST
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

let lastError = "";

  app.post("/api/apply", upload.single("resume"), async (req, res) => {
    try {
      const { firstName, lastName, email, phone, position } = req.body;
      const resume = req.file;

      if (!firstName || !lastName || !email || !phone || !position || !resume) {
        return res.status(400).json({ error: "All fields are required" });
      }

      // Check if email credentials are provided
      if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
        console.warn("SMTP credentials not configured. Simulating email send.");
        // Simulate email send for preview environment if credentials are not set
        return res.status(200).json({ 
          success: true, 
          message: "Application submitted successfully (Simulated - configure SMTP to actually send emails)" 
        });
      }

      // Create a transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_EMAIL,
          pass: process.env.SMTP_PASSWORD, // App Password for Gmail
        },
      });

      // Email options
      const mailOptions = {
        from: process.env.SMTP_EMAIL,
        to: "careerssfsm@gmail.com",
        subject: `New Job Application: ${position} - ${firstName} ${lastName}`,
        text: `
You have received a new job application.

Details:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone}
- Position Applied For: ${position}

The applicant's resume is attached.
        `,
        attachments: [
          {
            filename: resume.originalname,
            content: resume.buffer,
          },
        ],
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      res.status(200).json({ success: true, message: "Application submitted successfully" });
    } catch (error: any) {
      console.error("Error sending email:", error);
      lastError = error.message || String(error);
      res.status(500).json({ error: "Failed to submit application. Please try again later.", details: lastError });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
