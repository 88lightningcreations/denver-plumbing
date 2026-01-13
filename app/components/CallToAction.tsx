import React from 'react';
import Link from 'next/link';

const CallToAction: React.FC = () => {
  return (
    <div className={`text-center p-5 bg-light`}>
      <div className="container">
        <h2 className="fw-bold">Ready for Top-Notch Plumbing Services?</h2>
        <p className="lead mb-4">Don&apos;t let plumbing problems disrupt your day. Contact Peach Tree Plumbing for reliable and efficient solutions.</p>
        
        {/* Desktop Button */}
        <div className="d-none d-md-block">
            <Link href="/contact" className={`btn btn-primary btn-lg`}>
                Schedule Your Service Today
            </Link>
        </div>

        {/* Mobile Button */}
        <div className="d-block d-md-none">
            <a href="tel:720-298-1900" className={`btn btn-primary btn-lg w-100`}>
                Call Now: 720-298-1900
            </a>
        </div>

      </div>
    </div>
  );
};

export default CallToAction;
