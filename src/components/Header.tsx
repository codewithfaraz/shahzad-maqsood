const Header = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-32 mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
            ⭐ Top Rated Amazon Expert
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Professional
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            {" "}
            Amazon{" "}
          </span>
          Assistant
        </h1>

        <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          🎯 Helping businesses succeed on Amazon with expert account
          management, optimization, and growth strategies. Scale your business
          to new heights!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-blue-800 transition duration-300 shadow-lg font-semibold">
            🚀 Get Started Today
          </button>
          <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 font-semibold">
            📞 Schedule Call
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">500+</div>
            <div className="text-gray-600">Products Launched</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">$2M+</div>
            <div className="text-gray-600">Revenue Generated</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">150+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600">99%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
