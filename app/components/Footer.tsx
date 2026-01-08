'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaInstagram, FaYelp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
    const mobile = Boolean(userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    ));
    setIsMobile(mobile);
  }, []);

  const googleBusinessProfileURL = 'https://www.google.com/maps/place/Peach+Tree+Plumbing+LLC/@39.642466,-104.991296,15z/data=!4m2!3m1!1s0x0:0x5d4b3917d43291c9?sa=X&ved=2ahUKEwi52qTMwfqAAxU9go4IHRk2B2EQ_BJ6BAg_EAA&ved=2ahUKEwi52qTMwfqAAxU9go4IHRk2B2EQ_BJ6BAhDEAg';
  const instagramURL = 'https://www.instagram.com/peachtreeplumbing';
  const yelpURL = 'https://www.yelp.com/biz/peach-tree-plumbing-englewood-2?osq=denver+plumbing+team';

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>About Us</h3>
          <p className={styles.footerText}>Our mission is to provide reliable, high-quality, and professional service with integrity, honesty, and a commitment to customer satisfaction and to be the most trusted plumbing service by upholding the highest ethical standards and honest business practices, building lasting relationships to protect you and your home</p>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>Contact Us</h3>
          <p className={styles.footerText}>4210 South Galapago Street, Englewood, CO 80110</p>
          <p className={styles.footerText}>
            Email: <a href="mailto:PTP5280@gmail.com" className={styles.footerLink}>PTP5280@gmail.com</a>
          </p>
          <p className={styles.footerText}>
            Phone: <a href={isMobile ? 'tel:720-298-1900' : googleBusinessProfileURL} className={styles.footerLink} target="_blank" rel="noopener noreferrer">(720) 298-1900</a>
          </p>
        </div>
        <div className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>Follow Us</h3>
          <div className={styles.socialIcons}>
            <a href={instagramURL} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaInstagram /></a>
            <a href={yelpURL} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><FaYelp /></a>
          </div>
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
