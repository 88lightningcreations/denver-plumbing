
import { getBlogPostBySlug } from '../../../lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container my-5">
        <main>
            <article>
            <h1>{post.title}</h1>
            <p className="text-muted">Published on: {new Date(post.created_at).toLocaleDateString()}</p>
            {post.image_url && 
                <Image 
                    src={post.image_url} 
                    alt={post.title} 
                    className="img-fluid my-4" 
                    width={1200} 
                    height={675} 
                    style={{ objectFit: 'cover' }}
                />}
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
        </main>
    </div>
  );
}
