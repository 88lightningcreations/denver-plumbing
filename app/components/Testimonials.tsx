'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Erin C.',
    quote: 'This has to be the easiest experience I’ve had when it comes to having repairs or updates done to my home. I needed hose line relocated…he was on time, straightforward, and the price was reasonable. Thank you!!!',
  },
  {
    name: 'Tom M.',
    quote: 'Johnathan communicates well, flexed with our schedule, arrived on time and completed the work quickly. We’ll use them again the future when the need arises.',
  },
  {
    name: 'Debbie P.',
    quote: 'John replaced our kitchen faucet. He arrived as scheduled, completed the job with cleanup at a reasonable cost. I would certainly recommend him.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-5">
      <h2 className="text-center mb-5">What Our Customers Are Saying</h2>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100">
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>&quot;{testimonial.quote}&quot;</p>
                  <footer className="blockquote-footer">{testimonial.name}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
