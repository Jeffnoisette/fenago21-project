import Image from "next/image";

const ProductShowcase = () => {

  const showcaseSteps = [
    {
      title: "Start with Your Idea",
      description: "Just bring your brilliant concept - we handle everything else",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop",
      icon: "💡",
      time: "Day 1"
    },
    {
      title: "Instant Setup",
      description: "Authentication, database, and payments configured automatically",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      icon: "⚡",
      time: "Day 1"
    },
    {
      title: "Build Features Fast",
      description: "Focus on what makes your product unique, not boring infrastructure",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
      icon: "🚀",
      time: "Days 2-7"
    },
    {
      title: "Launch & Earn",
      description: "Go live with confidence and start generating revenue immediately",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      icon: "💰",
      time: "Week 2+"
    }
  ];

  const beforeAfter = {
    before: {
      title: "The Old Way (Months of Pain)",
      items: [
        "🔴 Weeks setting up authentication",
        "🔴 Complex database configuration",
        "🔴 Payment integration nightmares",
        "🔴 SEO and performance optimization",
        "🔴 Security vulnerabilities to fix",
        "🔴 Deployment and hosting headaches"
      ],
      timeframe: "3-6 months",
      feeling: "Frustrated & Overwhelmed"
    },
    after: {
      title: "The FeNAgO Way (Days of Joy)",
      items: [
        "✅ Authentication ready in minutes",
        "✅ Database auto-configured",
        "✅ Payments work out of the box",
        "✅ SEO optimized by default",
        "✅ Enterprise-grade security included",
        "✅ One-click deployment"
      ],
      timeframe: "3-7 days",
      feeling: "Confident & Excited"
    }
  };

  const features = [
    {
      icon: "🔐",
      title: "Authentication Magic",
      demo: "Watch users sign up with Google, GitHub, or email in seconds"
    },
    {
      icon: "💳",
      title: "Payment Processing",
      demo: "Stripe integration handles subscriptions, one-time payments, and refunds"
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      demo: "Track user behavior, revenue, and growth metrics in real-time"
    },
    {
      icon: "🎨",
      title: "Beautiful UI Components",
      demo: "Pre-built, customizable components that look professional"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-blue-600">👀</span>
            See it in action
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            From Idea to{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Live Product
            </span>
            {" "}in Days
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            Stop imagining and start seeing. Here's exactly how FeNAgO transforms your development journey:
          </p>
        </div>

        {/* Visual Journey Timeline */}
        <div className="mb-20">
          <div className="max-w-6xl mx-auto">
            {/* Timeline Steps */}
            <div className="space-y-16">
              {showcaseSteps.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Content Side */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Step Number & Time */}
                    <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="bg-gradient-to-r from-orange-100 to-purple-100 text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
                        <span className="text-orange-600 text-lg mr-2">{step.icon}</span>
                        <span className="font-semibold">{step.time}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                      {step.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed mb-6">
                      {step.description}
                    </p>
                    
                    {/* Features for this step */}
                    <div className="space-y-2">
                      {index === 0 && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>Bring any idea - we handle the rest</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>No technical knowledge required</span>
                          </div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>Authentication ready in minutes</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>Database auto-configured</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>Payments integrated automatically</span>
                          </div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>Focus on unique features only</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>Pre-built UI components</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>Real-time collaboration tools</span>
                          </div>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="space-y-2">
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>One-click deployment</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>Built-in analytics dashboard</span>
                          </div>
                          <div className="flex items-center justify-center lg:justify-start gap-2 text-green-600">
                            <span>✓</span> <span>Start earning immediately</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Image Side */}
                  <div className="flex-1 max-w-lg">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <Image
                        src={step.image}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      
                      {/* Step indicator on image */}
                      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                        <div className="flex items-center gap-2">
                          <span className="text-2xl">{step.icon}</span>
                          <div>
                            <div className="text-xs font-medium text-gray-600">Step {index + 1}</div>
                            <div className="text-sm font-bold text-gray-900">{step.time}</div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Success indicator */}
                      <div className="absolute bottom-4 right-4 bg-green-500 text-white px-3 py-2 rounded-lg shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                          <span className="text-sm font-bold">Ready</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Before vs After */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            The Transformation is{" "}
            <span className="bg-gradient-to-r from-green-500 to-blue-600 bg-clip-text text-transparent">
              Incredible
            </span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">😤</div>
                <h4 className="text-2xl font-bold text-red-800 mb-2">
                  {beforeAfter.before.title}
                </h4>
                <div className="inline-flex items-center gap-2 bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  ⏰ {beforeAfter.before.timeframe}
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {beforeAfter.before.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-red-700">
                    <span className="text-lg">{item.split(' ')[0]}</span>
                    <span>{item.substring(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <div className="bg-red-200 text-red-800 px-4 py-2 rounded-lg font-medium">
                  Result: {beforeAfter.before.feeling}
                </div>
              </div>
            </div>

            {/* After */}
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <div className="text-center mb-6">
                <div className="text-4xl mb-2">🎉</div>
                <h4 className="text-2xl font-bold text-green-800 mb-2">
                  {beforeAfter.after.title}
                </h4>
                <div className="inline-flex items-center gap-2 bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  ⚡ {beforeAfter.after.timeframe}
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {beforeAfter.after.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-green-700">
                    <span className="text-lg">{item.split(' ')[0]}</span>
                    <span>{item.substring(2)}</span>
                  </li>
                ))}
              </ul>
              <div className="text-center">
                <div className="bg-green-200 text-green-800 px-4 py-2 rounded-lg font-medium">
                  Result: {beforeAfter.after.feeling}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Demos */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            See Key Features in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-bold mb-3 text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {feature.demo}
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-primary font-medium text-sm">
                  <span>View Demo</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Video Placeholder */}
        <div className="text-center">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-600/20"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-white/30 transition-colors cursor-pointer">
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Watch the 2-Minute Demo
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                See a real entrepreneur go from idea to live product in just 5 days using FeNAgO. 
                No fluff, just results.
              </p>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                2:15 runtime • 50k+ views
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience This Yourself?
            </h3>
            <p className="text-gray-600 mb-6">
              Stop watching from the sidelines. Your product is waiting to be built.
            </p>
            <a
              href="#"
              className="btn btn-gradient btn-lg px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              🎬 Start Your Success Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
