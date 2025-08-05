'use client';

import Link from 'next/link';
import {
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-luxury-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="font-playfair text-2xl font-bold">
                Sammy-Realty
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted partner in Lagos real estate. We specialize in sales, rentals, 
              management & consulting across Lagos.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-green transition-colors"
              >
                <FaTiktok />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-green transition-colors"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-green transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href="https://wa.me/2348148414913"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-luxury-green transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-gray-400 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#sales" className="text-gray-400 hover:text-white transition-colors">
                  Property Sales
                </Link>
              </li>
              <li>
                <Link href="/services#rentals" className="text-gray-400 hover:text-white transition-colors">
                  Rentals & Shortlet
                </Link>
              </li>
              <li>
                <Link href="/services#management" className="text-gray-400 hover:text-white transition-colors">
                  Property Management
                </Link>
              </li>
              <li>
                <Link href="/services#consulting" className="text-gray-400 hover:text-white transition-colors">
                  Real Estate Consulting
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-luxury-green mt-1 flex-shrink-0" />
                <p className="text-gray-400">Ajah, Lekki, Lagos, Nigeria</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-luxury-green flex-shrink-0" />
                <p className="text-gray-400">+234 814 841 4913</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-luxury-green flex-shrink-0" />
                <p className="text-gray-400">info@sammy-realty.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sammy-Realty. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Animated Signature */}
          <div className="mt-4 text-right animate-pulse">
            <p className="text-sm text-luxury-green font-semibold italic">
              Crafted with 💚 by HydraSoftCodes
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
