import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>&copy; {new Date().getFullYear()} Peach Tree Plumbing. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
