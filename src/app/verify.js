"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Verify = () => {
    const router = useRouter();
    const { token } = router.query; // Get token from the URL
    const [password, setPassword] = useState('');

    const handlePasswordChange = async () => {
        // Make API call to verify the token and set the password
        const response = await fetch('/api/set-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert(data.message);
            // Redirect or perform another action after setting password
        } else {
            alert('Error: ' + data.message);
        }
    };

    return (
        <div>
            <h2>Set Your Password</h2>
            <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handlePasswordChange}>Set Password</button>
        </div>
    );
};

export default Verify;
