import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyChooseUs from '@/components/WhyChooseUs';
import LocationMap from '@/components/LocationMap';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import HowItWorks from '@/components/HowItWorks';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <FeaturedProperties />
      <WhyChooseUs />
      <HowItWorks />
      <LocationMap />
      <ContactForm />
      <Footer />
    </main>
  );
}