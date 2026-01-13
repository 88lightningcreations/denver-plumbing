import React from 'react';
import Image from 'next/image';
import { supabase } from '../lib/supabase';
import { notFound } from 'next/navigation';
import Markdown from '../components/Markdown';
import { Metadata } from 'next';

export const revalidate = 60;

// generateMetadata function
type Props = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return {
    title: post.meta_title,
    description: post.meta_description,
    keywords: post.secondary_keywords,
    openGraph: {
        title: post.meta_title,
        description: post.meta_description,
        url: `https://peachtreeplumbing5280.com/${post.slug}`,
        images: [
            {
                url: post.image || 'https://peachtreeplumbing5280.com/PTP-LOGO.jpg',
                width: 800,
                height: 600,
                alt: post.alt_text || post.focus_keyword,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: post.meta_title,
        description: post.meta_description,
        images: [post.image || 'https://peachtreeplumbing5280.com/PTP-LOGO.jpg'],
    },
    alternates: {
      canonical: post.canonical_url || `https://peachtreeplumbing5280.com/${post.slug}`,
    },
  }
}


// This interface matches the component's expectation
interface FAQItem {
  question: string;
  answer: string;
}

// This interface matches the structure of the data coming from Supabase
interface SupabaseFaqItem {
    name: string;
    acceptedAnswer: {
        text: string;
    };
}

async function getBlogPost(slug: string) {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true) // Only fetch published posts
    .single();

  if (!data) {
    notFound();
  }

  if (error && error.code !== 'PGRST116') {
      console.error('Error fetching blog post:', error);
  }

  return data;
}

const BlogPostPage = async ({ params }: { params: { slug: string } }) => {
  const post = await getBlogPost(params.slug);

  if (!post) {
    // The getBlogPost function already calls notFound(), but it's good practice 
    // to have this check in the component as well.
    notFound();
  }

  let faqs: FAQItem[] = [];
  // Check if the structured data and the mainEntity array exist
  if (post.faq_json && post.faq_json.mainEntity && Array.isArray(post.faq_json.mainEntity)) {
    // Map the incoming data structure to the one the component expects
    faqs = post.faq_json.mainEntity.map((item: SupabaseFaqItem) => ({
      question: item.name,
      answer: item.acceptedAnswer.text,
    }));
  }

  const articleJsonLd = {
    '@type': post.schema_type || 'Article', // Use dynamic schema type
    'headline': post.title,
    'description': post.excerpt, // Use excerpt for description
    'image': post.image || 'https://peachtreeplumbing5280.com/PTP-LOGO.jpg',
    'datePublished': new Date(post.created_at).toISOString(),
    'dateModified': new Date(post.updated_at).toISOString(), // Use updated_at
    'author': {
      '@type': 'Organization', // Using Organization as author for now
      'name': 'Peach Tree Plumbing'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Peach Tree Plumbing',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://peachtreeplumbing5280.com/PTP-LOGO.jpg'
      }
    },
    'mainEntityOfPage': {
        '@type': 'WebPage',
        '@id': post.canonical_url || `https://peachtreeplumbing5280.com/${post.slug}`
    }
  };

  let jsonLd;

  if (faqs && faqs.length > 0) {
      const faqJsonLd = {
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
      };
      jsonLd = {
          '@context': 'https://schema.org',
          '@graph': [articleJsonLd, faqJsonLd]
      };
  } else {
      jsonLd = {
          '@context': 'https://schema.org',
          ...articleJsonLd
      };
  }

  return (
    <div className="container my-5 blog-post-container">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1 className="fw-bold mb-4 text-center">{post.title}</h1>
          <div className="text-muted text-center mb-5">
            <span>Posted on {new Date(post.created_at).toLocaleDateString()}</span>
            {post.read_time_minutes && (
                <span className="mx-2">·</span>
            )}
            {post.read_time_minutes && (
                <span>{post.read_time_minutes} min read</span>
            )}
          </div>
          <Image
            src={post.image || 'https://via.placeholder.com/800x400'}
            alt={post.title}
            width={800}
            height={400}
            priority={true} // Add priority for LCP image
            className="img-fluid rounded mb-5 shadow"
          />
          <div className="markdown-content">
            <Markdown content={post.content} />
          </div>

          {faqs && faqs.length > 0 && (
            <div className="mt-5">
              <h2 className="fw-bold mb-4 text-center">Frequently Asked Questions</h2>
              <div className="accordion" id="faqAccordion">
                {faqs.map((faq: FAQItem, index: number) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`faq-heading-${index}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#faq-collapse-${index}`}
                        aria-expanded="false"
                        aria-controls={`faq-collapse-${index}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`faq-collapse-${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`faq-heading-${index}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;