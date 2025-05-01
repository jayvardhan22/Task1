import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 relative">
      <div className="absolute top-4 right-4 grid grid-cols-3 gap-2">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-black rounded-full" />
        ))}
      </div>

      <div className="absolute bottom-4 left-4 grid grid-cols-4 gap-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-black rounded-full" />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-4">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 transition-colors">
              <FaFacebook size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-600 transition-colors">
              <FaTwitter size={24} />
            </a>
          </div>
          
          <p className="text-gray-600 text-center">
            Cristian David Muñoz Camayo @tianmunooz © 2022
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
