import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-white">
            🚀 Amazon Assistant Pro
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-white hover:text-blue-200 transition duration-300 font-medium"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-white hover:text-blue-200 transition duration-300 font-medium"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-white hover:text-blue-200 transition duration-300 font-medium"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="bg-white text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition duration-300 font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-blue-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-white hover:bg-blue-600 rounded"
              >
                Home
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-white hover:bg-blue-600 rounded"
              >
                Services
              </a>
              <a
                href="#portfolio"
                className="block px-3 py-2 text-white hover:bg-blue-600 rounded"
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white hover:bg-blue-600 rounded"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
