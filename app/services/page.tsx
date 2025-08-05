'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHome, FaBed, FaCog, FaBrain, FaCheckCircle } from 'react-icons/fa';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'sales',
    icon: FaHome,
    title: 'Property Sales',
    description: 'Expert assistance in buying and selling properties across Lagos with full legal support.',
    features: [
      'Market analysis and property valuation',
      'Legal documentation and verification',
      'Negotiation and closing assistance',
      'Post-sale support and guidance'
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'rentals',
    icon: FaBed,
    title: 'Rentals & Shortlet',
    description: 'Premium rental properties and short-term accommodations for all budgets.',
    features: [
      'Verified rental properties',
      'Flexible lease terms',
      'Furnished and unfurnished options',
      '24/7 customer support'
    ],
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'management',
    icon: FaCog,
    title: 'Property Management',
    description: 'Complete property management services to maximize your investment returns.',
    features: [
      'Tenant screening and management',
      'Maintenance and repairs coordination',
      'Rent collection and financial reporting',
      'Property marketing and leasing'
    ],
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'consulting',
    icon: FaBrain,
    title: 'Real Estate Consulting',
    description: 'Strategic advice and market insights to make informed real estate decisions.',
    features: [
      'Investment strategy development',
      'Market research and analysis',
      'Portfolio optimization',
      'Risk assessment and mitigation'
    ],
    image: 'https://images.pexels.com/photos/3184431/pexels-photo-3184431.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      id={service.id}
      className="mb-16"
    >
      <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className={`relative h-64 lg:h-auto ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-luxury-green/20" />
          </div>
          
          <div className={`p-8 lg:p-12 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
            <CardHeader className="p-0 mb-6">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-luxury-green rounded-full flex items-center justify-center mr-4">
                  <service.icon className="text-white text-2xl" />
                </div>
                <CardTitle className="font-playfair text-3xl luxury-green">
                  {service.title}
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-gray-600">
                {service.description}
              </CardDescription>
            </CardHeader>
            
            <CardContent className="p-0">
              <div className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <FaCheckCircle className="text-luxury-green text-lg mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="bg-luxury-green hover:bg-luxury-green/90 text-white px-8">
                Get Started
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section ref={headerRef} className="pt-24 pb-12 bg-luxury-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Comprehensive real estate solutions tailored to your needs in Lagos
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl font-bold luxury-green mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your real estate needs and let our experts guide you 
              through the process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-luxury-green hover:bg-luxury-green/90 px-8 py-4">
                Book a Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-luxury-green text-luxury-green hover:bg-luxury-green hover:text-white px-8 py-4">
                Call Us Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}