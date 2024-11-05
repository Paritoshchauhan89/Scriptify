"use client";
import { useEffect } from 'react';
import Image from "next/image";
import styles from './detail.module.css';

const DetailPage = () => {  // Renamed component to start with uppercase
  useEffect(() => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('#sidebar-nav a');

    const handleScroll = () => {
      let current = '';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove(styles.active);
        if (link.getAttribute('href').includes(current)) {
          link.classList.add(styles.active);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Wide Banner Section */}
      <section className={styles.banner}>
        <h1>Welcome to Scriptify</h1>
        <p>Your go-to platform for article publishing, plagiarism checking, and more.</p>
      </section>

      {/* Scrollspy Section */}
      <div className={styles.scrollspyContainer}>
        {/* Main Content with Sections */}
        <div className={styles.mainContent}>
          <section id="section1" className={styles.contentSection}>
            <h2>Introduction</h2>
            <p>Explore what Scriptify can offer for content creators and researchers.</p>
            <p>Scriptify is designed to simplify the process of publishing and managing your articles efficiently. With our intuitive interface, you can focus on what truly matters - your content.</p>
          </section>
          <section id="section2" className={styles.contentSection}>
            <h2>Features</h2>
            <div className={styles.benefit}>
              <Image src="/Images/Star.avif" alt="Gold Star" width={50} height={50} />
              <p>Advanced plagiarism detection with real-time analysis.</p>
            </div>
            {/* Add more benefits here */}
          </section>
          <section id="section4" className={styles.contentSection}>
            <h2>Pricing</h2>
            <p>Choose the best plan for your needs:</p>
            <ul>
              <li><strong>Basic Plan:</strong> $9.99/month - Access to all basic features.</li>
              <li><strong>Pro Plan:</strong> $19.99/month - Includes advanced features and priority support.</li>
              <li><strong>Enterprise Plan:</strong> Custom pricing - Tailored solutions for organizations.</li>
            </ul>
          </section>
        </div>

        {/* Sticky Sidebar with Course Navigation */}
        <nav className={styles.stickySidebar}>
          <ul id="sidebar-nav">
            <li><a href="#section1">Introduction</a></li>
            <li><a href="#section2">Features</a></li>
            <li><a href="#section3">How it Works</a></li>
            <li><a href="#section4">Pricing</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default DetailPage; // Updated export statement with uppercase name
