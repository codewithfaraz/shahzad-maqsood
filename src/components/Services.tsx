const Services = () => {
  const services = [
    {
      icon: "🛍️",
      title: "Account Management",
      description:
        "Complete Amazon seller account setup and management for optimal performance and compliance.",
      features: [
        "Account Setup",
        "Policy Compliance",
        "Performance Monitoring",
      ],
    },
    {
      icon: "📈",
      title: "Product Optimization",
      description:
        "Optimize listings, keywords, and images to increase visibility and drive more sales.",
      features: ["SEO Optimization", "Image Enhancement", "A+ Content"],
    },
    {
      icon: "🎯",
      title: "PPC Advertising",
      description:
        "Strategic Amazon advertising campaigns to boost product rankings and maximize ROI.",
      features: ["Campaign Setup", "Bid Optimization", "ACOS Improvement"],
    },
    {
      icon: "📦",
      title: "Inventory Management",
      description:
        "Efficient inventory planning and management to prevent stockouts and reduce costs.",
      features: ["Stock Planning", "Forecasting", "Cost Optimization"],
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            🔥 What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Amazon services designed to help your business thrive
            in the competitive marketplace.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 border border-blue-100 group hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition duration-300">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-blue-600 flex items-center"
                  >
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
