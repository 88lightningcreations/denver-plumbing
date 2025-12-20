import React from 'react';
import Image from 'next/image';
import { supabase } from '../lib/supabase';
import { notFound } from 'next/navigation';
import Markdown from '../components/Markdown';

export const revalidate = 60;

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

  let faqs: FAQItem[] = [];
  // Check if the structured data and the mainEntity array exist
  if (post.faq_json && post.faq_json.mainEntity && Array.isArray(post.faq_json.mainEntity)) {
    // Map the incoming data structure to the one the component expects
    faqs = post.faq_json.mainEntity.map((item: SupabaseFaqItem) => ({
      question: item.name,
      answer: item.acceptedAnswer.text,
    }));
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <h1 className="fw-bold mb-4 text-center">{post.title}</h1>
          <p className="text-muted text-center mb-5">
            Posted on {new Date(post.created_at).toLocaleDateString()}
          </p>
          <Image
            src={post.image || 'https://via.placeholder.com/800x400'}
            alt={post.title}
            width={800}
            height={400}
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
