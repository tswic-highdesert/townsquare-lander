import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-surface shadow-subtle sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2 text-primary hover:text-primary-dark transition-colors">
          <img src="https://framerusercontent.com/images/fmElWHBVizJpMd39Y73uCR8buc.png" alt="LocalFirst Logo" className="h-10" />
        </a>
        <div>
          {/* Navigation links could go here if needed */}
          <a href="#signup" className="btn btn-primary hidden sm:inline-flex">
            Get Early Access
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
