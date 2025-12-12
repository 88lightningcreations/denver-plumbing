import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>About Us</h3>
          <p className={styles.footerText}>Your trusted local plumber in Denver, Colorado, providing top-notch residential and commercial services.</p>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>Contact Us</h3>
          <p className={styles.footerText}>123 Plumbing Ave, Denver, CO 80202</p>
          <p className={styles.footerText}>Email: contact@peachtreeplumbing.com</p>
          <p className={styles.footerText}>Phone: (303) 555-1234</p>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>Stay Connected</h3>
          <div className={styles.socialIcons}>
            <a href="#" className={styles.socialIcon}><FaFacebook /></a>
            <a href="#" className={styles.socialIcon}><FaTwitter /></a>
            <a href="#" className={styles.socialIcon}><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
