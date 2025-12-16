'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
};

const ArticleCarouselClient: React.FC<{ articles: Article[] }> = ({ articles }) => {
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scroller = scrollerRef.current;

        if (scroller) {
            scroller.setAttribute("data-animated", "true");
        }
    }, []);

  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>;
  }

  // Duplicate the articles to create a seamless loop
  const extendedArticles = [...articles, ...articles];

  return (
    <div className="container my-5">
        <h2 className="text-center mb-5">From Our Blog</h2>
        <div ref={scrollerRef} className="scroller">
            <div className="scroller__inner">
                {extendedArticles.map((article, index) => (
                    <div key={`${article.id}-${index}`} className="card_container">
                        <Link href={`/${article.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                    <p className="card-text">{article.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default ArticleCarouselClient;