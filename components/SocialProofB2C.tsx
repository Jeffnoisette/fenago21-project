import Image from "next/image";
import { StaticImageData } from "next/image";

// B2C-focused testimonials with emotional transformation stories
const testimonials: {
  name: string;
  role: string;
  text: string;
  img: string;
  rating: number;
  achievement: string;
  timeframe: string;
}[] = [
  {
    name: "Sarah Chen",
    role: "Solo Entrepreneur",
    text: "I went from idea to $5k MRR in just 3 weeks! FeNAgO handled all the technical stuff I was dreading. Now I can focus on what I love - building features my users actually want.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=387&auto=format&fit=crop",
    rating: 5,
    achievement: "$5k MRR",
    timeframe: "3 weeks"
  },
  {
    name: "Marcus Rodriguez",
    role: "Student Developer",
    text: "This changed everything for me. I used to spend months just setting up authentication and payments. Now I launched 3 projects this semester and one is already profitable!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=387&auto=format&fit=crop",
    rating: 5,
    achievement: "3 launches",
    timeframe: "1 semester"
  },
  {
    name: "Emily Watson",
    role: "Career Changer",
    text: "I was terrified of the technical side, but FeNAgO made me feel like a real developer. My confidence skyrocketed and I finally built the app I'd been dreaming about for years!",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=387&auto=format&fit=crop",
    rating: 5,
    achievement: "Dream app built",
    timeframe: "2 months"
  }
];

const stats = [
  { number: "2,000+", label: "Successful Launches" },
  { number: "95%", label: "Launch in <30 Days" },
  { number: "4.9/5", label: "Creator Rating" },
  { number: "$2M+", label: "Revenue Generated" }
];

const mediaLogos = [
  { name: "Product Hunt", logo: "🏆" },
  { name: "Indie Hackers", logo: "👥" },
  { name: "Dev Community", logo: "💻" },
  { name: "Startup School", logo: "🎓" }
];

const SocialProofB2C = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Join 2,000+ creators who chose the smart path
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Real Stories, Real{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Success
            </span>
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's how FeNAgO transformed dreams into reality:
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
            >
              {/* Rating Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </blockquote>

              {/* Achievement Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-blue-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <span className="text-green-600">✨</span>
                {testimonial.achievement} in {testimonial.timeframe}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Media Mentions */}
        <div className="text-center">
          <p className="text-gray-600 mb-6 font-medium">Featured and loved by:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {mediaLogos.map((media, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-500">
                <span className="text-2xl">{media.logo}</span>
                <span className="font-medium">{media.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Write Your Success Story?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of creators who chose to build smart, not hard.
            </p>
            <a
              href="#"
              className="btn btn-gradient btn-lg px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              🌟 Start Your Journey Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofB2C;
