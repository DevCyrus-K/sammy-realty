'use client';

import { motion } from 'framer-motion';
import { FaCheckCircle, FaHome, FaShieldAlt, FaSearchDollar } from 'react-icons/fa';

export default function ProblemSolution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            <span className="text-luxury-gold">Lagos Real Estate</span> Made Simple
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the challenges you face. Here&lsquo;s how we make finding luxury property effortless.
          </p>
        </motion.div>

        {/* Problems & Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Problem 1 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-2xl mt-1">
                <FaHome />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Finding Truly Premium Properties</h3>
                <p className="text-gray-600 mb-4">
                  Lagos&lsquo; luxury market is crowded with listings, but many don&lsquo;t meet international standards or are misrepresented online.
                </p>
                <div className="flex items-center gap-2 text-luxury-gold font-medium">
                  <FaCheckCircle />
                  <span>Our Solution</span>
                </div>
                <p className="text-gray-700 mt-2">
                  We personally vet every property, ensuring only genuine luxury homes with premium finishes, amenities, and locations make it to our portfolio.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Problem 2 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-2xl mt-1">
                <FaShieldAlt />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Security & Legal Concerns</h3>
                <p className="text-gray-600 mb-4">
                  Worried about property disputes, unclear titles, or safety in your new neighborhood?
                </p>
                <div className="flex items-center gap-2 text-luxury-gold font-medium">
                  <FaCheckCircle />
                  <span>Our Solution</span>
                </div>
                <p className="text-gray-700 mt-2">
                  Full legal verification included with every property. We only work in secured, gated communities with 24/7 surveillance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Problem 3 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-2xl mt-1">
                <FaSearchDollar />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Overpaying for Value</h3>
                <p className="text-gray-600 mb-4">
                  The luxury market lacks transparency - how do you know you&lsquo;re getting fair value for your investment?
                </p>
                <div className="flex items-center gap-2 text-luxury-gold font-medium">
                  <FaCheckCircle />
                  <span>Our Solution</span>
                </div>
                <p className="text-gray-700 mt-2">
                  Our market analysis ensures you pay the right price. We negotiate on your behalf and show comparable properties so you can decide confidently.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Problem 4 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl shadow-sm"
          >
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-2xl mt-1">
                <FaHome />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">Time-Consuming Search Process</h3>
                <p className="text-gray-600 mb-4">
                  Visiting countless properties only to find they don&lsquo;t match the description wastes your valuable time.
                </p>
                <div className="flex items-center gap-2 text-luxury-gold font-medium">
                  <FaCheckCircle />
                  <span>Our Solution</span>
                </div>
                <p className="text-gray-700 mt-2">
                  Our curated selection means every property you see matches your criteria. Virtual tours available before physical visits.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-600 mb-6">
            Ready to experience stress-free luxury home hunting?
          </p>
          <a
            href="/contact"
            className="inline-block bg-luxury-gold hover:bg-luxury-gold/90 text-white px-8 py-4 text-lg font-semibold rounded-full hover:rounded-[30px] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Speak With Our Concierge
          </a>
        </motion.div>
      </div>
    </section>
  );
}