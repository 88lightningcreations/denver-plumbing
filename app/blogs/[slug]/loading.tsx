import React from 'react';

const LoadingPost = () => {
  return (
    <div className="container my-5">
      <main>
        <article>
          <h1>
            <span className="placeholder col-8"></span>
          </h1>
          <p className="text-muted">
            <span className="placeholder col-4"></span>
          </p>
          <div className="placeholder w-100 my-4" style={{ height: 400 }}></div>
          <p className="placeholder-glow">
            <span className="placeholder col-12"></span>
            <span className="placeholder col-10"></span>
            <span className="placeholder col-11"></span>
          </p>
        </article>
      </main>
    </div>
  );
};

export default LoadingPost;
