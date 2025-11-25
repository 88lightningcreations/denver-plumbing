import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Link from 'next/link';
import { getServices } from '../../lib/data';

const Services = async () => {
  const services = await getServices();

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Services</h2>
      <CardGroup>
        {services.map((service, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <Link href={`/services/${service.id}`} passHref>
              <Card as="a" className="h-100">
                <Card.Body>
                  <Card.Title>{service.title}</Card.Title>
                  <Card.Text>{service.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </div>
        ))}
      </CardGroup>
    </div>
  );
};

export default Services;
