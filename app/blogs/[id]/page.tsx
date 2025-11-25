import { getBlog } from '../../../lib/data';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

export default async function BlogPage({ params }: { params: { id: string } }) {
  const blog = await getBlog(params.id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <h1>{blog.title}</h1>
          <p>{blog.article}</p>
          <Link href="/blogs">Back to Blog</Link>
        </Col>
      </Row>
    </Container>
  );
}
