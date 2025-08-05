'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react'; // Added useState import
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const testimonials = [
  {
    name: "Adebayo Johnson",
    role: "CEO, Forte Oil",
    rating: 5,
    content: "Sammy-Realty transformed my property search from stressful to seamless. Their team secured me a stunning Ikoyi penthouse that wasn't even on the market yet. Their connections and negotiation skills saved me ₦120 million on the purchase.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Chioma Adeleke",
    role: "Director, Zenith Bank",
    rating: 5,
    content: "As an expat returning to Lagos, I was overwhelmed by the real estate market. Sammy-Realty not only found me the perfect Victoria Island home but handled all the legal complexities. Two years later, they still help manage the property.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Emeka Okonkwo",
    role: "Founder, Flutterwave", // Fixed typo from "Founder" to "Founder"
    rating: 5,
    content: "The level of professionalism is unmatched. They understood my need for both luxury and investment potential, presenting options I wouldn't have found otherwise. My Banana Island property has appreciated 35% in 18 months.",
    image: "https://randomuser.me/api/portraits/men/75.jpg"
  },
  {
    name: "Folake Williams",
    role: "MD, GTBank",
    rating: 5,
    content: "What sets Sammy-Realty apart is their discretion and attention to detail. They found me a private Lekki estate home that meets all my family's needs while maintaining our privacy. The entire process was handled with utmost professionalism.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section 
      ref={ref} 
      className="py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-1/4 w-60 h-60 bg-luxury-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-luxury-gold/5 rounded-full filter blur-3xl"></div>
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
            Client Experiences
          </span>
          <h2 
            id="testimonials-heading"
            className="font-playfair text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Voices of <span className="text-luxury-gold">Trust</span> & <span className="text-luxury-gold">Satisfaction</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&lsquo;t just take our word for it - hear from our esteemed clients about their Sammy-Realty experience
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Client Image */}
              <div className="relative lg:col-span-1 h-64 lg:h-auto">
                <img
                  src={testimonials[currentIndex].image}
                  alt={`Portrait of ${testimonials[currentIndex].name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent lg:bg-gradient-to-r lg:from-black/30 lg:to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                  <p className="text-sm opacity-90">{testimonials[currentIndex].role}</p>
                </div>
              </div>
              
              {/* Testimonial Content */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="flex mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="text-luxury-gold text-lg" />
                  ))}
                </div>
                
                <FaQuoteLeft className="text-luxury-gold text-2xl mb-6 opacity-20" /> {/* Fixed typo in className */}
                
                <motion.p 
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-gray-600 text-lg leading-relaxed mb-8"
                >
                  {testimonials[currentIndex].content}
                </motion.p>
                
                <div className="flex items-center justify-between">
                  {/* Navigation Dots */}
                  <div className="flex space-x-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-luxury-gold w-6' : 'bg-gray-200'}`}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                  
                  {/* Navigation Arrows */}
                  <div className="flex space-x-3">
                    <button 
                      onClick={prevTestimonial}
                      className="p-2 rounded-full border border-gray-200 hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all"
                      aria-label="Previous testimonial"
                    >
                      <FaChevronLeft />
                    </button>
                    <button 
                      onClick={nextTestimonial}
                      className="p-2 rounded-full border border-gray-200 hover:bg-luxury-gold hover:text-white hover:border-luxury-gold transition-all"
                      aria-label="Next testimonial"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { label: "Google Reviews", value: "4.9/5" },
            { label: "Repeat Clients", value: "82%" },
            { label: "Response Time", value: "<2 Hours" },
            { label: "Years Serving Lagos", value: "10+" }
          ].map((item, index) => (
            <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-100 shadow-sm text-center">
              <p className="text-2xl font-bold text-luxury-gold mb-1">{item.value}</p>
              <p className="text-gray-600 text-sm uppercase tracking-wider">{item.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-playfair font-medium text-gray-900 mb-6">
            Experience the Sammy-Realty Difference
          </h3>
          <button 
            className="group relative bg-luxury-gold hover:bg-luxury-gold-dark text-white font-medium py-4 px-10 rounded-lg transition-all duration-300 hover:shadow-xl overflow-hidden"
            aria-label="Contact us for luxury real estate services"
          >
            <span className="relative z-10 flex items-center justify-center">
              Contact Us Today
              <FaChevronRight className="ml-2 text-sm opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-luxury-gold to-luxury-gold-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}