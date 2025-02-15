import { motion } from "framer-motion";
import { Settings, Package, Shield, TrendingUp } from "lucide-react";

const Manufacturing = () => {
  const facilities = [
    {
      image:
        "https://www.shrifoodsindia.com/static/Chocolate%20Cooling%20Unit-37cc2ec8dd8071f9e03730ac6ca16137.webp",
      title: "Modern Processing Units",
      description:
        "State-of-the-art facilities equipped with the latest technology",
    },
    {
      image:
        "https://www.shrifoodsindia.com/static/Air%20Puff%20Gun-1d322b311e2fd013825864d0f931d56a.webp",
      title: "Quality Testing Lab",
      description: "Advanced testing facilities ensuring product quality",
    },
  ];

  return (
    <section id="manufacturing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Manufacturing Excellence
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our state-of-the-art manufacturing facilities combine traditional
            expertise with modern technology to deliver products of the highest
            quality.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-semibold mb-2">
                    {facility.title}
                  </h3>
                  <p>{facility.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Settings className="h-8 w-8 text-[#CC0000]" />,
              title: "Advanced Technology",
              description: "Latest processing equipment",
            },
            {
              icon: <Package className="h-8 w-8 text-[#CC0000]" />,
              title: "Packaging Solutions",
              description: "Multiple packaging options",
            },
            {
              icon: <Shield className="h-8 w-8 text-[#CC0000]" />,
              title: "Quality Control",
              description: "Rigorous testing protocols",
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-[#CC0000]" />,
              title: "High Capacity",
              description: "Large scale production",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
  );
};

export default Manufacturing;
