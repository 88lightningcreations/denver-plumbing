'use client';

import React from 'react';

const CallToAction = () => {
  return (
    <div className="p-5 mb-4 bg-light rounded-3">
      <div className="container-fluid py-5 text-center">
        <h2 className="display-5 fw-bold">Ready to get started?</h2>
        <p className="col-md-8 fs-4 mx-auto">Contact us today for a free estimate on your plumbing needs.</p>
        <a href="https://share.google/o7OmMQGe2FxyyoZrr" className="custom-btn" target="_blank" rel="noopener noreferrer">
          <span className="d-block">Get a Free</span>
          <span className="d-block">Estimate</span>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;
