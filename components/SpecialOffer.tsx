"use client";

import { useState, useEffect } from 'react';

interface SpecialOfferProps {
  variant?: 'early-bird' | 'limited-time' | 'launch-week' | 'community';
  position?: 'banner' | 'section' | 'floating';
}

const SpecialOffer = ({ variant = 'early-bird', position = 'section' }: SpecialOfferProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time until end of current month (honest urgency)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const difference = endOfMonth.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const offers = {
    'early-bird': {
      badge: '🎯 Early Adopter Special',
      title: 'Get 50% Off Your First Month',
      description: 'Join the first 1,000 creators and save big while helping us perfect the platform',
      discount: '50% OFF',
      originalPrice: '$149',
      salePrice: '$74',
      buttonText: 'Claim Early Bird Pricing',
      urgencyText: 'Only for the first 1,000 users',
      bgColor: 'from-green-50 to-emerald-50',
      badgeColor: 'bg-green-100 text-green-800'
    },
    'limited-time': {
      badge: '⏰ Limited Time Offer',
      title: 'Launch Week Special - 40% Off',
      description: 'Celebrate our launch with exclusive pricing that expires soon',
      discount: '40% OFF',
      originalPrice: '$149',
      salePrice: '$89',
      buttonText: 'Get Launch Week Pricing',
      urgencyText: 'Offer expires at month end',
      bgColor: 'from-orange-50 to-red-50',
      badgeColor: 'bg-orange-100 text-orange-800'
    },
    'launch-week': {
      badge: '🚀 Launch Week Only',
      title: 'Exclusive Founder Pricing',
      description: 'Be among the first to build with FeNAgO and lock in special pricing forever',
      discount: 'FOUNDER',
      originalPrice: '$149',
      salePrice: '$99',
      buttonText: 'Lock In Founder Pricing',
      urgencyText: 'Limited to first 500 founders',
      bgColor: 'from-purple-50 to-pink-50',
      badgeColor: 'bg-purple-100 text-purple-800'
    },
    'community': {
      badge: '👥 Community Special',
      title: 'Join 2,000+ Successful Creators',
      description: 'Get the same tools that helped others build profitable SaaS products',
      discount: 'FREE',
      originalPrice: '$149',
      salePrice: 'Start Free',
      buttonText: 'Join the Community',
      urgencyText: '500+ joined this week',
      bgColor: 'from-blue-50 to-indigo-50',
      badgeColor: 'bg-blue-100 text-blue-800'
    }
  };

  const currentOffer = offers[variant];

  if (position === 'banner') {
    return (
      <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="text-lg">🎉</span>
            <span className="font-semibold">
              {currentOffer.title} - {currentOffer.discount}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm opacity-90">{currentOffer.urgencyText}</span>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors">
              Claim Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (position === 'floating') {
    return (
      <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:max-w-sm z-40 animate-pulse">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
          <div className="flex items-center justify-between mb-2">
            <span className={`text-xs px-2 py-1 rounded-full font-medium ${currentOffer.badgeColor}`}>
              {currentOffer.badge}
            </span>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
            </button>
          </div>
          <h4 className="font-bold text-gray-900 text-sm mb-1">{currentOffer.discount} - Limited Time</h4>
          <p className="text-xs text-gray-600 mb-3">{currentOffer.urgencyText}</p>
          <button className="w-full bg-gradient-to-r from-orange-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold text-sm hover:shadow-lg transition-all">
            Claim Offer
          </button>
        </div>
      </div>
    );
  }

  // Default section variant
  return (
    <div className={`py-16 bg-gradient-to-br ${currentOffer.bgColor}`}>
      <div className="max-w-6xl mx-auto px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Left: Offer Details */}
            <div className="lg:col-span-2 p-8 lg:p-12">
              <div className={`inline-flex items-center gap-2 ${currentOffer.badgeColor} px-4 py-2 rounded-full text-sm font-medium mb-6`}>
                <div className="w-2 h-2 bg-current rounded-full animate-pulse"></div>
                {currentOffer.badge}
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                {currentOffer.title}
              </h3>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {currentOffer.description}
              </p>

              {/* Pricing */}
              <div className="flex items-center gap-4 mb-6">
                <div className="text-4xl font-bold text-primary">
                  {currentOffer.salePrice}
                </div>
                {variant !== 'community' && (
                  <div className="text-xl text-gray-500 line-through">
                    {currentOffer.originalPrice}
                  </div>
                )}
                <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold">
                  {currentOffer.discount}
                </div>
              </div>

              {/* CTA */}
              <a
                href="#"
                className="btn btn-gradient btn-lg px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 mb-4 inline-block"
              >
                {currentOffer.buttonText}
              </a>
              
              <div className="text-sm text-gray-500">
                {currentOffer.urgencyText} • No credit card required
              </div>
            </div>

            {/* Right: Countdown Timer */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 lg:p-12 flex flex-col justify-center text-white">
              <h4 className="text-xl font-bold mb-6 text-center">
                ⏰ Offer Expires In:
              </h4>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{timeLeft.days}</div>
                  <div className="text-sm opacity-80">Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{timeLeft.hours}</div>
                  <div className="text-sm opacity-80">Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{timeLeft.minutes}</div>
                  <div className="text-sm opacity-80">Minutes</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{timeLeft.seconds}</div>
                  <div className="text-sm opacity-80">Seconds</div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-sm opacity-80 mb-2">After that, regular pricing applies</div>
                <div className="text-lg font-semibold">$149/month</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
