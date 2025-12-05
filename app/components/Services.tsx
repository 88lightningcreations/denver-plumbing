'use client';

import React from 'react';
import styles from './Services.module.css';

const Services = () => {
  const services = [
    {
      title: 'Residential Plumbing',
      description: 'From leaky faucets to full-scale renovations, we provide reliable and efficient plumbing solutions for your home.',
    },
    {
      title: 'Commercial Plumbing',
      description: 'Our team is equipped to handle the complex plumbing needs of your business, ensuring minimal disruption to your operations.',
    },
    {
      title: 'Emergency Services',
      description: 'Plumbing emergencies can strike at any time. Our 24/7 emergency services are here to help when you need us most.',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Experienced Professionals',
      description: 'Our team consists of highly trained and experienced plumbers who are dedicated to providing the best possible service.',
    },
    {
      title: 'Upfront Pricing',
      description: 'We believe in transparency. You will always receive a clear and upfront price before we begin any work.',
    },
    {
      title: 'Customer Satisfaction Guaranteed',
      description: 'Your satisfaction is our top priority. We stand behind our work and will not rest until you are completely satisfied.',
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      <h2 className={styles.title}>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardText}>{service.description}</p>
          </div>
        ))}
      </div>

      <h2 className={`${styles.title} mt-5`}>Why Choose Us?</h2>
      <div className={styles.grid}>
        {whyChooseUs.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.cardText}>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
