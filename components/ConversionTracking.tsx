"use client";

import { trackCTAClick, trackConversion, trackFormInteraction } from './Analytics';
import { ReactNode, MouseEvent, FormEvent, FocusEvent } from 'react';

// Enhanced CTA wrapper with tracking
interface TrackedCTAProps {
  children: ReactNode;
  location: string;
  text: string;
  conversionType?: string;
  conversionValue?: number;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const TrackedCTA = ({ 
  children, 
  location, 
  text, 
  conversionType,
  conversionValue,
  href = "#",
  onClick,
  className = ""
}: TrackedCTAProps) => {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Track CTA click
    trackCTAClick(location, text);
    
    // Track conversion if specified
    if (conversionType) {
      trackConversion(conversionType, conversionValue);
    }
    
    // Call custom onClick if provided
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      data-analytics-cta={location}
      data-analytics-text={text}
    >
      {children}
    </a>
  );
};

// Enhanced form wrapper with tracking
interface TrackedFormProps {
  children: ReactNode;
  formName: string;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  className?: string;
  conversionType?: string;
  conversionValue?: number;
}

export const TrackedForm = ({ 
  children, 
  formName, 
  onSubmit,
  className = "",
  conversionType,
  conversionValue
}: TrackedFormProps) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    // Track form submission
    trackFormInteraction(formName, 'form', 'submit');
    
    // Track conversion if specified
    if (conversionType) {
      trackConversion(conversionType, conversionValue);
    }
    
    // Call custom onSubmit if provided
    if (onSubmit) {
      onSubmit(e);
    }
  };

  const handleFieldInteraction = (e: FocusEvent<HTMLFormElement>) => {
    const target = e.target as unknown as HTMLInputElement | HTMLTextAreaElement;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA')) {
      const fieldName = target.name || target.id || 'unnamed_field';
      const action = e.type === 'focusin' ? 'focus' : 'blur';
      trackFormInteraction(formName, fieldName, action as 'focus' | 'blur');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
      data-analytics-form={formName}
      onFocusCapture={handleFieldInteraction}
      onBlurCapture={handleFieldInteraction}
    >
      {children}
    </form>
  );
};

// Conversion goals configuration
export const CONVERSION_GOALS = {
  HERO_CTA: {
    type: 'hero_signup',
    value: 100,
    description: 'Hero section CTA click'
  },
  PRICING_CTA: {
    type: 'pricing_signup',
    value: 150,
    description: 'Pricing section signup'
  },
  SPECIAL_OFFER: {
    type: 'special_offer_claim',
    value: 200,
    description: 'Special offer claimed'
  },
  EMAIL_SIGNUP: {
    type: 'email_signup',
    value: 50,
    description: 'Email newsletter signup'
  },
  DEMO_REQUEST: {
    type: 'demo_request',
    value: 300,
    description: 'Demo request submitted'
  },
  CONTACT_FORM: {
    type: 'contact_form',
    value: 75,
    description: 'Contact form submitted'
  },
  FAQ_ENGAGEMENT: {
    type: 'faq_engagement',
    value: 25,
    description: 'FAQ section engaged'
  },
  SOCIAL_PROOF_CLICK: {
    type: 'social_proof_click',
    value: 30,
    description: 'Social proof element clicked'
  }
};

// A/B Testing component
interface ABTestProps {
  testName: string;
  variants: {
    name: string;
    weight: number;
    component: ReactNode;
  }[];
}

export const ABTest = ({ testName, variants }: ABTestProps) => {
  // Simple client-side A/B testing
  const getVariant = () => {
    if (typeof window === 'undefined') return variants[0];
    
    // Use localStorage to persist variant for user
    const storageKey = `ab_test_${testName}`;
    let savedVariant = localStorage.getItem(storageKey);
    
    if (!savedVariant) {
      // Calculate weighted random selection
      const totalWeight = variants.reduce((sum, variant) => sum + variant.weight, 0);
      let random = Math.random() * totalWeight;
      
      for (const variant of variants) {
        random -= variant.weight;
        if (random <= 0) {
          savedVariant = variant.name;
          break;
        }
      }
      
      localStorage.setItem(storageKey, savedVariant!);
      
      // Track A/B test assignment
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'ab_test_assignment', {
          test_name: testName,
          variant: savedVariant,
        });
      }
    }
    
    return variants.find(v => v.name === savedVariant) || variants[0];
  };

  const selectedVariant = getVariant();
  
  return (
    <div data-ab-test={testName} data-ab-variant={selectedVariant.name}>
      {selectedVariant.component}
    </div>
  );
};

// Heatmap and user session recording helpers
export const initializeHeatmaps = () => {
  // Additional heatmap configuration
  if (typeof window !== 'undefined') {
    // Hotjar identify user (optional)
    if ((window as any).hj) {
      (window as any).hj('identify', 'USER_ID', {
        // User attributes
        plan: 'free',
        signup_date: new Date().toISOString(),
      });
    }
    
    // Microsoft Clarity custom tags
    if ((window as any).clarity) {
      (window as any).clarity('set', 'page_type', 'landing_page');
      (window as any).clarity('set', 'user_type', 'visitor');
    }
  }
};

// Performance monitoring
export const trackPerformance = () => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        
        if (perfData && (window as any).gtag) {
          (window as any).gtag('event', 'page_performance', {
            page_load_time: Math.round(perfData.loadEventEnd - perfData.fetchStart),
            dom_content_loaded: Math.round(perfData.domContentLoadedEventEnd - perfData.fetchStart),
            first_paint: Math.round(perfData.responseEnd - perfData.fetchStart),
          });
        }
      }, 0);
    });
  }
};

// Error tracking
export const trackError = (error: Error, errorInfo?: any) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'exception', {
      description: error.message,
      fatal: false,
      error_stack: error.stack,
      error_info: JSON.stringify(errorInfo),
    });
  }
  
  // Also log to console in development
  if (process.env.NODE_ENV === 'development') {
    console.error('Tracked Error:', error, errorInfo);
  }
};

// All exports are already declared above with their respective functions
