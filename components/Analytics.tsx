"use client";

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// Analytics configuration
const ANALYTICS_CONFIG = {
  // Google Analytics 4
  GA4_ID: process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX',
  // Microsoft Clarity
  CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || 'XXXXXXXXXX',
  // Hotjar
  HOTJAR_ID: process.env.NEXT_PUBLIC_HOTJAR_ID || 'XXXXXXX',
  // Facebook Pixel
  FB_PIXEL_ID: process.env.NEXT_PUBLIC_FB_PIXEL_ID || 'XXXXXXXXXXXXXXX',
};

// Custom event tracking
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, {
      event_category: 'engagement',
      event_label: parameters?.label || '',
      value: parameters?.value || 0,
      ...parameters,
    });
  }

  // Facebook Pixel
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, parameters);
  }

  // Console log for development
  if (process.env.NODE_ENV === 'development') {
    console.log('Analytics Event:', eventName, parameters);
  }
};

// Conversion tracking
export const trackConversion = (conversionType: string, value?: number, currency = 'USD') => {
  const conversionData = {
    conversion_type: conversionType,
    value: value || 0,
    currency,
    timestamp: new Date().toISOString(),
  };

  // Track as custom event
  trackEvent('conversion', conversionData);

  // Google Analytics Enhanced Ecommerce
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'purchase', {
      transaction_id: `conv_${Date.now()}`,
      value: value || 0,
      currency,
      items: [{
        item_id: conversionType,
        item_name: conversionType,
        category: 'conversion',
        quantity: 1,
        price: value || 0,
      }],
    });
  }

  // Facebook Pixel conversion
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', 'Purchase', {
      value: value || 0,
      currency,
      content_type: conversionType,
    });
  }
};

// CTA click tracking
export const trackCTAClick = (ctaLocation: string, ctaText: string) => {
  trackEvent('cta_click', {
    cta_location: ctaLocation,
    cta_text: ctaText,
    page_url: window.location.href,
  });
};

// Scroll depth tracking
export const useScrollTracking = () => {
  useEffect(() => {
    const scrollDepths = [25, 50, 75, 90, 100];
    const trackedDepths = new Set<number>();

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      scrollDepths.forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth);
          trackEvent('scroll_depth', {
            depth_percentage: depth,
            page_url: window.location.href,
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Time on page tracking
export const useTimeTracking = () => {
  useEffect(() => {
    const startTime = Date.now();
    const timeThresholds = [30, 60, 120, 300]; // seconds
    const trackedTimes = new Set<number>();

    const trackTimeSpent = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      
      timeThresholds.forEach(threshold => {
        if (timeSpent >= threshold && !trackedTimes.has(threshold)) {
          trackedTimes.add(threshold);
          trackEvent('time_on_page', {
            time_seconds: threshold,
            page_url: window.location.href,
          });
        }
      });
    };

    const interval = setInterval(trackTimeSpent, 10000); // Check every 10 seconds

    // Track when user leaves
    const handleBeforeUnload = () => {
      const finalTime = Math.round((Date.now() - startTime) / 1000);
      trackEvent('page_exit', {
        time_spent: finalTime,
        page_url: window.location.href,
      });
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      clearInterval(interval);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
};

// Form interaction tracking
export const trackFormInteraction = (formName: string, fieldName: string, action: 'focus' | 'blur' | 'submit') => {
  trackEvent('form_interaction', {
    form_name: formName,
    field_name: fieldName,
    action,
    page_url: window.location.href,
  });
};

// Main Analytics component
const Analytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Track page views
  useEffect(() => {
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    // Google Analytics 4
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', ANALYTICS_CONFIG.GA4_ID, {
        page_path: url,
      });
    }

    // Facebook Pixel
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'PageView');
    }

    // Custom page view tracking
    trackEvent('page_view', {
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  // Initialize tracking hooks
  useScrollTracking();
  useTimeTracking();

  return (
    <>
      {/* Google Analytics 4 */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.GA4_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_CONFIG.GA4_ID}', {
              page_path: window.location.pathname,
              custom_map: {
                'custom_parameter_1': 'conversion_type',
                'custom_parameter_2': 'cta_location'
              }
            });
          `,
        }}
      />

      {/* Microsoft Clarity */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${ANALYTICS_CONFIG.CLARITY_ID}");
          `,
        }}
      />

      {/* Hotjar */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:${ANALYTICS_CONFIG.HOTJAR_ID},hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `,
        }}
      />

      {/* Facebook Pixel */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${ANALYTICS_CONFIG.FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />

      {/* Custom Analytics Dashboard (Development) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black text-white p-4 rounded-lg text-xs z-50 max-w-xs">
          <div className="font-bold mb-2">Analytics Debug</div>
          <div>Page: {pathname}</div>
          <div>Params: {searchParams?.toString() || 'none'}</div>
          <div className="mt-2 text-green-400">
            ✓ Tracking Active
          </div>
        </div>
      )}
    </>
  );
};

export default Analytics;
