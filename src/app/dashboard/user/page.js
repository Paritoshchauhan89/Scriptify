"use client";
import { useState } from 'react';
import Head from 'next/head';
import DashboardStyles from '@/app/dashboard/styles/dashboard.module.css';
import UserSidebar from '@/app/components/Sidebar/User/UserSidebar';
import Image from "next/image";


const Page = () => {
  const [imageSrc, setImageSrc] = useState(null);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [theme, setTheme] = useState('light');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setImageSrc(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleNotificationChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpiryChange = (event) => {
    setExpiry(event.target.value);
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <title>Dashboard</title>
      </Head>
      <header className={DashboardStyles.header}>
        <div className={DashboardStyles.container}>
          <div className={DashboardStyles.logo}>Scriptify</div>
          <nav className={DashboardStyles.nav}>
            <a href="#" className={DashboardStyles.link}>Home</a>
            <a href="#" className={DashboardStyles.link}>Services</a>
            <a href="#" className={DashboardStyles.link}>Account</a>
          </nav>
        </div>
      </header>
      <div className={DashboardStyles.container}>
        <UserSidebar/>

        {/* Main Content */}
        <main className={DashboardStyles.mainContent}>
          <h2>Profile Information</h2>
          <section className={DashboardStyles.section}>
            <div className={DashboardStyles.sectionProfile}>
              <div className={DashboardStyles.profilePhotoContainer}>
                <label htmlFor="profile-photo">Upload Profile Photo</label>
                <div
                  className={DashboardStyles.profilePhoto}
                  onClick={() => document.getElementById('file-input').click()}
                >
                  {imageSrc ? (
                    <Image src={imageSrc} alt="Profile" />
                  ) : (
                    <span>+</span>
                  )}
                  <input type="file" id="file-input" accept="image/*" onChange={previewImage} style={{ display: 'none' }} />
                </div>
              </div>

              <div className={DashboardStyles.groupInput}>
                <div className={DashboardStyles.inputGroup}>
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className={DashboardStyles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className={DashboardStyles.inputGroup}>
                  <label htmlFor="phone">Contact No.</label>
                  <input type="tel" id="phone" placeholder="Enter your Contact No" />
                </div>
              </div>
            </div>
            <button className={DashboardStyles.button}>Save Changes</button>
          </section>

          <h2>Account Settings</h2>
          <section className={DashboardStyles.section}>
            <div className={DashboardStyles.checkboxGroup}>
              <input
                type="checkbox"
                id="notifications"
                checked={notificationsEnabled}
                onChange={handleNotificationChange}
              />
              <label htmlFor="notifications">Enable Notifications</label>
            </div>
            <div className={DashboardStyles.radioGroup}>
              <input
                type="radio"
                id="dark-mode"
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={handleThemeChange}
              />
              <label htmlFor="dark-mode">Dark Mode</label>
            </div>
            <div className={DashboardStyles.radioGroup}>
              <input
                type="radio"
                id="light-mode"
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={handleThemeChange}
              />
              <label htmlFor="light-mode">Light Mode</label>
            </div>
          </section>

          <h2>Subscription</h2>
          <section className={DashboardStyles.section}>
            <p>Current Plan: Basic</p>
            <button className={DashboardStyles.button}>Upgrade</button>
          </section>

          <h2>Payment Information</h2>
          <section className={DashboardStyles.section}>
            <div className={DashboardStyles.groupInput}>
              <div className={DashboardStyles.inputGroup}>
                <label htmlFor="card-number">Card Number</label>
                <input
                  type="text"
                  id="card-number"
                  placeholder="Enter card number"
                  value={cardNumber}
                  onChange={handleCardNumberChange}
                />
              </div>
              <div className={DashboardStyles.inputGroup}>
                <label htmlFor="expiry">Expiry Date</label>
                <input
                  type="text"
                  id="expiry"
                  placeholder="MM/YY"
                  value={expiry}
                  onChange={handleExpiryChange}
                />
              </div>
            </div>
            <button className={DashboardStyles.button}>Update Payment</button>
          </section>
        </main>
        
      
      </div>
      <footer className={DashboardStyles.footer}>
          <div>
            <strong>Customer Support</strong><br />
            Email: <a href="mailto:support@scriptify.com">support@scriptify.com</a><br />
            Phone: 123-456-7890
          </div>
          <div>
            <strong>Company Info</strong><br />
            <a href="#">About Us</a><br />
            <a href="#">Careers</a><br />
            <a href="#">Privacy Policy</a>
          </div>
        </footer>
    </>
  );
};

export default Page;
