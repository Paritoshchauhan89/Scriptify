import React from "react";
import Image from "next/image"; // Importing Image from Next.js
import styles from "./page.module.css"; // Import the CSS module

const Page = () => {
  return (
    <section className={styles.hero}>
      <h1>Welcome to Scriptify</h1>
      <p>Your trusted platform for seamless scriptwriting and collaboration.</p>
      <div className={styles.heroImage}>
        <Image 
          src="/images/Scripity-Hero.png" // Use the public folder
          alt="Scriptify illustration"
          width={500} // Desired width
          height={400} // Desired height
        />
      </div>
    </section>
  );
};

export default Page;
