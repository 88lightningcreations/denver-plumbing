import { MetadataRoute } from 'next';
import { supabase } from './lib/supabase';

export const revalidate = 60;

const BASE_URL = 'https://peachtreeplumbing5280.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const { data: posts } = await supabase
    .from('blog_posts')
    .select('slug, updated_at')
    .eq('is_published', true);

  const { data: categories } = await supabase
    .from('blog_categories')
    .select('slug, updated_at');

  const postEntries: MetadataRoute.Sitemap = posts?.map(({ slug, updated_at }) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: updated_at,
    changeFrequency: 'weekly',
    priority: 0.8,
    alternates: {
      languages: {
        en: `${BASE_URL}/${slug}`,
      },
    },
  })) ?? [];

  const categoryEntries: MetadataRoute.Sitemap = categories?.map(({ slug, updated_at }) => ({
    url: `${BASE_URL}/category/${slug}`,
    lastModified: updated_at,
    changeFrequency: 'monthly',
    priority: 0.7,
    alternates: {
      languages: {
        en: `${BASE_URL}/category/${slug}`,
      },
    },
  })) ?? [];

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          en: BASE_URL,
        },
      },
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      alternates: {
        languages: {
          en: `${BASE_URL}/about`,
        },
      },
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
      alternates: {
        languages: {
          en: `${BASE_URL}/contact`,
        },
      },
    },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/cookie-consent`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
      alternates: {
        languages: {
          en: `${BASE_URL}/cookie-consent`,
        },
      },
    },
    {
      url: `${BASE_URL}/copyright-notice`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
      alternates: {
        languages: {
          en: `${BASE_URL}/copyright-notice`,
        },
      },
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
      alternates: {
        languages: {
          en: `${BASE_URL}/disclaimer`,
        },
      },
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
      alternates: {
        languages: {
          en: `${BASE_URL}/privacy-policy`,
        },
      },
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
      alternates: {
        languages: {
          en: `${BASE_URL}/terms-of-service`,
        },
      },
    },
    {
      url: `${BASE_URL}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
      alternates: {
        languages: {
          en: `${BASE_URL}/terms-of-use`,
        },
      },
    },
  ];

  return [...staticPages, ...postEntries, ...categoryEntries, ...legalPages];
}