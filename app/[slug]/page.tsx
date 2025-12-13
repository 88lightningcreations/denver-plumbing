import React from 'react';
import styles from '../BlogPost.module.css';
import Image from 'next/image';
import { supabase } from '../lib/supabase';
import { notFound } from 'next/navigation';
import Markdown from '../components/Markdown'; // Import the new Markdown component

export const revalidate = 60; // Revalidate every 60 seconds

async function getBlogPost(slug: string) {
  const { data, error } = await supabase.from('blog_posts').select('*').eq('slug', slug).single();
  if (error) {
    console.error('Error fetching blog post:', error);
    notFound();
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
            {post.image && (
                <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className={styles.blogImage}
                />
            )}
            <Markdown content={post.content} />
        </div>
    </div>
  );
};

export default BlogPostPage;
