"use client";

import React from "react";
import Link from "next/link"; // Import Link from Next.js
import Button from "../Button/Button"; // Import your reusable Button component
import styles from './Header.module.css'; // Import the CSS module for styling
  // Client-only code


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
              About
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
          <Link href='/register'> <Button>Sign Up</Button></Link>
          <Button>Log In</Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
