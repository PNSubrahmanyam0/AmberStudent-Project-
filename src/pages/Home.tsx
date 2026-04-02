import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeaturedCities from '../components/FeaturedCities';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCities />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
