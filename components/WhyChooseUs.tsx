'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaCheckCircle, FaHome, FaChevronRight } from 'react-icons/fa';
import { IoIosStats } from 'react-icons/io';
import { RiCustomerService2Fill } from 'react-icons/ri';
import { MdVerified, MdSecurity } from 'react-icons/md';

const benefits = [
  {
    icon: <IoIosStats className="text-2xl" />,
    title: "Premium Property Portfolio",
    description: "Exclusive access to Lagos' most luxurious properties in prime locations"
  },
  {
    icon: <MdVerified className="text-2xl" />,
    title: "Verified & Secure Transactions",
    description: "100% legally verified properties with secure transaction processes"
  },
  {
    icon: <RiCustomerService2Fill className="text-2xl" />,
    title: "End-to-End Service",
    description: "From search to closing, we handle every detail of your real estate journey"
  },
  {
    icon: <MdSecurity className="text-2xl" />,
    title: "Trusted by Elite Clients",
    description: "Preferred realtor for high-net-worth individuals and corporate clients"
  }
];

const stats = [
  { value: "500+", label: "Satisfied Clients" },
  { value: "₦50B+", label: "Property Value" },
  { value: "98%", label: "Retention Rate" },
  { value: "24/7", label: "Concierge" }
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref} 
      className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="why-choose-us-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 bg-luxury-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-luxury-gold/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-wider text-luxury-gold font-medium mb-4 inline-block">
            Excellence in Real Estate
          </span>
          <h2 
            id="why-choose-us-heading"
            className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Why <span className="text-luxury-gold">Sammy-Realty</span> Stands Apart
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover the unparalleled service that has made us the <span className="font-semibold text-luxury-gold">trusted choice</span> for luxury real estate in Lagos for over a decade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Luxury villa in Lagos with modern architecture and pool"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
                width={600}
                height={800}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl border border-gray-100 w-72"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-luxury-gold p-3 rounded-full flex-shrink-0">
                  <FaHome className="text-white text-2xl" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 mb-1">10+ Years</p>
                  <p className="text-gray-600 text-sm">Of market leadership in Lagos luxury real estate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div>
            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14"
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="group bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-luxury-gold/30"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-luxury-gold/10 p-3 rounded-full text-luxury-gold flex-shrink-0 group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-luxury-gold transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Panel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-gray-100 shadow-lg mb-10"
            >
              <h4 className="text-lg font-medium text-gray-900 mb-6 text-center">
                Our Impact in Numbers
              </h4>
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="text-center p-2"
                  >
                    <p className="text-3xl font-bold text-luxury-gold mb-2">{stat.value}</p>
                    <p className="text-gray-600 text-xs uppercase tracking-wider">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8"
            >
              <button 
                className="group relative bg-luxury-gold hover:bg-luxury-gold-dark text-white font-medium py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
                aria-label="Schedule a luxury property consultation"
              >
                <span className="relative z-10 flex items-center">
                  Schedule a Consultation
                  <FaChevronRight className="ml-2 text-sm opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-luxury-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}