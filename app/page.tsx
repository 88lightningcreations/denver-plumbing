import Header from './components/Header';
import Services from './components/Services';

export default function Home() {
  return (
    <div>
      <section id="header">
        <Header />
      </section>
      <section id="services">
        <Services />
      </section>
    </div>
  );
}
