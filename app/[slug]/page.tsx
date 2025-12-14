import React from 'react';
import styles from '../BlogPost.module.css';
import Image from 'next/image';
import { supabase } from '../lib/supabase';
import { notFound } from 'next/navigation';
import Markdown from '../components/Markdown';

export const revalidate = 60;

async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  // If there is no data, the post was not found. Trigger the 404 page.
  if (!data) {
    notFound();
  }

  // If there was a database error other than "not found", log it.
  // The notFound() call above will have already handled the case where no rows are returned.
  if (error && error.code !== 'PGRST116') {
      console.error('Error fetching blog post:', error);
  }

  return data;
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogPost(params.slug);

  return (
    <div className={styles.blogContainer}>
        <div className={styles.blogPost}>
            <h1 className={styles.blogPostTitle}>{post.title}</h1>
            <p className={styles.blogMeta}>
                Posted on {new Date(post.created_at).toLocaleDateString()}
            </p>
            <Image
                src={post.image || 'https://via.placeholder.com/800x400'}
                alt={post.title}
                width={800}
                height={400}
                className={styles.blogImage}
                style={{ width: '100%', height: 'auto' }} // Add this style
            />
            <div className={styles.blogContent}>
              <Markdown content={post.content} />
            </div>
        </div>
    </div>
  );
};

export default BlogPostPage;
