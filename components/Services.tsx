'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaBuilding, FaKey, FaChartLine, FaHandshake, FaArrowRight } from 'react-icons/fa';
import { GiModernCity, GiHouseKeys } from 'react-icons/gi';
import { MdOutlineRealEstateAgent } from 'react-icons/md';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

const services = [
  {
    icon: MdOutlineRealEstateAgent,
    title: 'Luxury Property Sales',
    description: 'Exclusive high-end property transactions with white-glove service and full legal support.',
    link: '/services#sales',
    image: '/luxury-home.jpg'
  },
  {
    icon: GiHouseKeys,
    title: 'Premium Rentals',
    description: 'Curated luxury rentals and short-term accommodations in prime locations.',
    link: '/services#rentals',
    image: '/luxury-rental.jpg'
  },
  {
    icon: FaChartLine,
    title: 'Wealth Management',
    description: 'Sophisticated property management to maximize your investment portfolio.',
    link: '/services#management',
    image: '/property-management.jpg'
  },
  {
    icon: FaHandshake,
    title: 'Strategic Consulting',
    description: 'Bespoke advisory services for high-net-worth real estate decisions.',
    link: '/services#consulting',
    image: '/consulting.jpg'
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Luxury background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
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
            OUR SERVICES
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-luxury-green">Luxury</span> Real Estate Solutions
          </h2>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-luxury-gold mb-6"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discreet, personalized service for discerning clients in Lagos&lsquo; most exclusive markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Link href={service.link}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-200/50 hover:border-luxury-green/20 bg-white/70 backdrop-blur-sm overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center z-20 shadow-lg">
                      <service.icon className="text-white text-xl" />
                    </div>
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader className="px-6 pt-6 pb-0">
                    <CardTitle className="font-playfair text-2xl text-gray-900 group-hover:text-luxury-green transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6 pt-4">
                    <CardDescription className="text-gray-600 mb-6 text-base">
                      {service.description}
                    </CardDescription>
                    <Button 
                      variant="ghost" 
                      className="rounded-full group-hover:bg-luxury-green/10 text-luxury-green hover:text-luxury-green px-4 border border-luxury-green/20 hover:border-luxury-green/40 transition-all"
                    >
                      Discover <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <Button className="bg-luxury-green hover:bg-luxury-green/90 px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all">
              View Our Portfolio
              <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}