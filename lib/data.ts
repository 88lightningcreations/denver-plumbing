
import { supabase } from './supabaseClient';

export const getBlogPosts = async () => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('is_published', true);

  if (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }

  return data;
};

export const getBlogPostBySlug = async (slug: string) => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error) {
    console.error(`Error fetching blog post with slug ${slug}:`, error);
    return null;
  }

  return data;
};

export const getFaqs = async () => {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('faq_json')
    .neq('faq_json', null);

  if (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }

  // The faq_json column likely contains an array of objects, 
  // so we can just return the data directly.
  return data.flatMap(item => item.faq_json);
};
