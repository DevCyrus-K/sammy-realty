'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHandshake, FaSearch, FaFileContract, FaKey, FaChevronRight } from 'react-icons/fa';
import { IoMdTime } from 'react-icons/io';

const processSteps = [
  {
    icon: <FaSearch className="text-2xl" />,
    title: "Discovery Consultation",
    description: "We begin with an in-depth conversation to understand your lifestyle, preferences, and investment goals",
    duration: "1-2 Days"
  },
  {
    icon: <FaHandshake className="text-2xl" />,
    title: "Property Curation",
    description: "Our team hand-selects properties matching your criteria from our exclusive portfolio",
    duration: "3-5 Days"
  },
  {
    icon: <FaFileContract className="text-2xl" />,
    title: "Due Diligence & Negotiation",
    description: "We conduct thorough legal checks and negotiate the best terms on your behalf",
    duration: "5-7 Days"
  },
  {
    icon: <FaKey className="text-2xl" />,
    title: "Closing & Handover",
    description: "We manage all paperwork and ensure a seamless transition to your new property",
    duration: "2-3 Days"
  }
];

export default function OurProcess() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section 
      ref={ref} 
      className="py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
      aria-labelledby="our-process-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-luxury-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-luxury-gold/5 rounded-full filter blur-3xl"></div>
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
            Our Seamless Process
          </span>
          <h2 
            id="our-process-heading"
            className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            The <span className="text-luxury-gold">Sammy-Realty</span> Experience
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A refined, stress-free journey to acquiring your dream property in Lagos
          </p>
        </motion.div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-16 lg:space-y-24">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 * index }}
                className={`relative flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 w-6 h-6 bg-luxury-gold rounded-full border-4 border-white transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg"></div>
                
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="group bg-white p-8 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-luxury-gold/30">
                    <div className="flex items-start space-x-5 mb-5">
                      <div className="bg-luxury-gold/10 p-4 rounded-full text-luxury-gold flex-shrink-0 group-hover:bg-luxury-gold group-hover:text-white transition-colors duration-300">
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center space-x-3">
                          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-luxury-gold transition-colors duration-300">
                            {step.title}
                          </h3>
                          <span className="flex items-center text-sm text-gray-500">
                            <IoMdTime className="mr-1" /> {step.duration}
                          </span>
                        </div>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Step Number */}
                <div className={`hidden lg:flex absolute ${index % 2 === 0 ? 'left-[calc(50%-60px)]' : 'right-[calc(50%-60px)]'} top-1/2 transform -translate-y-1/2 z-10`}>
                  <span className="text-5xl font-playfair font-bold text-gray-100">{index + 1}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-playfair font-medium text-gray-900 mb-6">
            Ready to Begin Your Luxury Property Journey?
          </h3>
          <button 
            className="group relative bg-luxury-gold hover:bg-luxury-gold-dark text-white font-medium py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
            aria-label="Begin your luxury property search"
          >
            <span className="relative z-10 flex items-center justify-center">
              Start Your Search Today
              <FaChevronRight className="ml-2 text-sm opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-luxury-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}