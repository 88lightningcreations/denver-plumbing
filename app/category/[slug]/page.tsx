import { supabase } from '../../lib/supabase';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import Image from 'next/image';

type Props = {
    params: { slug: string }
}

// Generate metadata for the category page
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const { data: category } = await supabase
    .from('blog_categories')
    .select('meta_title, meta_description')
    .eq('slug', params.slug)
    .single();

  if (!category) {
    return {
      title: 'Category Not Found',
      description: 'This category does not exist.',
    }
  }

  return {
    title: category.meta_title,
    description: category.meta_description,
    alternates: {
        canonical: `/category/${params.slug}`,
    },
  }
}

async function getCategoryData(slug: string) {
    const { data, error } = await supabase
        .from('blog_categories')
        .select('id, name, intro')
        .eq('slug', slug)
        .single();

    if (error || !data) {
        notFound();
    }

    return data;
}

async function getPostsForCategory(categoryId: string) {
    const { data, error } = await supabase
        .from('blog_posts')
        .select('title, slug, excerpt, image, created_at')
        .eq('category_id', categoryId)
        .eq('is_published', true)
        .order('created_at', { ascending: false });

    if (error) {
        console.error('Error fetching posts for category:', error);
        return [];
    }

    return data;
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const category = await getCategoryData(params.slug);
    const posts = await getPostsForCategory(category.id);

    return (
        <main className="container my-5 bg-light p-5">
            <div className="row">
                <div className="col-lg-10 offset-lg-1">
                    <div className="text-center mb-5">
                        <h1 className="fw-bold">{category.name}</h1>
                        {category.intro && <p className="lead text-muted">{category.intro}</p>}
                    </div>

                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        {posts.map((post) => (
                            <div key={post.slug} className="col">
                                <div className="card h-100 shadow-sm">
                                     <Image src={post.image || 'https://via.placeholder.com/400x200'} className="card-img-top" alt={post.title} width={400} height={200} />
                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title fw-bold">{post.title}</h5>
                                        <p className="card-text flex-grow-1">{post.excerpt}</p>
                                        <Link href={`/${post.slug}`} className="btn btn-primary mt-auto align-self-start">
                                            Read More
                                        </Link>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">
                                            Posted on {new Date(post.created_at).toLocaleDateString()}
                                        </small>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                     {posts.length === 0 && (
                        <div className="text-center">
                            <p>There are no articles in this category yet. Please check back soon!</p>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
