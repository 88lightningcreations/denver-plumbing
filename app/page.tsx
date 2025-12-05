import Image from 'next/image';
import Services from './components/Services';
import FAQ from './components/FAQ';
import ArticleCarousel from './components/ArticleCarousel';
import CallToAction from './components/CallToAction';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Your Trusted Local Plumber</h1>
          <p className={styles.heroSubtitle}>Fast, friendly, and reliable service for all your plumbing needs.</p>
          <a href="tel:720-298-1900" className={styles.heroButton}>Call Now</a>
        </div>
        <div className={styles.heroImageContainer}>
          <Image 
            src="/residential_and_commercial_plumber_denver_colorado.jpg" 
            alt="Peach Tree Plumbing mascot"
            width={500}
            height={750}
            className={styles.heroImage}
          />
        </div>
      </section>
      <section>
        <Services />
      </section>
      <section className={styles.faqSection}>
        <h2 className="text-center mb-4">Frequently Asked Questions</h2>
        <FAQ />
      </section>
      <section>
        <h2 className="text-center mb-4">From Our Blog</h2>
        <p className="text-center mb-4">Check out our latest articles for plumbing tips and tricks.</p>
        <ArticleCarousel />
      </section>
      <section>
        <CallToAction />
      </section>
    </div>
  );
}
