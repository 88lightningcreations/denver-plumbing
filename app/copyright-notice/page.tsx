import React from 'react';

const CopyrightNotice = () => {
  return (
    <div className="container mt-5">
      <h1>Copyright Notice</h1>
      <p>Copyright © {new Date().getFullYear()} Peach Tree Plumbing. All rights reserved.</p>
      <p>The content of this website, including but not limited to the text, graphics, images, and other material, is protected by copyright and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works of any of the content without our prior written permission.</p>
    </div>
  );
};

export default CopyrightNotice;
