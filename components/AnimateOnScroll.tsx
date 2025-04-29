'use client';

import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '../lib/useIntersectionObserver';
import { cn } from '../lib/utils';

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'fade-left' | 'fade-right';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

const AnimateOnScroll = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
  triggerOnce = true,
}: AnimateOnScrollProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8';
      case 'fade-in':
        return isIntersecting 
          ? 'opacity-100' 
          : 'opacity-0';
      case 'fade-left':
        return isIntersecting 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8';
      case 'fade-right':
        return isIntersecting 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 -translate-x-8';
      default:
        return isIntersecting 
          ? 'opacity-100' 
          : 'opacity-0';
    }
  };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        getAnimationClass(),
        'transition-all duration-700 ease-out',
        delay > 0 && `delay-[${delay}ms]`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
