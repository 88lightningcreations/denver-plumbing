'use client';
import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero">
      <div>
        <h1 className="display-4">Your Trusted Local Plumber</h1>
        <p className="lead">
          Fast, friendly, and reliable service for all your plumbing needs.
          <br />
          Serving Denver, Colorado.
        </p>
      </div>
      <div>
        <Image
          src="/residential and commercial plumber denver colorado.jpeg"
          alt="Professional plumber working on a pipe"
          width={500}
          height={500}
          className="img-fluid rounded"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;