import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-t from-slate-900 via-blue-900/20 to-transparent backdrop-blur-sm border-t border-blue-800/30">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 opacity-50"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center justify-center">
          {/* Brand Section */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Nomin Davaakhuu
            </h3>
            <p className="text-blue-200/70 text-sm leading-relaxed py-4">
              Crafting digital experiences with passion and precision
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-blue-800/30">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200/50 text-sm">
              © {currentYear} Nomin Davaakhuu. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="group flex items-center space-x-2 text-blue-200/70 hover:text-blue-300 transition-colors duration-200 text-sm"
              >
                <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;