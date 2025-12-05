import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
// Using getBlogPosts as it selects all columns, including the slug
import { getBlogPosts } from '../../lib/data';

// Updated interface to include the slug
interface Blog {
  id: string;
  title: string;
  description: string;
  slug: string;
}

const BlogsPage = async () => {
  // Using getBlogPosts to fetch the blog data
  const blogs: Blog[] = await getBlogPosts();

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Our Blog</h2>
      <Row>
        {blogs.map((blog) => (
          <Col key={blog.id} lg={4} md={6} sm={12} className="mb-4">
            {/* The entire card is now a link, pointing to the correct slug-based URL */}
            <Link href={`/blogs/${blog.slug}`} style={{ textDecoration: 'none' }}>
              <Card className="h-100">
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
