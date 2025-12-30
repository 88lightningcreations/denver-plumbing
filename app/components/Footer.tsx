import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaInstagram, FaYelp } from 'react-icons/fa';

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
          <p className={styles.footerText}>4210 South Galapago Street, Englewood, CO 80110</p>
          <p className={styles.footerText}>Email: PTP5280@gmail.com</p>
          <p className={styles.footerText}>Email: coloradoplumbingsolutions@gmail.com</p>
          <p className={styles.footerText}>Phone: (720) 298-1900</p>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>Stay Connected</h3>
          <div className={styles.socialIcons}>
            <a href="https.www.facebook.com/people/Colorado-Plumbing-Solutions/61570501647326/#" className={styles.socialIcon} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.yelp.com/biz/peach-tree-plumbing-englewood-2?osq=denver+plumbing+team" className={styles.socialIcon} target="_blank" rel="noopener noreferrer"><FaYelp /></a>
            <a href="#" className={styles.socialIcon}><FaInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
