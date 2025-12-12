'use client';
import React, { useState } from 'react';
import styles from './FAQ.module.css';
import { useFadeIn } from '../hooks/useFadeIn';

interface Faq {
  question: string;
  answer: string;
}

const faqs: Faq[] = [
    {
        question: "What areas do you serve?",
        answer: "We serve the entire Denver metropolitan area, including Arvada, Aurora, Centennial, Englewood, Littleton, Thornton, and Westminster."
    },
    {
        question: "Do you offer emergency services?",
        answer: "Yes, we offer 24/7 emergency plumbing services. We understand that plumbing problems don't always happen during regular business hours, so we're always available to help."
    },
    {
        question: "What types of plumbing services do you offer?",
        answer: "We offer a wide range of residential and commercial plumbing services, including: Drain cleaning, Water heater repair and installation, Leak detection and repair, Sewer line repair and replacement, Fixture installation and repair, Garbage disposal repair and installation, And more!"
    },
    {
        question: "Are your plumbers licensed and insured?",
        answer: "Yes, all of our plumbers are licensed and insured in the state of Colorado."
    },
    {
        question: "How much do you charge for your services?",
        answer: "We offer competitive pricing for all of our services. We also offer free estimates, so you'll know the cost of the job before we start."
    },
    {
        question: "What can I do to prevent my pipes from freezing in the winter?",
        answer: "There are a few things you can do to prevent your pipes from freezing in the winter: Insulate your pipes, Let your faucets drip, especially on cold nights, Open your cabinet doors to allow warm air to circulate around your pipes, If you're going out of town, turn off your water and drain your pipes."
    }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [ref, isVisible] = useFadeIn();

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const generateJsonLd = () => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    return {
      __html: JSON.stringify(schema)
    };
  };

  return (
    <div ref={ref} className={`${styles.faqContainer} ${isVisible ? styles.visible : ''}`}>
      {faqs.map((faq, index) => (
        <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}>
          <div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
            {faq.question}
            <span className={styles.icon}>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className={styles.faqAnswer}>
              {faq.answer}
            </div>
          )}
        </div>
      ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={generateJsonLd()}
      />
    </div>
  );
};

export default FAQ;
