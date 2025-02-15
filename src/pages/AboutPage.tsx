import { motion } from "framer-motion";
import { Award, Users, Target, History } from "lucide-react";

const AboutPage = () => {
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
          src="https://images.unsplash.com/photo-1595342084661-5b5c62aa3a8c?auto=format&fit=crop&q=80"
          alt="Traditional Indian Grains"
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
              Welcome to Pukal Foods India
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Bridging Premium Food Products from S.M. Traders and Shri Foods
            </motion.p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Heritage
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Pukal Foods India stands as the premier bridge between S.M.
                  Traders and Shri Foods, bringing premium quality food products
                  to markets across India. Our portfolio includes the finest
                  pulses, grains, flours, spices, and innovative modern snacks.
                </p>
                <p>
                  S.M. Traders, established in 1990, has built a legacy of
                  excellence through their brands Vanmathi Trading Company and
                  Bavani Trading Company. Meanwhile, Shri Foods from Madurai
                  leads innovation in healthy snack alternatives using
                  traditional grains.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                src="https://images.unsplash.com/photo-1611502695212-1a5cdffa46e4"
                alt="Traditional Grains"
                className="rounded-lg shadow-lg"
              />
              <motion.img
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                src="https://images.unsplash.com/photo-1477506350614-fcdc29a3b157"
                alt="Modern Snacks"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Discover our diverse range of traditional and innovative food
              products
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image:
                  "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80",
                title: "Premium Grains & Pulses",
                description: "High-quality rice, pulses, and millets",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80",
                title: "Traditional Spices",
                description: "Authentic Indian spices and blends",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80",
                title: "Modern Snacks",
                description: "Healthy extruder and puffed snacks",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our core values guide every decision we make and every product we
              deliver.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-[#CC0000]" />,
                title: "Excellence",
                description:
                  "Striving for the highest quality in everything we do",
              },
              {
                icon: <Users className="h-8 w-8 text-[#CC0000]" />,
                title: "Collaboration",
                description: "Working together to achieve common goals",
              },
              {
                icon: <Target className="h-8 w-8 text-[#CC0000]" />,
                title: "Innovation",
                description:
                  "Continuously improving our processes and products",
              },
              {
                icon: <History className="h-8 w-8 text-[#CC0000]" />,
                title: "Heritage",
                description:
                  "Honoring our traditions while embracing the future",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md flex items-center"
              >
                <div className="mr-4 flex-shrink-0">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Companies
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The trusted brands that form Pukal Foods India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "S.M. Traders",
                position: "Est. 1990",
                description:
                  "Specializing in premium quality rice, pulses, millets, and spices",
                image:
                  "https://images.unsplash.com/photo-1509358271058-acd22cc93898?auto=format&fit=crop&q=80",
              },
              {
                name: "Shri Foods",
                position: "Madurai",
                description:
                  "Innovative manufacturer of healthy extruder and puffed snacks",
                image:
                  "https://www.shrifoodsindia.com/static/logo-dad49c8392a067bd3834c9a55194fe25.png",
              },
            ].map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
              >
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {company.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{company.position}</p>
                  <p className="text-gray-500 text-sm">{company.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
