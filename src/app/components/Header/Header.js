import React from "react";
import Link from "next/link"; // Import Link from Next.js
import Button from "../Button/Button"; // Import your reusable Button component
import styles from './Header.module.css'; // Import the CSS module for styling

const Header = () => {
  return (
    <header className={`${styles.header} bg-white shadow-md`}>
      <nav className={`${styles.navbar} flex items-center justify-between p-4`}>
        <div className={styles.logo}>Scriptify</div>
        <ul className={`${styles.navLinks} flex space-x-4`}>
        <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/services" className={styles.navLink}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/blogs" className={styles.navLink}>
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex space-x-2">
          <Button className="bg-blue-500 hover:bg-blue-700">Sign Up</Button>
          <Button className="bg-gray-600 hover:bg-gray-700">Log In</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
