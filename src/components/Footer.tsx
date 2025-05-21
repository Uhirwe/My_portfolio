
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-playfair font-bold">
              UHIRWE Esther Hope<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-400 font-poppins text-sm mt-1">
              Software Engineer & UI/UX Designer
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 font-poppins text-sm">
              &copy; {currentYear} All Rights Reserved
            </p>
            <p className="text-gray-500 font-poppins text-xs mt-1">
              Designed with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
