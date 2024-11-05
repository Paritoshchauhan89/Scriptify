"use client";
import React, { useEffect } from 'react';
import styles from './register.module.css'; // Adjust the path as needed

const Register = () => {  // Renamed component to start with uppercase
    const createBubble = () => {
        const bubble = document.createElement("div");
        bubble.className = styles.bubble;
        const size = Math.random() * 50 + 20; // Random size between 20 and 70
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.animationDuration = `${Math.random() * 2 + 3}s`; // Duration between 3 and 5 seconds
        bubble.style.opacity = Math.random(); // Random opacity between 0 and 1
        document.getElementById("bubble-background").appendChild(bubble);
        
        // Remove bubble after animation
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    };

    useEffect(() => {
        for (let i = 0; i < 10; i++) {
            createBubble();
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const email = e.target[1].value;
    
        const response = await fetch('http://localhost:3000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email }),
        });
    
        const data = await response.json();
        if (response.ok) {
            alert(data.message);
        } else {
            alert('Error: ' + data.message);
        }
    };

    return (
        <div className={styles.bubbleBackground} id="bubble-background">
            <div className={styles.signupContainer}>
                <div className={styles.signupBox}>
                    <div className={styles.icon}>👤+</div>
                    <h2>Sign up</h2>
                    <form onSubmit={handleSubmit}> {/* added onSubmit handler here */}
                        <input type="text" placeholder="Name" required />
                        <input type="email" placeholder="Email" required />
                        <button type="submit">Sign up</button>
                        <button type="button" className={styles.loginWithGoogleBtn}>
                            Sign in with Google
                        </button>
                        <button type="button" className={styles.loginWithGoogleBtn} style={{ backgroundColor: '#0066c7' }}>
                            Sign in with LinkedIn
                        </button>
                    </form>
                    <p>Already have an account? <a href="#">Log in</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;  // Updated to export with uppercase
