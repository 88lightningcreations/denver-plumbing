'use client';

import React from 'react';
import Link from 'next/link';
import styles from './CallToAction.module.css';

const CallToAction = () => {
  return (
    <div className={styles.ctaContainer}>
      <h2 className={styles.ctaTitle}>Ready to get started?</h2>
      <p className={styles.ctaSubtitle}>Contact us today for a free estimate on your plumbing needs.</p>
      <Link href="/contact" className={styles.ctaButton}>
        Get a Free Estimate
      </Link>
    </div>
  );
};

export default CallToAction;
