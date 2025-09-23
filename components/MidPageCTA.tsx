interface MidPageCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  variant?: 'default' | 'minimal' | 'urgent';
  showStats?: boolean;
}

const MidPageCTA = ({ 
  title = "Ready to Transform Your Idea?",
  description = "Join thousands who chose the smart path to SaaS success",
  buttonText = "Start Building Now - FREE",
  variant = 'default',
  showStats = true 
}: MidPageCTAProps) => {
  
  if (variant === 'minimal') {
    return (
      <div className="py-12 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            {title}
          </h3>
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          <a
            href="#"
            className="btn btn-gradient btn-lg px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            {buttonText}
          </a>
        </div>
      </div>
    );
  }

  if (variant === 'urgent') {
    return (
      <div className="py-16 bg-gradient-to-r from-orange-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            Limited time: Early adopter pricing
          </div>
          <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
            {title}
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <a
              href="#"
              className="btn btn-gradient btn-lg px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              {buttonText}
            </a>
            <div className="text-sm text-gray-500">
              No credit card required • 2,000+ already building
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-center lg:text-left">
              {showStats && (
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  500+ launched this week
                </div>
              )}
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                {title}
              </h3>
              <p className="text-lg text-gray-600 mb-6 lg:mb-0">
                {description}
              </p>
            </div>
            <div className="text-center">
              <a
                href="#"
                className="btn btn-gradient btn-lg px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 mb-4 block sm:inline-block"
              >
                {buttonText}
              </a>
              <div className="text-sm text-gray-500">
                No credit card required<br />
                <span className="font-semibold">Join 2,000+ successful creators</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidPageCTA;
