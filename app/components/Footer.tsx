import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>About Us</h3>
          <p className={styles.footerText}>Your trusted local plumber in Denver, Colorado, providing top-notch residential and commercial services.</p>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>Contact Us</h3>
          <p className={styles.footerText}>4210 South Galapago Street, Englewood, CO 80110</p>
          <p className={styles.footerText}>Email: PTP5280@gmail.com</p>
          <p className={styles.footerText}>Phone: (720) 298-1900</p>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <Link href="/terms-of-service" className={styles.footerLink}>Terms of Service</Link>
        <Link href="/terms-of-use" className={styles.footerLink}>Terms of Use</Link>
        <Link href="/privacy-policy" className={styles.footerLink}>Privacy Policy</Link>
        <Link href="/disclaimer" className={styles.footerLink}>Disclaimer</Link>
        <Link href="/copyright-notice" className={styles.footerLink}>Copyright Notice</Link>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; {currentYear} Peach Tree Plumbing. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
