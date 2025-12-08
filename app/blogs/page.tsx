import React from 'react';
import { getBlogPosts } from '../../lib/data';
import BlogListClient from '../components/BlogListClient';

export const dynamic = 'force-dynamic';

const BlogsPage = async () => {
  const blogs = await getBlogPosts();

  return <BlogListClient blogs={blogs} />;
};

export default BlogsPage;
