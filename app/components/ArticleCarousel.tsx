import { supabase } from '../lib/supabase';
import ArticleCarouselClient from './ArticleCarousel.client';

async function getArticles() {
  const { data, error } = await supabase
    .from('blog_posts')
    .select('id,slug,title,excerpt')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
  return data;
}

const ArticleCarousel = async () => {
  const articles = await getArticles();

  return <ArticleCarouselClient articles={articles} />;
};

export default ArticleCarousel;
