'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaHome, FaHandshake, FaAward } from 'react-icons/fa';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  { icon: FaUsers, number: '500+', label: 'Happy Clients' },
  { icon: FaHome, number: '1000+', label: 'Properties Sold' },
  { icon: FaHandshake, number: '5+', label: 'Years Experience' },
  { icon: FaAward, number: '10+', label: 'Awards Won' },
];

const team = [
  {
    name: 'Samuel Adebayo',
    role: 'Founder & CEO',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'With over 10 years in Lagos real estate, Samuel founded Sammy-Realty to provide exceptional service to property buyers and sellers.'
  },
  {
    name: 'Funmi Okafor',
    role: 'Head of Sales',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Funmi leads our sales team with expertise in luxury properties and commercial real estate across Lagos.'
  },
  {
    name: 'David Ogundimu',
    role: 'Property Manager',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'David oversees our property management division, ensuring optimal returns for our investment clients.'
  },
];

export default function About() {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const storyRef = useRef(null);
  const teamRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true, margin: '-100px' });
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' });
  const isTeamInView = useInView(teamRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-12 bg-luxury-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
              About Sammy-Realty
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Your trusted partner in Lagos real estate for over 5 years
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-luxury-green rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white text-2xl" />
                </div>
                <h3 className="font-playfair text-3xl md:text-4xl font-bold luxury-green mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-playfair text-4xl md:text-5xl font-bold luxury-green mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Founded in 2019, Sammy-Realty began with a simple mission: to make real estate 
                  transactions in Lagos transparent, efficient, and stress-free for our clients.
                </p>
                <p>
                  What started as a small family business has grown into one of Lagos' most trusted 
                  real estate agencies, specializing in premium properties across Lekki, Ajah, 
                  Victoria Island, and Ikoyi.
                </p>
                <p>
                  Our success is built on three core principles: integrity, expertise, and 
                  exceptional customer service. We believe that buying or selling property should 
                  be an exciting journey, not a stressful ordeal.
                </p>
                <p>
                  Today, we continue to innovate and expand our services, always keeping our 
                  clients' best interests at heart. Whether you're a first-time buyer or a 
                  seasoned investor, we're here to guide you every step of the way.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isStoryInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our office"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-luxury-green text-white">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-3xl font-bold mb-6">Our Mission</h3>
                  <p className="text-lg leading-relaxed">
                    To provide exceptional real estate services that exceed client expectations 
                    while maintaining the highest standards of integrity, professionalism, and 
                    innovation in the Lagos property market.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-luxury-green border-2">
                <CardContent className="p-8">
                  <h3 className="font-playfair text-3xl font-bold luxury-green mb-6">Our Vision</h3>
                  <p className="text-lg leading-relaxed text-gray-700">
                    To be Lagos' leading real estate agency, recognized for our expertise, 
                    innovation, and commitment to helping clients achieve their property dreams 
                    while building lasting relationships based on trust and excellence.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold luxury-green mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced professionals are dedicated to providing you with exceptional service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                    />
                    <h3 className="font-playfair text-2xl font-bold luxury-green mb-2">
                      {member.name}
                    </h3>
                    <p className="text-luxury-green font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}