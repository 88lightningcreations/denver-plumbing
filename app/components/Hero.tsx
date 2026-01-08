'use client';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-image-mobile">
        <Image
          src="/PTP-LOGO.jpg"
          alt="Peach Tree Plumbing Logo"
          width={300}
          height={300}
          className="img-fluid"
          priority
        />
      </div>
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="display-4">Your Trusted Local Plumber</h1>
          <p className="lead">
            Fast, friendly, and reliable service for all your plumbing needs.
            <br />
            Serving Denver, Colorado.
            <br />
            Call or text us anytime when you need us!
          </p>
        </div>
        <div className="hero-image-desktop">
          <Image
            src="/PTP-LOGO.jpg"
            alt="PTP Logo"
            width={500}
            height={500}
            className="img-fluid"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
