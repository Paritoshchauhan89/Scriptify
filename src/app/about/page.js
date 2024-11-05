"use cliet";
import Image from "next/image"; // Importing Image from Next.js
import styles from "./about.module.css"; // Import the CSS module
import Head from 'next/head';


const About = () => {
  return (

    <>
         <Head>
        {/* Page-Specific Meta Tags */}
        <title>About Us - Your Website Name</title>
        <meta name="description" content="Learn more about our mission, values, and team on our About page." />
        <meta name="keywords" content="About us, Our mission, Our team, Company values" />
        <meta name="author" content="Your Name or Company Name" />

        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="About Us - Your Website Name" />
        <meta property="og:description" content="Learn more about our mission, values, and team on our About page." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://img.freepik.com/free-vector/reserved-lettering-with-ornament_1262-7402.jpg?t=st=1730485832~exp=1730489432~hmac=f2b7bf4d227ded43a9f6ee553b526630fa7cc0c19684a04257823accef455725&w=900" />
        <meta property="og:url" content="https://scriptifyy.netlify.app/about" />

        {/* Twitter Card Tags for Social Sharing on Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Your Website Name" />
        <meta name="twitter:description" content="Discover more about us on our About page." />
        <meta name="twitter:image" content="https://img.freepik.com/free-vector/reserved-lettering-with-ornament_1262-7402.jpg?t=st=1730485832~exp=1730489432~hmac=f2b7bf4d227ded43a9f6ee553b526630fa7cc0c19684a04257823accef455725&w=900" />

        {/* Canonical URL for SEO */}
        <link rel="canonical" href="https://scriptifyy.netlify.app/about" />
      </Head>
      <section className={styles.hero}>
        <h1>About Us</h1>
        <p>Your trusted platform for seamless scriptwriting and collaboration.</p>
        <div className={styles.heroImage}>
        <Image 
  src="/Images/About.png" 
  alt="Scriptify illustration"
  width={500} 
  height={400} 
  className={styles.image}
  priority
/>

        </div>
      </section>

      <section className={styles.aboutUsSection}>
        <div className="container mx-auto py-10">
          {/* Section 1: Our Mission */}
          <div className={styles.flexContainer}>
            <div className={styles.textContainer}>
              <h2 className={styles.heading}>Our Mission</h2>
              <p className={styles.paragraph}>
                At Scriptify, our mission is to empower writers and researchers by providing innovative tools for article publishing, plagiarism checking, and journal services. We strive to enhance the quality and accessibility of academic content worldwide.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/Images/Our Mission.png" // Replace with appropriate image path
                alt="Our Mission"
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          </div>

          {/* Section 2: Why Choose Us */}
          <div className={styles.flexContainer}>
            <div className={styles.imageContainer}>
              <Image
                src="/Images/WhyChoose.png" // Adjust the path to your image
                alt="Why Choose Us"
                width={500} // Set your desired width
                height={300} // Set your desired height
                className={styles.image}
              />
            </div>
            <div className={styles.textContainer}>
              <h2 className={styles.heading}>Why Choose Us</h2>
              <p className={styles.paragraph}>
                Our platform offers a user-friendly interface, ensuring a seamless experience for our users. With advanced AI tools and dedicated support, we are committed to helping you succeed in your writing journey.
              </p>
            </div>
          </div>

          {/* Section 3: Our Values */}
          <div className={styles.flexContainer}>
            <div className={styles.textContainer}>
              <h2 className={styles.heading}>Our Values</h2>
              <p className={styles.paragraph}>
                We believe in integrity, transparency, and excellence. Our values guide us in everything we do, from product development to customer service. Join us in our commitment to quality and ethical practices in research.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/Images/Our Values.png" // Adjust the path to your image
                alt="Our Values"
                width={500} // Set your desired width
                height={300} // Set your desired height
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
