import { connectToDatabase } from '../../lib/mongodb'; // Adjust to your MongoDB connection file

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { token, password } = req.body;

        // Connect to your database
        const { db } = await connectToDatabase();
        
        // Find the user by the verification token
        const user = await db.collection('users').findOne({ verificationToken: token });
        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        // Hash the password (consider using bcrypt for this)
        const hashedPassword = /* hash password here */;
        
        // Update the user with the new password and set verified to true
        await db.collection('users').updateOne(
            { verificationToken: token },
            {
                $set: {
                    password: hashedPassword,
                    verified: true,
                    verificationToken: null, // Clear the token after use
                },
            }
        );

        res.status(200).json({ message: 'Password set successfully' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
