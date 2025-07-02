const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              🚀 Amazon Assistant Pro
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Professional Amazon services to grow your business. Let's scale
              your success together with proven strategies and expert guidance.
            </p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300">
                📧
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300">
                💼
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300">
                📱
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">
              🛍️ Services
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-white transition duration-300 cursor-pointer">
                Account Management
              </li>
              <li className="hover:text-white transition duration-300 cursor-pointer">
                Product Optimization
              </li>
              <li className="hover:text-white transition duration-300 cursor-pointer">
                PPC Advertising
              </li>
              <li className="hover:text-white transition duration-300 cursor-pointer">
                Inventory Management
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">
              📞 Contact
            </h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <span className="mr-3">📧</span>
                <span>shahzadmaqsood524@gmail.com</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">📱</span>
                <span>+447572479604</span>
              </div>
              <div className="flex items-center">
                <span className="mr-3">🌍</span>
                <span>Available Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2024 Amazon Assistant Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
