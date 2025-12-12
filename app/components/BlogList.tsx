'use client';

import React from 'react';
import Link from 'next/link';

interface Blog {
  id: string;
  title: string;
  description: string;
  slug: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList: React.FC<BlogListProps> = ( { blogs } ) => {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Our Blog</h2>
      <div className="row">
        {blogs.map((blog) => (
            <div key={blog.id} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <Link href={`/blogs/${blog.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card h-100">
                  <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text">{blog.description}</p>
                  </div>
                </div>
              </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
