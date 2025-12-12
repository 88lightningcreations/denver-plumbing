'use client';

import React from 'react';

const testimonials = [
  {
    name: 'John Doe',
    quote: 'Peach Tree Plumbing was a lifesaver! They fixed my leaky faucet in no time. Highly recommended!',
  },
  {
    name: 'Jane Smith',
    quote: 'I was so impressed with the professionalism and expertise of the Peach Tree team. They are my go-to plumbers now.',
  },
  {
    name: 'Peter Jones',
    quote: 'Fast, friendly, and affordable. What more could you ask for? I will definitely be using their services again.',
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
