import { motion } from "framer-motion";
import finger from "../assets/finished-goods/finger-millet-puff.webp";
import jowar from "../assets/finished-goods/jowar-puff.webp";
import multiMillet from "../assets/finished-goods/multi-millet-puff.webp";
import pearl from "../assets/finished-goods/pearl-millet-puff.webp";

const FinishedProducts = () => {
  const categories = [
    {
      title: "Popped",
      products: [
        {
          name: "POPPED WHEAT",
          description: "Crunchy whole grain healthy snack",
          image:
            "https://www.shrifoodsindia.com/static/popped-pearl-millet-a9318b2eb944dad0f6cb67f72e6ede09.jpg",
        },
        {
          name: "POPPED BARLEY",
          description: "Light and nutritious natural popped",
          image:
            "https://www.shrifoodsindia.com/static/popped-barley-1b67a7455b2e8d16ea92facbab2b0b52.jpg",
        },
        {
          name: "POPPED PEARL MILLET",
          description: "Traditional superfood rich in nutrients",
          image:
            "https://www.shrifoodsindia.com/static/popped-wheat-2b1142c422c3a13cff46b2c1c4b79112.jpg",
        },
        {
          name: "OTHER VALUE ADDED MILLETS",
          description: "Diverse ancient grains for health",
          image:
            "https://www.shrifoodsindia.com/static/Protein%20Bars-7031eb5485a93bc041e42b1d9050867c.webp",
        },
      ],
    },
    {
      title: "Extruded",
      products: [
        {
          name: "PEARL MILLET PUFF",
          description: "Airy and crispy millet snacks",
          image: pearl,
        },
        {
          name: "JOWAR PUFF",
          description: "Gluten-free healthy puffed sorghum",
          image: jowar,
        },
        {
          name: "FINGER MILLET PUFF",
          description: "Calcium-rich nutritious ragi puffs",
          image: multiMillet,
        },
        {
          name: "MULTI MILLET PUFF",
          description: "Blend of healthy millet varieties",
          image: finger,
        },
        {
          name: "CORN RING PUFF",
          description: "Ring-shaped crunchy corn snack",
          image:
            "https://www.shrifoodsindia.com/static/Rings%20Puff-fe9e0792100cfb802be455dbe90139b0.png",
        },
        {
          name: "CORN PUFF",
          description: "Light and crispy corn bites",
          image:
            "https://www.shrifoodsindia.com/static/Corn%20Puff-817393863343e8940f042b4a274cfb3b.png",
        },
        {
          name: "CORN STICK PUFF",
          description: "Stick-shaped crunchy corn snacks",
          image:
            "https://www.shrifoodsindia.com/static/Stick%20Puff-8ff1890b09004c787d46087fa92304d8.png",
        },
        {
          name: "CORN WAVE CHIPS",
          description: "Wavy textured crispy corn chips",
          image:
            "https://www.shrifoodsindia.com/static/Wave%20Puff-ee8b137878342ede1534a4e69817f3c1.png",
        },
      ],
    },
    {
      title: "Bars",
      products: [
        {
          name: "PROTEIN BARS",
          description: "High-protein nutritious energy boost",
          image:
            "https://www.shrifoodsindia.com/static/Protein%20Bars-7031eb5485a93bc041e42b1d9050867c.webp",
        },
        {
          name: "CEREAL BARS",
          description: "Wholesome breakfast on the go",
          image:
            "https://www.shrifoodsindia.com/static/Cereal%20Bars-08287a10736f067c38ee3d29ff241fdf.webp",
        },
        {
          name: "ENERGY BARS",
          description: "Quick energy packed healthy bars",
          image:
            "https://www.shrifoodsindia.com/static/energy%20bar-b509f1314932f74e25013446089478fa.webp",
        },
        {
          name: "SNACK BAR",
          description: "Tasty and nutritious snack option",
          image:
            "https://www.shrifoodsindia.com/static/Snack%20Bar-d5784b074240eb93d92df59dafb837b5.webp",
        },
      ],
    },
    {
      title: "Core Filled",
      products: [
        {
          name: "CORE FILLED SNACKS",
          description: "Delicious filled crunchy treats",
          image:
            "https://www.shrifoodsindia.com/static/Core%20Filled%20snacks-23cf600b7ba146ddc7a403c41bfcacc4.webp",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Intro Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative pt-24 pb-16 text-center"
      >
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Finished Products
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Discover our range of innovative and healthy snack solutions. From
          popped grains to protein bars, we offer nutritious alternatives that
          don't compromise on taste.
        </p>
      </motion.div>

      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 relative">
                {category.title}
                <div className="absolute bottom-0 left-0 w-20 h-1 bg-blue-500 mt-2"></div>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <motion.div
                    key={productIndex}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl"
                  >
                    <div className="relative overflow-hidden group">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-contain transform group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FinishedProducts;
