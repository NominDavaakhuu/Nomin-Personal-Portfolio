'use client';

import { useEffect, useState } from 'react';
import { ChevronUpIcon } from '@radix-ui/react-icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-2 rounded-full bg-background text-white shadow-lg transition-opacity duration-300 hover:bg-accent ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ChevronUpIcon className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop;
