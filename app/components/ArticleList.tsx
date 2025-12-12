'use client';

import Link from 'next/link';
import Image from 'next/image';

type Article = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image_url: string;
};

type ArticleListProps = {
  articles: Article[];
};

export default function ArticleList({ articles }: ArticleListProps) {
  return (
    <div className="row">
      {articles.map((article) => (
        <div className="col-md-4" key={article.id}>
          <div className="card mb-4">
            <Image 
              src={article.image_url} 
              alt={article.title} 
              className="card-img-top"
              width={400}
              height={225}
              style={{ objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{article.title}</h5>
              <p className="card-text">{article.excerpt}</p>
              <Link href={`/blogs/${article.slug}`} className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
