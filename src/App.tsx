import { useEffect, useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Programs from './sections/Programs';
import WhyChooseUs from './sections/WhyChooseUs';
import Trainers from './sections/Trainers';
import Testimonials from './sections/Testimonials';
import Pricing from './sections/Pricing';
import Gallery from './sections/Gallery';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div ref={mainRef} className="min-h-screen bg-dark text-white overflow-x-hidden">
      <Navbar />
      
      <main className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <section id="home">
          <Hero />
        </section>
        
        <section id="programs">
          <Programs />
        </section>
        
        <section id="why-us">
          <WhyChooseUs />
        </section>
        
        <section id="trainers">
          <Trainers />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>
        
        <section id="gallery">
          <Gallery />
        </section>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
