import React from 'react';
import { Building2 } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary-dark text-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Building2 size={24} className="text-primary-light" />
            <span className="text-lg font-semibold text-white">LocalFirst</span>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-300 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-white text-sm">Contact Us</a>
          </nav>
          <p className="text-sm text-gray-400">&copy; {currentYear} LocalFirst. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
