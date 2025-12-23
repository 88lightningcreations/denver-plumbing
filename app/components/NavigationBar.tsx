'use client';

import React from 'react';
import Link from 'next/link';

const NavigationBar = () => {
  return (
    <nav className="navbar brand-navbar fixed-top">
      <div className="container d-flex justify-content-between">
        <Link href="/" className="navbar-brand navbar-brand-peach">
          Peach Tree Plumbing
        </Link>
        <a href="tel:720-298-1900" className="nav-link text-white"> 
            <span className="d-lg-none">Call & Text </span>
            (720) 298-1900
        </a>
      </div>
    </nav>
  );
};

export default NavigationBar;
