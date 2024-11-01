"use client";
import React from 'react';
import styles from './Button.module.css'; // Import the CSS module for styling

const Button = ({
  onClick,
  children,
  type = 'button',
  className = '',
  variant = 'primary', // default variant
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={disabled ? null : onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${className}`} // Apply classes from module
    >
      {children}
    </button>
  );
};

export default Button;
