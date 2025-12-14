'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 - Page Not Found | Peach Tree Plumbing';
  }, []);

  return (
    <div className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="display-1 fw-bold" style={{ color: 'var(--primary-color)' }}>404</h1>
          <h2 className="mb-4">Oops! Page Not Found.</h2>
          <p className="lead mb-4">
            We can&apos;t seem to find the page you&apos;re looking for. It might have been moved, deleted, or maybe you just mistyped the address.
          </p>
          <p>Let&apos;s get you back on track.</p>
          <Link href="/" className="btn btn-primary btn-lg mt-3">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
