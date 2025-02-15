import React from "react";
import { motion } from "framer-motion";

const products = [
  {
    category: "Rice Varieties",
    items: [
      {
        name: "Premium Ponni Rice",
        description: "Traditional aromatic rice perfect for daily consumption",
        image:
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80",
      },
      {
        name: "Seeraga Samba Rice",
        description: "Premium aromatic rice ideal for biryanis",
        image:
          "https://ysamarket.com/wp-content/uploads/2021/06/seeraga-samba-600x400.jpg",
      },
    ],
  },
  {
    category: "Pulses & Legumes",
    items: [
      {
        name: "Organic Toor Dal",
        description: "High-protein yellow lentils for everyday cooking",
        image:
          "https://images.unsplash.com/photo-1515942400420-2b98fed1f515?auto=format&fit=crop&q=80",
      },
      {
        name: "Premium Chickpeas",
        description: "Nutrient-rich chickpeas for healthy meals",
        image:
          "https://cdn.shopaccino.com/edible-smart/products/black-chana-317452_l.jpg?v=530",
      },
    ],
  },
];

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Discover our extensive range of premium quality agricultural
            products, carefully sourced and processed to meet the highest
            standards.
          </p>
        </motion.div>

        {products.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16 last:mb-0">
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {category.category}
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">
                      {item.name}
                    </h4>
                    <p className="text-gray-600">{item.description}</p>
                    <button className="mt-4 text-[#CC0000] font-semibold hover:text-red-700">
                      Learn More →
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
