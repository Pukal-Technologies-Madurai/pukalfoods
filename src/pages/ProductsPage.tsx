import { motion } from "framer-motion";
import { Package, Leaf, Shield } from "lucide-react";

const ProductsPage = () => {
  const categories = [
    {
      name: "Rice Varieties",
      products: [
        {
          name: "Premium Ponni Rice",
          description:
            "Traditional aromatic rice perfect for daily consumption",
          image:
            "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80",
          // features: ["High Quality", "Aromatic", "Long Grain"],
          // packaging: ["1kg", "5kg", "25kg"]
        },
        {
          name: "Seeraga Samba Rice",
          description: "Premium aromatic rice ideal for biryanis",
          image:
            "https://ysamarket.com/wp-content/uploads/2021/06/seeraga-samba-600x400.jpg",
          features: ["Premium Quality", "Traditional Variety", "Rich Aroma"],
          packaging: ["1kg", "5kg", "25kg"],
        },
        {
          name: "Brown Rice",
          description:
            "Nutritious whole grain rice for health-conscious consumers",
          image: "https://images.unsplash.com/photo-1613728913341-8f29b02b8253",
          features: ["Whole Grain", "High Fiber", "Nutritious"],
          packaging: ["1kg", "5kg"],
        },
      ],
    },
    {
      name: "Pulses & Legumes",
      products: [
        {
          name: "Organic Toor Dal",
          description: "High-protein yellow lentils for everyday cooking",
          image: "https://images.unsplash.com/photo-1668337624325-e49fd5bf1446",
          features: ["Organic", "High Protein", "Quick Cooking"],
          packaging: ["500g", "1kg", "5kg"],
        },
        {
          name: "Premium Chickpeas",
          description: "Nutrient-rich chickpeas for healthy meals",
          image:
            "https://cdn.shopaccino.com/edible-smart/products/black-chana-317452_l.jpg?v=530",
          features: ["Premium Quality", "Rich in Fiber", "Versatile"],
          packaging: ["500g", "1kg", "5kg"],
        },
      ],
    },
    {
      name: "Value added Millets",
      products: [
        {
          name: "Little Millet [Samai]",
          description: "Low carbs and excellent preventor of childhood asthma",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/A_closeup_fo_Samai_millet_with_husk.JPG/1200px-A_closeup_fo_Samai_millet_with_husk.JPG",
          features: ["Organic", "High Protein", "Quick Cooking"],
          packaging: ["500g", "1kg", "5kg"],
        },
        {
          name: "Kodo Millet [Varagu]",
          description:
            "High Antioxidant potential and ideal for vegetarian diet",
          image:
            "https://cdn.shopaccino.com/edible-smart/products/black-chana-317452_l.jpg?v=530",
          features: ["Premium Quality", "Rich in Fiber", "Versatile"],
          packaging: ["500g", "1kg", "5kg"],
        },
        {
          name: "Foxtail Millet [Thinai]",
          description:
            "The high level of fibers significantly slows down the pace of digestion thereby helping in lowering blood sugar levels.",
          image:
            "https://www.payirfoods.com/wp-content/uploads/2022/02/4.-FOXTAIL-MILETS.jpg",
          features: ["Premium Quality", "Rich in Fiber", "Versatile"],
          packaging: ["500g", "1kg", "5kg"],
        },
        {
          name: "Barnyard Millet [Kuthirai Vali]",
          description:
            "The rice for fasting. As a dietary fibers can hold up to eight times water than their mass thereby helps bowel cleansing easier.",
          image:
            "https://www.kannukutty.in/static/images/1/3027871b-75af-4889-9f20-d7db326bce07.jpg",
          features: ["Premium Quality", "Rich in Fiber", "Versatile"],
          packaging: ["500g", "1kg", "5kg"],
        },
      ],
    },
  ];

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
          src="https://images.unsplash.com/photo-1595974482597-4b8dc7b2c8e3?auto=format&fit=crop&q=80"
          alt="Products"
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
              Our Products
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Premium quality agricultural products for your needs
            </motion.p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="h-8 w-8 text-[#CC0000]" />,
                title: "Premium Quality",
                description: "Carefully selected and processed products",
              },
              {
                icon: <Leaf className="h-8 w-8 text-[#CC0000]" />,
                title: "Organic Options",
                description: "Naturally grown and processed",
              },
              {
                icon: <Shield className="h-8 w-8 text-[#CC0000]" />,
                title: "Quality Assured",
                description: "Rigorous quality control measures",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-md"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {categories.map((category, categoryIndex) => (
        <section
          key={categoryIndex}
          className={`py-20 ${
            categoryIndex % 2 === 0 ? "bg-gray-50" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {category.name}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Features:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {product.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Available Packaging:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {product.packaging.map((size, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </motion.div>
  );
};

export default ProductsPage;
