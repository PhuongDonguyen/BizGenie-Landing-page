import { Hero, Features, About as AboutSection, News as NewsSection, Contact as ContactSection } from '../components';

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <AboutSection />
      <NewsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
