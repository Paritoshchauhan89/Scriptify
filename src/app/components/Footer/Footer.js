"use client";
import styles from './Footer.module.css';
import Image from "next/image"; // Importing Image from Next.js



export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* About Section */}
        <div className={styles.left}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum quos
            molestias distinctio, eveniet dolorum suscipit sunt, ratione vitae
            asperiores a sapiente tenetur aut, delectus et ducimus!
          </p>
        </div>

        {/* Links Section */}
        <div className={styles.right}>
          <div className={styles.col1}>
            <h3>Important Links</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>About</li>
              <li>Contact</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className={styles.col1}>
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Support</li>
              <li>Careers</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
          <div className={styles.col1}>
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Team</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className={styles.contactUs}>
          <h2>Contact Us</h2>
          <p><b>Email:</b> test@gmail.com</p>
          <p><b>Call Now:</b> +91 931934-2061</p>
          <p><b>Address:</b> A-118, Noida, 201009</p>

          <div className={styles.subscribe}>
            <input type="text" placeholder="Enter your email" />
            <button className={styles.subscribeBtn}>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className={styles.socialMedia}>
        <ul>
        <li><Image src="/Images/linkdin.png" alt="LinkedIn" width={30} height={30} style={{ width: 'auto', height: 'auto' }} /></li>
<li><Image src="/Images/instagram.png" alt="Instagram" width={30} height={30} style={{ width: 'auto', height: 'auto' }} /></li>
<li><Image src="/Images/whatsapp.png" alt="WhatsApp" width={30} height={30} style={{ width: 'auto', height: 'auto' }} /></li>
<li><Image src="/Images/x.png" alt="X" width={30} height={30} style={{ width: 'auto', height: 'auto' }} /></li>

        </ul>
      </div>
    </footer>
  );
}
