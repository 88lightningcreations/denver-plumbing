'use client';

import React from 'react';
import dynamic from 'next/dynamic';

interface Blog {
  id: string;
  title: string;
  description: string;
  slug: string;
}

interface BlogListProps {
  blogs: Blog[];
}

const BlogList = dynamic(() => import('./BlogList'), {
  ssr: false,
});

const BlogListClient: React.FC<BlogListProps> = ({ blogs }) => {
  return <BlogList blogs={blogs} />;
};

export default BlogListClient;
