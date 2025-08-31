import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Project Showcase. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
