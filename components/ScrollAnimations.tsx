"use client";

import { useEffect, useRef, useState, ReactNode } from 'react';

// Custom hook for intersection observer
export const useIntersectionObserver = (options = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [hasAnimated, options]);

  return [elementRef, isVisible] as const;
};

interface AnimationProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

interface ContainerProps {
  children: ReactNode;
  staggerDelay?: number;
}

interface ElementProps {
  children: ReactNode;
  className?: string;
}

// Animated wrapper components
export const FadeInUp = ({ children, delay = 0, className = '' }: AnimationProps) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`fade-in-up ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const FadeInLeft = ({ children, delay = 0, className = '' }: AnimationProps) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`fade-in-left ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const FadeInRight = ({ children, delay = 0, className = '' }: AnimationProps) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`fade-in-right ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export const ScaleIn = ({ children, delay = 0, className = '' }: AnimationProps) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      className={`scale-in ${isVisible ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Staggered animation container
export const StaggerContainer = ({ children, staggerDelay = 100 }: ContainerProps) => {
  return (
    <div>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <div key={index} style={{ animationDelay: `${index * staggerDelay}ms` }}>
              {child}
            </div>
          ))
        : children}
    </div>
  );
};

// Floating animation component
export const FloatingElement = ({ children, className = '' }: ElementProps) => {
  return (
    <div className={`animate-bounce-gentle ${className}`}>
      {children}
    </div>
  );
};

// Pulse animation component
export const PulseElement = ({ children, className = '' }: ElementProps) => {
  return (
    <div className={`animate-pulse-slow ${className}`}>
      {children}
    </div>
  );
};

// Main scroll animations component
const ScrollAnimations = (): null => {
  useEffect(() => {
    // Add scroll-triggered animations to existing elements
    const addScrollAnimations = (): void => {
      // Only add hover effects to buttons, not scroll animations
      const buttons = document.querySelectorAll('.btn');
      buttons.forEach((button) => {
        button.classList.add('hover-lift');
      });

      // Add gradient animation to gradient text only
      const gradientTexts = document.querySelectorAll('.bg-gradient-to-r.bg-clip-text');
      gradientTexts.forEach((text) => {
        text.classList.add('animate-gradient');
      });
    };

    // Run after a short delay to ensure DOM is ready
    setTimeout(addScrollAnimations, 100);

    // Simplified intersection observer - only for manually added animation classes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    // Only observe elements that explicitly have animation classes (not auto-added)
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null; // This component only adds functionality, no visual output
};

export default ScrollAnimations;
