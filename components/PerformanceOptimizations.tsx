"use client";

import { useEffect } from 'react';

// Performance monitoring and optimization
const PerformanceOptimizations = (): null => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = (): void => {
      // Preload hero image
      const heroImage = new Image();
      heroImage.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop";
      
      // Preload other critical images
      const criticalImages = [
        "https://images.unsplash.com/photo-1553028826-f4804a6dfd3f?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
      ];
      
      criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };

    // Optimize images with intersection observer for lazy loading
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      
      if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              img.src = img.dataset.src || '';
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });

        images.forEach(img => imageObserver.observe(img));
      }
    };

    // Optimize fonts
    const optimizeFonts = () => {
      // Add font-display: swap to improve loading performance
      const style = document.createElement('style');
      style.textContent = `
        @font-face {
          font-family: 'Inter';
          font-display: swap;
        }
      `;
      document.head.appendChild(style);
    };

    // Reduce layout shift
    const reduceLayoutShift = () => {
      // Add aspect ratio containers for images
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.style.aspectRatio && img.width && img.height) {
          img.style.aspectRatio = `${img.width} / ${img.height}`;
        }
      });
    };

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Defer non-critical scripts
      const scripts = document.querySelectorAll('script[src]');
      scripts.forEach(script => {
        if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
          script.setAttribute('defer', '');
        }
      });
    };

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      }
    };

    // Performance monitoring
    const monitorPerformance = () => {
      // Monitor Core Web Vitals
      if ('web-vitals' in window || typeof window !== 'undefined') {
        // LCP (Largest Contentful Paint)
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          const lastEntry = entries[entries.length - 1];
          console.log('LCP:', lastEntry.startTime);
        }).observe({ entryTypes: ['largest-contentful-paint'] });

        // FID (First Input Delay) - measured on first interaction
        new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach(entry => {
            const fidEntry = entry as any; // Type assertion for FID entry
            console.log('FID:', fidEntry.processingStart - fidEntry.startTime);
          });
        }).observe({ entryTypes: ['first-input'] });

        // CLS (Cumulative Layout Shift)
        let clsValue = 0;
        new PerformanceObserver((entryList) => {
          for (const entry of entryList.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value;
            }
          }
          console.log('CLS:', clsValue);
        }).observe({ entryTypes: ['layout-shift'] });
      }
    };

    // Resource hints
    const addResourceHints = () => {
      const head = document.head;
      
      // DNS prefetch for external domains
      const dnsPrefetch = [
        'https://images.unsplash.com',
        'https://fonts.googleapis.com',
        'https://www.googletagmanager.com'
      ];
      
      dnsPrefetch.forEach(domain => {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        head.appendChild(link);
      });

      // Preconnect to critical origins
      const preconnect = [
        'https://fonts.gstatic.com'
      ];
      
      preconnect.forEach(origin => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = origin;
        link.crossOrigin = 'anonymous';
        head.appendChild(link);
      });
    };

    // Execute optimizations
    preloadCriticalResources();
    optimizeImages();
    optimizeFonts();
    reduceLayoutShift();
    optimizeThirdPartyScripts();
    registerServiceWorker();
    monitorPerformance();
    addResourceHints();

    // Cleanup function
    return () => {
      // Cleanup observers if needed
    };
  }, []);

  return null; // This component only adds functionality, no visual output
};

export default PerformanceOptimizations;
