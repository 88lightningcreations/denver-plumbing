'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
};

const ArticleCarouselClient: React.FC<{ articles: Article[] }> = ({ articles }) => {
  if (!articles || articles.length === 0) {
    return <p>No articles found.</p>;
  }

  // Chunk articles into groups of 3 for the carousel
  const chunkedArticles = [];
  for (let i = 0; i < articles.length; i += 3) {
    chunkedArticles.push(articles.slice(i, i + 3));
  }

  return (
    <div id="articleCarousel" className="carousel slide" data-bs-ride="carousel">
      <h2 className="text-center mb-5">From Our Blog</h2>
      <div className="carousel-inner">
        {chunkedArticles.map((articleGroup, groupIndex) => (
          <div key={groupIndex} className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`}>
            <div className="row">
              {articleGroup.map((article) => (
                <div key={article.id} className="col-md-4 mb-3">
                  <div className="card h-100">
                    <Image
                      src={article.image || 'https://via.placeholder.com/500x300'}
                      alt={article.title}
                      width={500}
                      height={300}
                      className="card-img-top"
                      style={{ width: '100%', height: 'auto' }} // Add this style
                    />
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text">{article.excerpt}</p>
                      <Link href={`/${article.slug}`} className="custom-btn">
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#articleCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#articleCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ArticleCarouselClient;
