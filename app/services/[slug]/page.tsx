import { getService } from '../../../lib/data';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = await getService(params.slug);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>{service.title}</h1>
          <p>{service.article}</p>
          <Link href="/">Back to Services</Link>
        </Col>
      </Row>
    </Container>
  );
}
