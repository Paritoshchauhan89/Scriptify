import nodemailer from 'nodemailer';
import { v4 as uuidv4 } from 'uuid'; // To generate unique tokens
import { connectToDatabase } from '../../lib/mongodb'; // You need to implement this to connect to your MongoDB

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email } = req.body;

        // Here you should validate the email and name

        // Generate a unique verification token
        const verificationToken = uuidv4();

        // Connect to your database and save the user with the token
        const { db } = await connectToDatabase();
        await db.collection('users').insertOne({
            name,
            email,
            verificationToken,
            verified: false,
        });

        // Send verification email
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Use your email service
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your email password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Email Verification',
            html: `<p>Hello ${name},</p>
                   <p>Please verify your email by clicking on the link below:</p>
                   <a href="${process.env.NEXT_PUBLIC_URL}/verify?token=${verificationToken}">Verify Email</a>`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ message: 'Error sending email' });
            }
            res.status(200).json({ message: 'Verification email sent' });
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
