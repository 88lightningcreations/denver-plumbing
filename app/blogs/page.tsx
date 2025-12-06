import React from 'react';
import { getBlogPosts } from '../../lib/data';
import BlogListWrapper from '../components/BlogListWrapper';

const BlogsPage = async () => {
  const blogs = await getBlogPosts();

  return <BlogListWrapper blogs={blogs} />;
};

export default BlogsPage;
