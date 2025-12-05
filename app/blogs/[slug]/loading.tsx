import React from 'react';
import { Container, Placeholder } from 'react-bootstrap';

const LoadingPost = () => {
  return (
    <Container className="my-5">
      <main>
        <article>
          <h1>
            <Placeholder as="span" animation="glow">
              <Placeholder xs={8} />
            </Placeholder>
          </h1>
          <p className="text-muted">
            <Placeholder as="span" animation="glow">
              <Placeholder xs={4} />
            </Placeholder>
          </p>
          <Placeholder as="div" animation="glow">
            <Placeholder style={{ width: '100%', height: 400 }} className="my-4" />
          </Placeholder>
          <Placeholder as="p" animation="glow">
            <Placeholder xs={12} />
            <Placeholder xs={10} />
            <Placeholder xs={11} />
          </Placeholder>
        </article>
      </main>
    </Container>
  );
};

export default LoadingPost;
