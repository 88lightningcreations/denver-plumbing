import { supabase } from './app/lib/supabase.js';

async function getArticles() {
    const { data, error } = await supabase
    .from('blog_posts')
    .select('slug')
    .order('created_at', { ascending: false })
    .limit(1);

    if (error) {
        console.error('Error fetching articles:', error);
        return;
    }
    console.log(data[0].slug);
}

getArticles();
