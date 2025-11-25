import React from 'react';

const Header = () => {
  return (
    <div className="jumbotron jumbotron-fluid bg-primary text-white text-center" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container">
        <h1 className="display-4">Expert Plumbing Services</h1>
        <p className="lead">Your trusted partner for all residential and commercial plumbing needs.</p>
      </div>
    </div>
  );
};

export default Header;
