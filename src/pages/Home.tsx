import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Manufacturing from '../components/Manufacturing';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <About />
      <Products />
      <Manufacturing />
      <FeaturedProducts />
    </motion.div>
  );
};

export default Home;