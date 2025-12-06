'use client';
import React, { useState, useEffect } from 'react';
import { getFaqs } from '../../lib/data';
import styles from './FAQ.module.css';

interface Faq {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [faqs, setFaqs] = useState<Faq[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      const fetchedFaqs = await getFaqs();
      setFaqs(fetchedFaqs as Faq[]);
    };

    fetchFaqs();
  }, []);

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
    <div className={styles.faqContainer}>
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
