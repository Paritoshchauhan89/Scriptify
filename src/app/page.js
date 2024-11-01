import React from "react";
import Image from "next/image";
import styles from "./page.module.css"; // Import the CSS module
import Button from "./components/Button/Button";
import Head from "next/head";

const Page = () => {
    return (
        <>
            <Head>
                <title>Scriptify - Brief Descriptive Tagline</title>
                <meta name="description" content="A concise and compelling description of your website's purpose and offerings." />
                <meta name="keywords" content="keyword1, keyword2, keyword3, relevant to your site" />
                <meta name="author" content="Your Name or Company Name" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Scriptify - Brief Descriptive Tagline" />
                <meta property="og:description" content="A compelling description that will appear when your homepage is shared on social media." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://scriptifyy.netlify.app/path/to/your-social-share-image.jpg" />
                <meta property="og:url" content="https://scriptifyy.netlify.app" />
                <meta property="og:title" content="Scriptify - Brief Descriptive Tagline" />
                <meta property="og:description" content="A compelling description that will appear when your homepage is shared on social media." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://scriptifyy.netlify.app/path/to/your-social-share-image.jpg" />
                <meta property="og:url" content="https://scriptifyy.netlify.app" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Scriptify - Brief Descriptive Tagline" />
                <meta name="twitter:description" content="A short, catchy description of your site for Twitter." />
                <meta name="twitter:image" content="https://scriptifyy.netlify.app/path/to/your-twitter-share-image.jpg" />
                <link rel="icon" href="/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="icon" sizes="192x192" href="/android-touch-icon.png" />
                <link rel="canonical" href="https://scriptifyy.netlify.app" />
                <meta name="robots" content="index, follow" />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "http://schema.org",
                        "@type": "WebSite",
                        "name": "Scriptify",
                        "url": "https://scriptifyy.netlify.app",
                        "sameAs": ["https://facebook.com/yourprofile", "https://twitter.com/yourprofile"],
                        "potentialAction": {
                            "@type": "SearchAction",
                            "target": "https://scriptifyy.netlify.app/search?query={search_term}",
                            "query-input": "required name=search_term"
                        }
                    })}
                </script>
            </Head>

            <section className={styles.hero}>
                <h1>Welcome to Scriptify</h1>
                <p>Your trusted platform for seamless scriptwriting and collaboration.</p>
                <div className={styles.heroImage}>
                    <Image
                        src="/Images/Scripity-Hero.png" // Use the public folder
                        alt="Scriptify illustration"
                        width={500} // Desired width
                        height={400} // Desired height
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
                <div className={styles.featuresSection}>
                    <h2 className={styles.sectionTitle}>Key Features</h2>
                    <div className={styles.featuresGrid}>
                        <div className={styles.featureCard}>
                            <img src="/Images/Collaborative Writing.png" alt="Collaborative Writing Icon" className={styles.featureIcon} />
                            <h3>Collaborative Writing</h3>
                            <p>Work together with your team in real-time, wherever you are. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <div className={styles.buttonContainer}>
                                <a href="#" className={styles.readMore}>Read More</a>
                                <button className={styles.featureBtn}>Get Service</button>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <img src="/Images/Advanced Editing Tools.png" alt="Advanced Editing Tools Icon" className={styles.featureIcon} />
                            <h3>Advanced Editing Tools</h3>
                            <p>Utilize powerful tools to refine your scripts to perfection.</p>
                            <div className={styles.buttonContainer}>
                                <a href="#" className={styles.readMore}>Read More</a>
                                <button className={styles.featureBtn}>Get Service</button>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <img src="/Images/Secure Cloud Storage.png" alt="Secure Cloud Storage Icon" className={styles.featureIcon} />
                            <h3>Secure Cloud Storage</h3>
                            <p>Keep your scripts safe and accessible from anywhere.</p>
                            <div className={styles.buttonContainer}>
                                <a href="#" className={styles.readMore}>Read More</a>
                                <button className={styles.featureBtn}>Get Service</button>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <img src="/Images/Secure Cloud Storage.png" alt="Secure Cloud Storage Icon" className={styles.featureIcon} />
                            <h3>Secure Cloud Storage</h3>
                            <p>Keep your scripts safe and accessible from anywhere.</p>
                            <div className={styles.buttonContainer}>
                                <a href="#" className={styles.readMore}>Read More</a>
                                <button className={styles.featureBtn}>Get Service</button>
                            </div>
                        </div>
                        <div className={styles.featureCard}>
                            <img src="/Images/Secure Cloud Storage.png" alt="Secure Cloud Storage Icon" className={styles.featureIcon} />
                            <h3>Secure Cloud Storage</h3>
                            <p>Keep your scripts safe and accessible from anywhere.</p>
                            <div className={styles.buttonContainer}>
                                <a href="#" className={styles.readMore}>Read More</a>
                                <button className={styles.featureBtn}>Get Service</button>
                            </div>
                        </div>
                    </div>
                    <Button>View All Services</Button>
                </div>
            </section>
        </>

    );
};

export default Page;
