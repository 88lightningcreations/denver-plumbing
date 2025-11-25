import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { getBlogs } from '../../lib/data';

interface Blog {
  id: string;
  title: string;
  description: string;
}

const BlogsPage = async () => {
  const blogs: Blog[] = await getBlogs();

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Blog</h2>
      <Row>
        {blogs.map((blog) => (
          <Col key={blog.id} lg={4} md={6} sm={12} className="mb-4">
            <Link href={`/blogs/${blog.id}`} passHref>
              <Card as="a" className="h-100">
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BlogsPage;
