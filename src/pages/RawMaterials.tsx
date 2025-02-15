import { motion } from "framer-motion";
import { Package, Leaf, Shield } from "lucide-react";

const RawMaterials = () => {
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
        },
        {
          name: "Seeraga Samba Rice",
          description: "Premium aromatic rice ideal for biryanis",
          image:
            "https://ysamarket.com/wp-content/uploads/2021/06/seeraga-samba-600x400.jpg",
        },
        {
          name: "Idli Rice",
          description:
            "Parboiled rice, a highly carbohydrated and common staple food of South India",
          image:
            "https://www.bigtrolley.com.au/cdn/shop/collections/Idli_rice.webp",
        },
        {
          name: "Black Rice",
          description:
            "Asia’s staple forbidden rice with rich source of anthocyanin",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e9/Black_Rice.jpg",
        },
        {
          name: "Red Rice",
          description: "Pretty Powerhouse of vitamins and minerals",
          image:
            "https://bomobulk.com.au/wp-content/uploads/2023/05/Organic_Red_Rice_25KG_RIRED2-25__70057-1640059813-1280-1280__40596.jpg",
        },
      ],
    },
    {
      name: "Pulses",
      products: [
        {
          name: "Black Chickpeas",
          description: "Calories Burster Legume",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/black_chickpeas.png",
        },
        {
          name: "Avarai",
          description: "Green and pure regulates Growth",
          image: "https://smtgroups.in/wp-content/uploads/2018/10/avarai.png",
        },
        {
          name: "White Chickpeas",
          description: "Protein riched Lentils",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/white_chick.png",
        },
        {
          name: "Moong",
          description: "Quick but Hot Salad",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/white_lablab.png",
        },
        {
          name: "Kach Lablab",
          description: "Enhances Skin radiance and texture",
          image: "https://smtgroups.in/wp-content/uploads/2018/10/moong.png",
        },
        {
          name: "Lablab",
          description: "Beneficial to improve Lactation",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/kach_lablab.png",
        },
        {
          name: "Lobha",
          description: "Nutritious and Healthy Bean",
          image: "https://smtgroups.in/wp-content/uploads/2018/10/lablab.png",
        },
        {
          name: "Country Lablab",
          description: "Great Appetite suppressant",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/country_lablab.png",
        },
        {
          name: "White Peas",
          description: "Immune Booster",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/white_peas.png",
        },
        {
          name: "Black Horsegram",
          description: "Calorie Burner on regular consumption",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/black_horsegram.png",
        },
        {
          name: "Green Peas",
          description: "Staple Energy Promoter",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/greenpeas.png",
        },
        {
          name: "Rajma Beans",
          description: "Good Iron source fiber and detoxifier",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/rajma_beans.png",
        },
      ],
    },
    {
      name: "Millets",
      products: [
        {
          name: "Little Millet [Samai]",
          description: "Low carbs and excellent preventor of childhood asthma",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/littlemillet.png",
        },
        {
          name: "Kodo Millet [Varagu]",
          description:
            "High Antioxidant potential and ideal for vegetarian diet",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/kodomillet.png",
        },
        {
          name: "Foxtail Millet [Thinai]",
          description:
            "The high level of fibers significantly slows down the pace of digestion thereby helping in lowering blood sugar levels.",
          image: "https://smtgroups.in/wp-content/uploads/2018/10/foxtail.png",
        },
        {
          name: "Barnyard Millet [Kuthirai Vali]",
          description:
            "The rice for fasting. As a dietary fibers can hold up to eight times water than their mass thereby helps bowel cleansing easier.",
          image: "https://smtgroups.in/wp-content/uploads/2018/10/barnyard.png",
        },
      ],
    },
    {
      name: "Spices",
      products: [
        {
          name: "Turmeric",
          description:
            "Turmeric contains curcumin, a substance with powerful anti-inflammatory and antioxidant properties. Powerful spices of all, haldi has been every Indian households ‘go-to fix’ for a variety of health problems.",
          image: "https://smtgroups.in/wp-content/uploads/2018/10/turmeric.png",
        },
        {
          name: "Fennel Seeds",
          description:
            "Fennel seeds acts as a good laxative. Widely popular for their distinctive savory flavor.",
          image: "https://smtgroups.in/wp-content/uploads/2018/10/fennel.png",
        },
        {
          name: "Mustard Seeds",
          description:
            "Tiny little Mustard seeds are rich in selenium, known for its high anti-inflammatory effects. Added as a tempering, exotic flavour to traditional dishes.",
          image: "https://smtgroups.in/wp-content/uploads/2018/10/mustard.png",
        },
        {
          name: "Black Pepper",
          description:
            "Authentic traditional spicy pepper makes mouth watery dishes. Its flavour helps in controlling the heart rate and blood pressure.",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/blackpepper.png",
        },
        {
          name: "Fenugreek",
          description:
            "Fenugreek is a powerful medicinal herb. This legume reduces inflammation inside the body and maintain healthy testosterone levels.",
          image:
            "https://smtgroups.in/wp-content/uploads/2018/10/fenugreek.png",
        },
        {
          name: "Cumin Seeds",
          description:
            "Mainly treats anaemia and respiratory disorders. Both whole and ground cumin is used as a staple in various dishes.",
          image: "https://smtgroups.in/wp-content/uploads/2018/10/cumin.png",
        },
      ],
    },
    // ... other categories remain the same
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
          src="https://thumbs.dreamstime.com/b/variety-kinds-natural-cereal-grain-seed-sack-dark-tone-clean-food-raw-material-agricultural-product-concept-204435854.jpg"
          alt="Raw Materials"
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
              Raw Materials
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl max-w-2xl mx-auto"
            >
              Premium quality agricultural raw materials for your needs
            </motion.p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Package className="h-8 w-8 text-[#CC0000]" />,
                title: "Premium Quality",
                description: "Carefully selected and processed materials",
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
                className="flex items-start p-6 bg-gray-50 rounded-lg shadow-md"
              >
                <div className="mr-4 flex-shrink-0">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Material Categories */}
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

                    {/* <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                      <ul className="list-disc list-inside text-gray-600">
                        {product.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div> */}

                    {/* <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Available Packaging:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.packaging.map((size, i) => (
                          <span key={i} className="px-3 py-1 bg-gray-100 rounded-full text-gray-600 text-sm">
                            {size}
                          </span>
                        ))}
                      </div>
                    </div> */}
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

export default RawMaterials;
