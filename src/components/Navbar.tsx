import React from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Pukal Foods Logo" className="h-12 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/") ? "text-[#CC0000]" : "text-gray-800"
              } hover:text-[#CC0000]`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`${
                isActive("/about") ? "text-[#CC0000]" : "text-gray-800"
              } hover:text-[#CC0000]`}
            >
              About
            </Link>
            <div className="relative group">
              <button
                className={`flex items-center ${
                  isActive("RawMaterials") || isActive("FinishedProducts")
                    ? "text-[#CC0000]"
                    : "text-gray-800"
                } hover:text-[#CC0000]`}
              >
                Products <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 -mt-1">
                <div className="absolute h-2 w-full -top-2"></div>
                <Link
                  to="/RawMaterials"
                  className="block px-4 py-2 text-gray-800 hover:text-[#CC0000] hover:bg-gray-100"
                >
                  Primitive Materials
                </Link>
                <Link
                  to="/FinishedProducts"
                  className="block px-4 py-2 text-gray-800 hover:text-[#CC0000] hover:bg-gray-100"
                >
                  Ready-to-Relish
                </Link>
              </div>
            </div>
            <Link
              to="/manufacturing"
              className={`${
                isActive("/manufacturing") ? "text-[#CC0000]" : "text-gray-800"
              } hover:text-[#CC0000]`}
            >
              Manufacturing
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact") ? "text-[#CC0000]" : "text-gray-800"
              } hover:text-[#CC0000]`}
            >
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className={`block px-3 py-2 ${
                isActive("/") ? "text-[#CC0000]" : "text-gray-800"
              } hover:bg-gray-100`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 ${
                isActive("/about") ? "text-[#CC0000]" : "text-gray-800"
              } hover:bg-gray-100`}
            >
              About
            </Link>
            <Link
              to="/RawMaterials"
              className={`block px-3 py-2 ${
                isActive("/RawMaterials") ? "text-[#CC0000]" : "text-gray-800"
              } hover:bg-gray-100`}
            >
              Primitive Materials
            </Link>
            <Link
              to="/FinishedProducts"
              className={`block px-3 py-2 ${
                isActive("/FinishedProducts")
                  ? "text-[#CC0000]"
                  : "text-gray-800"
              } hover:bg-gray-100`}
            >
              Ready-to-Relish
            </Link>
            <Link
              to="/manufacturing"
              className={`block px-3 py-2 ${
                isActive("/manufacturing") ? "text-[#CC0000]" : "text-gray-800"
              } hover:bg-gray-100`}
            >
              Manufacturing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
