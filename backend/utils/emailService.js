// utils/emailService.js
const nodemailer = require('nodemailer');

// Create a transporter using your email service provider settings
const transporter = nodemailer.createTransport({
    // Configure your email service provider (e.g., Gmail, SendGrid, etc.)
    service: 'Gmail',
    auth: {
        user: 'your-email@gmail.com',
        pass: 'your-email-password',
    },
});

// Function to send email notifications
exports.sendEmailNotification = async (to, subject, text) => {
    try {
        const mailOptions = {
            from: 'your-email@gmail.com',
            to,
            subject,
            text,
        };

        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};