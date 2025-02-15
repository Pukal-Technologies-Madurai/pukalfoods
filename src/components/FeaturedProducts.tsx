import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    name: "Ponni Rice",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80",
    description: "Premium quality rice known for its unique taste and aroma.",
  },
  {
    id: 2,
    name: "Organic Pulses",
    image:
      "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&q=80",
    description: "Naturally grown pulses packed with nutrition.",
  },
  {
    id: 3,
    name: "Healthy Snacks",
    image:
      "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?auto=format&fit=crop&q=80",
    description:
      "Nutritious and delicious snacks for health-conscious consumers.",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of premium agricultural products, carefully
            selected and processed to meet the highest quality standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <button className="mt-4 text-[#CC0000] font-semibold hover:text-red-700">
                  Learn More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
