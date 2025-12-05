'use client';

import Link from 'next/link';
import { getBlogPosts } from '../../lib/data';
import { useEffect, useState } from 'react';
import styles from './ArticleCarousel.module.css';

const ArticleCarousel = () => {
    const [articles, setArticles] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            const fetchedArticles = await getBlogPosts();
            setArticles(fetchedArticles);
        };

        fetchArticles();
    }, []);

    const nextSlide = () => {
        setActiveIndex((current) => (current === articles.length - 1 ? 0 : current + 1));
    };

    const prevSlide = () => {
        setActiveIndex((current) => (current === 0 ? articles.length - 1 : current - 1));
    };

    if (articles.length === 0) {
        return <div>Loading articles...</div>;
    }

    return (
        <div className={styles.carouselContainer}>
            {articles.map((article, index) => (
                <div key={article.id} className={`${styles.carouselSlide} ${index === activeIndex ? styles.active : ''}`}>
                    <div className={styles.carouselCaption}>
                        <h3 className={styles.carouselTitle}>{article.title}</h3>
                        <p className={styles.carouselExcerpt}>{article.excerpt}</p>
                        <Link href={`/blogs/${article.slug}`} className={styles.carouselButton}>Read More</Link>
                    </div>
                </div>
            ))}
            <div className={styles.carouselNav}>
                <button onClick={prevSlide} className={styles.navButton}>&#10094;</button>
                <button onClick={nextSlide} className={styles.navButton}>&#10095;</button>
            </div>
        </div>
    );
};

export default ArticleCarousel;
