import React from 'react';

const Loading = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">
        <span className="placeholder-glow">
          <span className="placeholder col-4"></span>
        </span>
      </h2>
      <div className="row">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span> <span className="placeholder col-4"></span> <span className="placeholder col-4"></span>{' '}
                  <span className="placeholder col-6"></span> <span className="placeholder col-8"></span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loading;
