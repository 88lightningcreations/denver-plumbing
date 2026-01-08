
import React from 'react';

const MissionStatement = () => {
  return (
    <section id="mission" className="py-5">
      <div className="container text-center">
        <h2 className="mb-5">A Message from Our Owner</h2>
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <blockquote className="blockquote">
              <p className="lead mb-0">
                "When you support small local business you're not helping a CEO buy a third vacation home or another new car, you're directly helping local families meet everyday needs, such as buying groceries or paying for children's activities like dance lessons, or a team jersey, or a student pay for college, when you shop small you help real people meet basic needs and keep the money you spend locally making our community more vibrant and resilient."
              </p>
              <footer className="blockquote-footer mt-3">Jonathan</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;
