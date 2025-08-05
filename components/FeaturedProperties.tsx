'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { FaBed, FaBath, FaRulerCombined, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

interface Property {
  id: number;
  title: string;
  type: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: string;
  location: string;
}

const properties: Property[] = [
  {
    id: 1,
    title: 'Oceanfront Penthouse in Banana Island',
    type: 'For Sale',
    price: '₦650,000,000',
    image: '/banana-island-penthouse.jpg',
    beds: 5,
    baths: 6,
    sqft: '8,500',
    location: 'Banana Island'
  },
  {
    id: 2,
    title: 'Luxury Villa with Private Beach',
    type: 'Shortlet',
    price: '₦450,000/night',
    image: '/private-beach-villa.jpg',
    beds: 6,
    baths: 7,
    sqft: '10,000',
    location: 'Elegushi'
  },
  {
    id: 3,
    title: 'Executive Penthouse in Ikoyi',
    type: 'For Rent',
    price: '₦15,000,000/year',
    image: '/ikoyi-penthouse.jpg',
    beds: 4,
    baths: 5,
    sqft: '5,200',
    location: 'Ikoyi'
  },
  {
    id: 4,
    title: 'Modern Mansion in Victoria Island',
    type: 'For Sale',
    price: '₦850,000,000',
    image: '/vi-mansion.jpg',
    beds: 7,
    baths: 8,
    sqft: '12,000',
    location: 'Victoria Island'
  },
  {
    id: 5,
    title: 'Luxury Apartment in Eko Atlantic',
    type: 'For Rent',
    price: '₦25,000,000/year',
    image: '/eko-atlantic-apartment.jpg',
    beds: 3,
    baths: 4,
    sqft: '4,500',
    location: 'Eko Atlantic'
  },
  {
    id: 6,
    title: 'Waterfront Estate in Lekki',
    type: 'For Sale',
    price: '₦1,200,000,000',
    image: '/lekki-waterfront.jpg',
    beds: 8,
    baths: 10,
    sqft: '15,000',
    location: 'Lekki'
  },
];

export default function FeaturedProperties() {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setMaxScroll(containerRef.current.scrollWidth - containerRef.current.clientWidth);
    }
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
      setScrollPosition(Math.max(0, containerRef.current.scrollLeft - 400));
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
      setScrollPosition(Math.min(maxScroll, containerRef.current.scrollLeft + 400));
    }
  };

  const handleScroll = () => {
    if (containerRef.current) {
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  return (
    <section 
      ref={ref} 
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="featured-properties-heading"
    >
      {/* Luxury background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-luxury-gold rounded-full filter blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-luxury-green rounded-full filter blur-xl"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-luxury-gold rounded-full filter blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-luxury-gold font-medium mb-3 text-lg tracking-widest">
            EXCLUSIVE LISTINGS
          </span>
          <h2 id="featured-properties-heading" className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-luxury-green">Featured</span> Properties
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-luxury-gold mb-6"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our curated selection of premium properties in Lagos&rsquo; most exclusive neighborhoods
          </p>
        </motion.div>

        <div className="relative">
          <button 
            onClick={scrollLeft}
            disabled={scrollPosition <= 0}
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-luxury-green hover:bg-luxury-green hover:text-white transition-all duration-300 ${
              scrollPosition <= 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Scroll properties left"
          >
            <FaChevronLeft className="text-xl" />
          </button>
          
          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto scrollbar-hide space-x-8 pb-8 -mx-4 px-4 snap-x snap-mandatory"
            style={{ scrollBehavior: 'smooth' }}
            tabIndex={0}
            aria-label="Featured properties carousel"
          >
            {properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex-shrink-0 w-96 snap-start"
              >
                <Link href={`/properties/${property.id}`} passHref legacyBehavior>
                  <a className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-luxury-green focus-visible:ring-offset-4 rounded-lg">
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-200/50 hover:border-luxury-green/20 bg-white/70 backdrop-blur-sm overflow-hidden">
                      <div className="relative h-64 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                        <div className="absolute top-4 left-4 z-20">
                          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                            property.type === 'For Sale' ? 'bg-luxury-green text-white' :
                            property.type === 'For Rent' ? 'bg-blue-600 text-white' : 
                            'bg-luxury-gold text-white'
                          }`}>
                            {property.type}
                          </span>
                        </div>
                        <Image 
                          src={property.image} 
                          alt={property.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          priority={index < 3} // Only prioritize first 3 images
                        />
                      </div>
                      <CardHeader className="px-6 pt-6 pb-0">
                        <CardTitle className="font-playfair text-2xl text-gray-900 group-hover:text-luxury-green transition-colors duration-300">
                          {property.title}
                        </CardTitle>
                        <p className="text-luxury-gold mt-2">{property.location}</p>
                      </CardHeader>
                      <CardContent className="px-6 pb-6 pt-4">
                        <div className="flex items-center space-x-4 mb-4 text-gray-600">
                          <div className="flex items-center">
                            <FaBed className="mr-2 text-luxury-green" aria-hidden="true" />
                            <span>{property.beds} Beds</span>
                          </div>
                          <div className="flex items-center">
                            <FaBath className="mr-2 text-luxury-green" aria-hidden="true" />
                            <span>{property.baths} Baths</span>
                          </div>
                          <div className="flex items-center">
                            <FaRulerCombined className="mr-2 text-luxury-green" aria-hidden="true" />
                            <span>{property.sqft} sqft</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-6">
                          <span className="font-bold text-2xl text-luxury-green">
                            {property.price}
                          </span>
                          <Button 
                            variant="ghost" 
                            className="rounded-full group-hover:bg-luxury-green/10 text-luxury-green hover:text-luxury-green px-4 border border-luxury-green/20 hover:border-luxury-green/40 transition-all"
                            asChild
                          >
                            <div>
                              View <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                            </div>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              </motion.div>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            disabled={scrollPosition >= maxScroll}
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-luxury-green hover:bg-luxury-green hover:text-white transition-all duration-300 ${
              scrollPosition >= maxScroll ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            aria-label="Scroll properties right"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/properties" passHref legacyBehavior>
            <Button 
              asChild
              className="bg-luxury-green hover:bg-luxury-green/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              <a>
                Browse All Properties
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}