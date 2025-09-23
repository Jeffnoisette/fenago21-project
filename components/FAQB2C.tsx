"use client";

import { useRef, useState } from "react";
import type { JSX } from "react";

interface FAQItemProps {
  question: string;
  answer: JSX.Element;
  category?: 'pricing' | 'getting-started' | 'technical' | 'support';
}

const faqList: FAQItemProps[] = [
  {
    question: "Is FeNAgO really free to start?",
    category: 'pricing',
    answer: (
      <div className="space-y-3 leading-relaxed">
        <p>
          <strong>Yes, absolutely!</strong> You can start building immediately with no credit card required. 
          Our free tier includes:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Complete authentication system</li>
          <li>Database setup and management</li>
          <li>Basic payment processing</li>
          <li>Community support</li>
        </ul>
        <p className="text-green-600 font-medium">
          💡 Many creators launch successful products using just the free tier!
        </p>
      </div>
    ),
  },
  {
    question: "What happens after the free trial? Will I be charged automatically?",
    category: 'pricing',
    answer: (
      <div className="space-y-3 leading-relaxed">
        <p>
          <strong>No automatic charges, ever!</strong> We believe in transparency:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Free tier continues forever - no expiration</li>
          <li>You choose when (and if) to upgrade</li>
          <li>Clear pricing with no hidden fees</li>
          <li>Cancel anytime with one click</li>
        </ul>
        <p className="text-blue-600 font-medium">
          🛡️ Your trust matters more than a quick sale.
        </p>
      </div>
    ),
  },
  {
    question: "I'm not technical - can I really build a SaaS with this?",
    category: 'getting-started',
    answer: (
      <div className="space-y-3 leading-relaxed">
        <p>
          <strong>Absolutely!</strong> FeNAgO was designed for creators, not just developers:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>No coding required for basic setup</li>
          <li>Visual drag-and-drop interface</li>
          <li>Step-by-step guided tutorials</li>
          <li>24/7 community support</li>
          <li>Live chat help when you're stuck</li>
        </ul>
        <p className="text-purple-600 font-medium">
          🎯 If you can use social media, you can build with FeNAgO!
        </p>
      </div>
    ),
  },
  {
    question: "How quickly can I actually launch my SaaS?",
    category: 'getting-started',
    answer: (
      <div className="space-y-3 leading-relaxed">
        <p>
          <strong>Most creators launch within 1-2 weeks!</strong> Here's the typical timeline:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <ul className="space-y-2">
            <li><strong>Day 1:</strong> Setup and basic configuration ⚡</li>
            <li><strong>Days 2-5:</strong> Build your core features 🛠️</li>
            <li><strong>Days 6-10:</strong> Design and polish 🎨</li>
            <li><strong>Days 11-14:</strong> Test and launch 🚀</li>
          </ul>
        </div>
        <p className="text-green-600 font-medium">
          ✨ Some ambitious creators have launched in just 3 days!
        </p>
      </div>
    ),
  },
  {
    question: "Is my data and my users' data secure?",
    category: 'technical',
    answer: (
      <div className="space-y-3 leading-relaxed">
        <p>
          <strong>Security is our top priority.</strong> Your data is protected with:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Enterprise-grade encryption (256-bit SSL)</li>
          <li>GDPR and CCPA compliant</li>
          <li>Regular security audits</li>
          <li>Secure cloud infrastructure</li>
          <li>Automatic backups</li>
        </ul>
        <p className="text-blue-600 font-medium">
          🔒 We use the same security standards as major banks.
        </p>
      </div>
    ),
  },
  {
    question: "What if I need help or get stuck?",
    category: 'support',
    answer: (
      <div className="space-y-3 leading-relaxed">
        <p>
          <strong>You're never alone!</strong> We provide multiple support channels:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>24/7 live chat support</li>
          <li>Active community forum (2,000+ creators)</li>
          <li>Video tutorials and documentation</li>
          <li>Weekly live Q&A sessions</li>
          <li>Direct email to our founders</li>
        </ul>
        <p className="text-orange-600 font-medium">
          🤝 Average response time: Under 2 hours!
        </p>
      </div>
    ),
  },
  {
    question: "Can I cancel anytime? What's your refund policy?",
    category: 'pricing',
    answer: (
      <div className="space-y-3 leading-relaxed">
        <p>
          <strong>Yes, cancel anytime with zero hassle!</strong> Our policy is simple:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Cancel with one click - no phone calls required</li>
          <li>Full refund within 30 days, no questions asked</li>
          <li>Keep everything you've built</li>
          <li>Export your data anytime</li>
        </ul>
        <p className="text-green-600 font-medium">
          💚 We're confident you'll love FeNAgO, but your peace of mind matters most.
        </p>
      </div>
    ),
  },
  {
    question: "Do I own everything I build with FeNAgO?",
    category: 'technical',
    answer: (
      <div className="space-y-3 leading-relaxed">
        <p>
          <strong>100% yes - you own everything!</strong> Here's what that means:
        </p>
        <ul className="list-disc list-inside space-y-1 ml-4">
          <li>Full ownership of your code and data</li>
          <li>Export everything at any time</li>
          <li>No vendor lock-in</li>
          <li>Keep all revenue you generate</li>
          <li>Your intellectual property stays yours</li>
        </ul>
        <p className="text-purple-600 font-medium">
          🏆 Your success is your success - we just provide the tools!
        </p>
      </div>
    ),
  }
];

const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'pricing': return '💰';
      case 'getting-started': return '🚀';
      case 'technical': return '🔧';
      case 'support': return '🤝';
      default: return '❓';
    }
  };

  return (
    <li className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        className="relative flex gap-4 items-center w-full p-6 text-left"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <div className="flex-shrink-0 text-2xl">
          {getCategoryIcon(item.category || '')}
        </div>
        <span
          className={`flex-1 text-lg font-semibold ${
            isOpen ? "text-primary" : "text-gray-900"
          }`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-5 h-5 ml-auto fill-current transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className="transform origin-center"
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className="transform origin-center rotate-90"
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">
          {item?.answer}
        </div>
      </div>
    </li>
  );
};

const FAQB2C = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white" id="faq">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-blue-600">❓</span>
            Got questions? We've got answers
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Know
            </span>
          </h2>
          <p className="text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
            We've answered the most common questions from creators like you. 
            Still have questions? We're here to help!
          </p>
        </div>

        {/* FAQ List */}
        <ul className="space-y-4 mb-16">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our friendly team is here to help you succeed. Get answers in minutes, not days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="#"
                className="btn btn-gradient btn-lg px-8 py-4 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
              >
                💬 Chat With Us Now
              </a>
              <div className="text-sm text-gray-500">
                Average response: Under 2 hours
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQB2C;
