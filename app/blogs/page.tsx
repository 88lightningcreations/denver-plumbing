import React from 'react';
import styles from './Blog.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '../lib/supabase';

export const revalidate = 60; // Revalidate every 60 seconds

async function getBlogPosts() {
  const { data, error } = await supabase.from('blog_posts').select('*');
  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
  return data;
}

const BlogPage = async () => {
  const blogPosts = await getBlogPosts();

  return (
    <div className={styles.blogContainer}>
      <h1 className={styles.blogTitle}>Our Blog</h1>
      <div className={styles.blogGrid}>
        {blogPosts.map((post: any) => (
          <div className={styles.blogCard} key={post.id}>
            {post.image && <Image src={post.image} alt={post.title} width={400} height={250} className={styles.blogImage} />}
            <div className={styles.blogContent}>
              <h2 className={styles.blogPostTitle}>{post.title}</h2>
              <p className={styles.blogMeta}>Posted on {new Date(post.created_at).toLocaleDateString()}</p>
              <p className={styles.blogExcerpt}>{post.excerpt}</p>
              <Link href={`/blogs/${post.slug}`} className={styles.readMoreLink}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
