"use client";

import { useEffect, useState } from 'react';

const MobileOptimizations = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
      
      // Show mobile optimizations after some scroll
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 lg:hidden">
        <div 
          className="h-1 bg-gradient-to-r from-orange-500 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Mobile Reading Progress Indicator */}
      {isVisible && (
        <div className="fixed bottom-20 right-4 z-40 lg:hidden">
          <div className="relative w-12 h-12">
            <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
              <path
                className="text-gray-300"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="text-primary"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeDasharray={`${scrollProgress}, 100`}
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-bold text-primary">
                {Math.round(scrollProgress)}%
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Touch Feedback Styles */}
      <style jsx global>{`
        /* Enhanced touch targets for mobile */
        @media (max-width: 768px) {
          .btn {
            min-height: 44px;
            min-width: 44px;
            padding: 12px 24px;
            font-size: 16px;
            border-radius: 12px;
          }
          
          .btn-lg {
            min-height: 52px;
            padding: 16px 32px;
            font-size: 18px;
          }
          
          /* Touch feedback */
          .btn:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
          
          /* Card touch feedback */
          .card-hover:active {
            transform: scale(0.98);
            transition: transform 0.1s ease;
          }
          
          /* Smooth scrolling for mobile */
          html {
            scroll-behavior: smooth;
            -webkit-overflow-scrolling: touch;
          }
          
          /* Better tap highlights */
          * {
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1);
          }
          
          /* Improved form inputs */
          input, textarea, select {
            font-size: 16px; /* Prevents zoom on iOS */
            min-height: 44px;
            border-radius: 8px;
          }
          
          /* Better spacing for mobile */
          .mobile-spacing {
            padding-left: 16px;
            padding-right: 16px;
          }
          
          /* Mobile-optimized text sizes */
          .mobile-text-lg {
            font-size: 18px;
            line-height: 1.6;
          }
          
          .mobile-text-xl {
            font-size: 20px;
            line-height: 1.5;
          }
        }
        
        /* Micro-interactions */
        .animate-bounce-gentle {
          animation: bounce-gentle 2s infinite;
        }
        
        @keyframes bounce-gentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-5px);
          }
          60% {
            transform: translateY(-3px);
          }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out;
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Hover effects that work on mobile */
        .hover-lift {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        
        .hover-lift:hover,
        .hover-lift:active {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        /* Gradient text animation */
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
        
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        /* Loading states */
        .skeleton {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        /* Intersection Observer animations - Less aggressive */
        .fade-in-up {
          opacity: 0.3;
          transform: translateY(15px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        
        .fade-in-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .fade-in-left {
          opacity: 0.3;
          transform: translateX(-15px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        
        .fade-in-left.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        .fade-in-right {
          opacity: 0.3;
          transform: translateX(15px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        
        .fade-in-right.visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Scale in animation - Less aggressive */
        .scale-in {
          opacity: 0.5;
          transform: scale(0.95);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        
        .scale-in.visible {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </>
  );
};

export default MobileOptimizations;
