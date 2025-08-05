'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTiktok, FaInstagram, FaFacebook, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    alert('Message sent successfully! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-luxury-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-4xl md:text-6xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Ready to find your dream property? Get in touch with our expert team today
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-luxury-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaPhone className="text-white text-2xl" />
                  </div>
                  <CardTitle className="font-playfair text-xl luxury-green mb-4">Call Us</CardTitle>
                  <p className="text-gray-600 mb-4">Speak directly with our team</p>
                  <p className="font-semibold text-lg">+234 814 841 4913</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-luxury-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaEnvelope className="text-white text-2xl" />
                  </div>
                  <CardTitle className="font-playfair text-xl luxury-green mb-4">Email Us</CardTitle>
                  <p className="text-gray-600 mb-4">Send us a message anytime</p>
                  <p className="font-semibold text-lg">info@sammy-realty.com</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-luxury-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaMapMarkerAlt className="text-white text-2xl" />
                  </div>
                  <CardTitle className="font-playfair text-xl luxury-green mb-4">Visit Us</CardTitle>
                  <p className="text-gray-600 mb-4">Come to our office</p>
                  <p className="font-semibold">Ajah, Lekki, Lagos, Nigeria</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="font-playfair text-3xl luxury-green">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <Input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="h-12"
                      />
                      <Input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-32"
                    />
                    
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-luxury-green hover:bg-luxury-green/90 h-12 text-lg"
                    >
                      {isLoading ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-playfair text-3xl font-bold luxury-green mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We're here to help you with all your real estate needs. Whether you're looking 
                  to buy, sell, rent, or invest, our team of experts is ready to assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FaMapMarkerAlt className="text-luxury-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Office Address</h4>
                    <p className="text-gray-600">Ajah, Lekki, Lagos, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FaPhone className="text-luxury-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+234 814 841 4913</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FaEnvelope className="text-luxury-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@sammy-realty.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <FaClock className="text-luxury-green text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Office Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="w-12 h-12 bg-luxury-green rounded-full flex items-center justify-center hover:bg-luxury-green/90 transition-colors"
                  >
                    <FaTiktok className="text-white text-xl" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-luxury-green rounded-full flex items-center justify-center hover:bg-luxury-green/90 transition-colors"
                  >
                    <FaInstagram className="text-white text-xl" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 bg-luxury-green rounded-full flex items-center justify-center hover:bg-luxury-green/90 transition-colors"
                  >
                    <FaFacebook className="text-white text-xl" />
                  </a>
                  <a
                    href="https://wa.me/2348148414913"
                    className="w-12 h-12 bg-luxury-green rounded-full flex items-center justify-center hover:bg-luxury-green/90 transition-colors"
                  >
                    <FaWhatsapp className="text-white text-xl" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-playfair text-4xl font-bold luxury-green mb-4">
              Find Our Office
            </h2>
            <p className="text-xl text-gray-600">
              Located in the heart of Ajah, serving all of Lagos
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.562123456789!2d3.601234567890123!3d6.456789012345678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjcnMjQuNCJOIDPCsDM2JzA0LjQiRQ!5e0!3m2!1sen!2sng!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sammy-Realty Location"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}