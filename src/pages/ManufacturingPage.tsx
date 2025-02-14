import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Package, Shield, TrendingUp, Award, Users } from 'lucide-react';

const ManufacturingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-16"
    >
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1530939027401-cca9096d1586?auto=format&fit=crop&q=80"
          alt="Manufacturing"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Manufacturing Excellence
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl max-w-2xl mx-auto"
            >
              State-of-the-art facilities ensuring premium quality
            </motion.p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Facilities</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Our state-of-the-art manufacturing facilities span over 50,000 square feet, 
                  equipped with the latest technology in food processing and packaging. We maintain 
                  stringent quality control measures throughout our production process.
                </p>
                <p>
                  With a daily production capacity of 100 metric tons, we serve customers across 
                  India and international markets, ensuring consistent quality and timely delivery.
                </p>
              </div>
            </div>
            <motion.img
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?auto=format&fit=crop&q=80"
              alt="Facility"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From raw material selection to final packaging, every step is carefully monitored 
              and controlled to ensure the highest quality standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Package className="h-8 w-8 text-[#CC0000]" />,
                title: "Raw Material Selection",
                description: "Careful sourcing and quality checks"
              },
              {
                icon: <Settings className="h-8 w-8 text-[#CC0000]" />,
                title: "Processing",
                description: "Advanced processing technology"
              },
              {
                icon: <Shield className="h-8 w-8 text-[#CC0000]" />,
                title: "Quality Control",
                description: "Multiple quality checkpoints"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-[#CC0000]" />,
                title: "Packaging",
                description: "Modern packaging solutions"
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 bg-red-50 rounded-full">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quality Assurance</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality is reflected in our certifications and rigorous testing procedures.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Award className="h-8 w-8 text-[#CC0000]" />,
                title: "ISO 9001:2015",
                description: "Certified quality management system ensuring consistent quality"
              },
              {
                icon: <Shield className="h-8 w-8 text-[#CC0000]" />,
                title: "FSSAI Certified",
                description: "Meeting all food safety standards and regulations"
              },
              {
                icon: <Users className="h-8 w-8 text-[#CC0000]" />,
                title: "Expert Team",
                description: "Qualified professionals monitoring quality at every stage"
              }
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-lg shadow-md flex flex-col items-center text-center"
              >
                <div className="mb-4 p-3 bg-red-50 rounded-full">{cert.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{cert.title}</h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ManufacturingPage;