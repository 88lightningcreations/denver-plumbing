import Hero from '@/app/components/Hero';
import Testimonials from '@/app/components/Testimonials';
import Services from '@/app/components/Services';
import CallToAction from '@/app/components/CallToAction';
import ArticleCarousel from '@/app/components/ArticleCarousel';
import FAQ from '@/app/components/FAQ';
import MissionStatement from '@/app/components/MissionStatement';

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Services />
      <FAQ />
      <section id="blog" className="py-5">
        <ArticleCarousel />
      </section>
      <MissionStatement />
      <section id="contact" className="py-5">
        <CallToAction />
      </section>
    </>
  );
}
