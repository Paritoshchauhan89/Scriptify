// pages/contact.js
import styles from './contact.module.css';
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'; // Import icons from react-icons

export default function Contact() {
  return (
    <>
   <div className={styles.contactmaincontainer}>
     <div className={styles.contactContainer}>
      <div className={styles.leftSide}>
        <img
          src="/Images/Contact.png" // Replace with your image path
          alt="Contact Us"
          className={styles.contactImage}
        />
      </div>
      <div className={styles.rightSide}>
        <h2>Contact Us</h2>
        <form className={styles.contactForm}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />

          <button type="submit">Submit</button>
        </form>

      
      </div>
    </div>
    <div className={styles.contactInfo}>
          <div className={styles.card}>
            <FaMapMarkerAlt className={styles.icon} />
            <p>123 Main Street, City Name, Country</p>
          </div>
          <div className={styles.card}>
            <FaEnvelope className={styles.icon} />
            <p>example@gmail.com</p>
          </div>
          <div className={styles.card}>
            <FaWhatsapp className={styles.icon} />
            <p>+123 456 7890</p>
          </div>
        </div>
   </div>
   </>
  );
}
