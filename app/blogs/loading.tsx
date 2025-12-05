import React from 'react';
import { Container, Row, Col, Card, Placeholder } from 'react-bootstrap';

const Loading = () => {
  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">
        <Placeholder as="span" animation="glow">
          <Placeholder xs={4} />
        </Placeholder>
      </h2>
      <Row>
        {[...Array(3)].map((_, index) => (
          <Col key={index} lg={4} md={6} sm={12} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                  <Placeholder xs={6} /> <Placeholder xs={8} />
                </Placeholder>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Loading;
