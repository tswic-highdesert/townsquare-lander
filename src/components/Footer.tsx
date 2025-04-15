import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src="https://framerusercontent.com/images/zFWCrabus5NcdYqhFjJQFcpoOBA.png" alt="LocalFirst Logo" className="h-6" />
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <a href="#signup" className="text-gray-300 hover:text-white text-sm">Contact Us</a>
          </nav>
          <p className="text-sm text-gray-400">&copy; {currentYear} River Valley Town Square. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
