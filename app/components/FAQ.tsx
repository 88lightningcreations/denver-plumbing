'use client';
import React from 'react';
import { Accordion } from 'react-bootstrap';

const faqs = [
  {
    question: 'What are your hours?',
    answer: 'We are available 24/7 for emergency services. Our regular business hours are Monday-Friday from 8am to 5pm.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Yes, we offer free estimates for all of our services. Please contact us to schedule an appointment.',
  },
  {
    question: 'What types of payment do you accept?',
    answer: 'We accept all major credit cards, as well as cash and check.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed and insured for your protection and peace of mind.',
  },
  {
    question: 'What areas do you service?',
    answer: 'We service the entire metropolitan area. Please contact us to see if we service your specific location.',
  },
];

const FAQ = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion>
        {faqs.map((faq, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
