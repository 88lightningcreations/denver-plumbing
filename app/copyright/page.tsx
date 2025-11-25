import React from 'react';

const Copyright = () => {
  return (
    <div className="container mt-5">
      <h1>Copyright</h1>
      <p>This is a generic copyright notice. You should replace this with your own copyright notice.</p>
      <p>&copy; {new Date().getFullYear()} Plumbing Co. All Rights Reserved.</p>
      <p>All content on this website, including text, images, and code, is the property of Plumbing Co. and is protected by copyright law. You may not reproduce, distribute, or transmit any of the content on this website without our prior written permission.</p>
      <h2>Trademarks</h2>
      <p>All trademarks, service marks, and trade names on this website are the property of Plumbing Co. or their respective owners. You may not use any of these trademarks, service marks, or trade names without our prior written permission.</p>
      <h2>Contact us</h2>
      <p>If you have any questions about our copyright notice, please contact us at:</p>
      <p>Plumbing Co.</p>
      <p>123 Main Street</p>
      <p>Anytown, USA 12345</p>
      <p>Phone: 123-456-7890</p>
    </div>
  );
};

export default Copyright;
