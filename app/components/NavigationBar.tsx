'use client';

import React from 'react';
import Link from 'next/link';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <nav className={`${styles.navbar} fixed-top`}>
      <div className="container">
        <div className={styles.navContainer}>
          <Link href="/" className={styles.brand}>
            Peach Tree Plumbing
          </Link>
          <a href="tel:720-298-1900" className={styles.phoneLink}>
            call & text (720)298-1900
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
