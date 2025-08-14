'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  const heroImage = 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg';

  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Single Full Page Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Main Content - Animated from right with longer travel */}
        <motion.div 
          className="w-full max-w-2xl ml-auto"
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 1.2,
            ease: [0.16, 0.77, 0.47, 0.97],
            type: "spring",
            stiffness: 50,
            damping: 10
          }}
        >
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-luxury-gold">Luxury</span> Living in <br />
            <span className="text-white">Lagos&lsquo;</span> <span className="text-luxury-gold">Finest</span>
          </h1>

          <p className="text-xl mb-10 font-light">
            Exclusive properties in Lagos&rsquo; most prestigious neighborhoods. Where elegance meets comfort.
          </p>

          {/* CTAs with oval edges and enhanced hover */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/properties" passHref legacyBehavior={false}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-6 text-lg font-semibold flex items-center gap-2 rounded-full hover:rounded-[30px] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Explore Properties <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
            
            <Link href="/contact" passHref legacyBehavior={false}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" className="group bg-transparent hover:bg-white/10 border-white text-white px-8 py-6 text-lg font-semibold flex items-center gap-2 rounded-full hover:rounded-[30px] transition-all duration-300 shadow-lg hover:shadow-xl">
                  Contact Us <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        {/* Enhanced Floating WhatsApp CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="fixed bottom-6 right-6 z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <a 
            href="https://wa.me/2348148414913" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-luxury-gold text-white p-4 rounded-full shadow-xl hover:animate-pulse hover:rounded-[20px] transition-all duration-300"
          >
            <FaWhatsapp className="text-2xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}