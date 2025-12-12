'use client';

import React from 'react';

const CallToAction = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5">
        <h2 className="display-5 fw-bold">Ready to get started?</h2>
        <p className="col-md-8 fs-4">Contact us today for a free estimate on your plumbing needs.</p>
        <a href="tel:720-298-1900" className="custom-btn">
          Get a Free Estimate
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
