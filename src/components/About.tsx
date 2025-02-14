import React from 'react';
import { motion } from 'framer-motion';
import { Award, Factory, Users, Shield } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          {...fadeIn}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Pukal Foods</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Since 1995, we've been at the forefront of agricultural innovation, 
            delivering premium quality products that meet the highest standards of 
            excellence in the industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Award className="h-8 w-8 text-[#CC0000]" />,
              title: "Quality Assurance",
              description: "ISO 9001:2015 certified quality management systems"
            },
            {
              icon: <Factory className="h-8 w-8 text-[#CC0000]" />,
              title: "Modern Facilities",
              description: "State-of-the-art processing and packaging units"
            },
            {
              icon: <Users className="h-8 w-8 text-[#CC0000]" />,
              title: "Expert Team",
              description: "Skilled professionals with decades of experience"
            },
            {
              icon: <Shield className="h-8 w-8 text-[#CC0000]" />,
              title: "Food Safety",
              description: "FSSAI certified with stringent quality controls"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;