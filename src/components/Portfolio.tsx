const Portfolio = () => {
  const projects = [
    {
      title: "E-commerce Brand Growth",
      description:
        "Increased sales by 300% for a home goods brand through strategic optimization and advertising campaigns.",
      metric: "300% Sales Growth",
      category: "Brand Growth",
    },
    {
      title: "Product Launch Success",
      description:
        "Successfully launched 15+ products with strategic keyword research and listing optimization.",
      metric: "15+ Products",
      category: "Product Launch",
    },
    {
      title: "PPC Campaign Management",
      description:
        "Managed $50k+ monthly ad spend with 25% improvement in ACOS and increased profitability.",
      metric: "25% ACOS Improvement",
      category: "Advertising",
    },
    {
      title: "Account Recovery",
      description:
        "Restored suspended seller account and implemented compliance strategies for long-term success.",
      metric: "100% Recovery",
      category: "Account Management",
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            💼 Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from recent Amazon projects and the impact we've
            created together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 group hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="text-center text-white z-10">
                  <div className="text-3xl font-bold mb-2">
                    {project.metric}
                  </div>
                  <div className="text-sm opacity-90">{project.category}</div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-white bg-opacity-20 rounded-full"></div>
                <div className="absolute -top-2 -left-2 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
