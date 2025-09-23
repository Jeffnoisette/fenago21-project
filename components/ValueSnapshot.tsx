const ValueSnapshot = () => {
  const benefits = [
    {
      icon: "⚡",
      title: "Save Weeks",
      description: "Launch faster than your competition",
      detail: "Skip months of setup and go from idea to live product in days"
    },
    {
      icon: "🧘",
      title: "Zero Stress",
      description: "No more technical headaches",
      detail: "We handle authentication, payments, database, and deployment"
    },
    {
      icon: "🎯",
      title: "Stay Motivated",
      description: "See progress from day one",
      detail: "Built-in analytics and user feedback tools keep you inspired"
    },
    {
      icon: "💪",
      title: "Feel Confident",
      description: "Built-in best practices",
      detail: "Security, SEO, and performance optimizations included"
    },
    {
      icon: "🚀",
      title: "Join Winners",
      description: "2,000+ successful launches",
      detail: "Be part of a thriving community of successful creators"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-8 py-16 lg:py-24 bg-gradient-to-br from-base-100 to-base-200">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Why Creators Choose{" "}
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            FeNAgO
          </span>
        </h2>
        <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
          Stop wasting time on setup and start building what matters. 
          Here's what you get when you choose the smart path:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {benefit.icon}
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {benefit.title}
            </h3>
            
            {/* Description */}
            <p className="text-primary font-semibold mb-3">
              {benefit.description}
            </p>
            
            {/* Detail */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {benefit.detail}
            </p>

            {/* Hover indicator */}
            <div className="mt-4 w-0 group-hover:w-full h-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full transition-all duration-300"></div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          Everything you need is already built and waiting for you
        </div>
        <div>
          <a
            href="#"
            className="btn btn-gradient btn-lg px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            🎯 Start Building Your Dream
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueSnapshot;
