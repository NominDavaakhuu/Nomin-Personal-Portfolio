import React, { useState, useEffect } from 'react';

const SideNavbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  const navigationLinks = [
    { href: '#skills', label: 'Skills' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: '-20% 0px -20% 0px' // Only trigger when section is well within viewport
      }
    );

    // Observe all sections
    navigationLinks.forEach((link) => {
      const element = document.getElementById(link.href.substring(1));
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-slate-900/20 backdrop-blur-md rounded-full border border-blue-800/30 shadow-lg"></div>
      
      {/* Navigation dots */}
      <div className="relative flex flex-col items-center space-y-6 px-4 py-6">
        {navigationLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <div key={link.href} className="relative group">
              <button
                onClick={() => scrollToSection(link.href)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-accent shadow-lg shadow-accent scale-125' 
                    : 'bg-blue-200/30 hover:bg-blue-300/50 hover:scale-110'
                }`}
                aria-label={`Go to ${link.label} section`}
              />
              
              {/* Tooltip */}
              <div className={`absolute right-6 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-md bg-slate-800/90 backdrop-blur-sm border border-blue-800/30 transition-all duration-200 ${
                isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
              }`}>
                <span className="text-sm text-blue-200 whitespace-nowrap font-medium">
                  {link.label}
                </span>
                {/* Arrow */}
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-slate-800 border-l border-b border-blue-800/30 rotate-45"></div>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default SideNavbar;