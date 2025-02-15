import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ManufacturingPage from "./pages/ManufacturingPage";
import Footer from "./components/Footer";
import ContactPage from "./pages/ContactPage";
import RawMaterials from "./pages/RawMaterials";
import FinishedProducts from "./pages/FinishedProducts";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/RawMaterials" element={<RawMaterials />} />
              <Route path="/FinishedProducts" element={<FinishedProducts />} />
              <Route path="/manufacturing" element={<ManufacturingPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
