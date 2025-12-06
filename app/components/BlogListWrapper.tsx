'use client';

import dynamic from 'next/dynamic';
import React from 'react';

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

const BlogListWrapper: React.FC<BlogListProps> = ({ blogs }) => {
  return <BlogList blogs={blogs} />;
};

export default BlogListWrapper;
