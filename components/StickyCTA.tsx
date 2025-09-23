"use client";

import { useState, useEffect } from 'react';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show sticky CTA after scrolling 300px
      setIsVisible(currentScrollY > 300);
      
      // Track scroll direction
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Sticky CTA */}
      <div className={`fixed top-4 right-4 z-50 transition-all duration-300 hidden lg:block ${
        isScrollingUp ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
      }`}>
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 max-w-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">2,000+ building now</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-2">Ready to start?</h4>
          <p className="text-sm text-gray-600 mb-4">Join successful creators today</p>
          <a
            href="#"
            className="btn btn-gradient btn-sm w-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            🚀 Start Building Free
          </a>
        </div>
      </div>

      {/* Mobile Sticky CTA Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 ${
        isScrollingUp ? 'translate-y-0' : 'translate-y-full'
      }`}>
        <div className="bg-white border-t border-gray-200 shadow-2xl p-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-600">2,000+ creators building</span>
              </div>
              <h4 className="font-bold text-gray-900 text-sm">Start your SaaS journey</h4>
            </div>
            <a
              href="#"
              className="btn btn-gradient btn-sm px-6 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Start Free
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyCTA;
