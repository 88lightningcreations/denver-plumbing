import React from 'react';
import { getBlogPosts } from '../../lib/data';
import BlogList from '../components/BlogList';

const BlogsPage = async () => {
  const blogs = await getBlogPosts();

  return <BlogList blogs={blogs} />;
};

export default BlogsPage;
