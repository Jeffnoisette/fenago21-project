import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-8 lg:gap-12 items-center justify-center text-center lg:text-left lg:items-start">
        {/* Emotional Headline with Gradient Animation */}
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight leading-tight">
            Build Your Dream SaaS in{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Days, Not Months
            </span>
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-purple-600 mx-auto lg:mx-0 rounded-full"></div>
        </div>

        {/* Emotional Subheadline */}
        <p className="text-xl lg:text-2xl opacity-90 leading-relaxed max-w-2xl">
          Stop struggling with complex setups and endless tutorials. 
          <span className="font-semibold text-primary"> Your brilliant idea deserves to see the light</span> — 
          we handle all the boring technical stuff so you can focus on what matters most.
        </p>

        {/* Immediate CTA with Urgency */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#"
            className="btn btn-gradient btn-lg px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 hover-lift active:scale-95 w-full sm:w-auto"
            style={{ minHeight: '52px', touchAction: 'manipulation' }}
          >
            🚀 Start Building Now - FREE
          </a>
          <div className="text-sm opacity-70 text-center sm:text-left mobile-text-lg">
            No credit card required<br />
            <span className="font-semibold animate-pulse-slow">2,000+ creators already building</span>
          </div>
        </div>

        {/* Enhanced Social Proof */}
        <div className="flex flex-col items-center lg:items-start gap-4">
          <TestimonialsAvatars priority={true} />
          <div className="flex items-center gap-2 text-sm opacity-80">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="font-medium">500+ launched this week</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lifestyle-focused Visual */}
      <div className="lg:w-full relative">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
            alt="Successful entrepreneurs celebrating their SaaS launch"
            className="w-full hover:scale-105 transition-transform duration-700"
            priority={true}
            width={600}
            height={400}
          />
          {/* Overlay with success indicators */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-800">Live & Earning</span>
            </div>
          </div>
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
            <div className="text-sm font-semibold text-gray-800">
              💰 $10k+ MRR in 30 days
            </div>
          </div>
        </div>
        
        {/* Floating success metrics */}
        <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-full px-4 py-2 shadow-lg animate-bounce">
          <span className="text-sm font-bold">⚡ 10x Faster</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
