import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 shadow-md w-full">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Hack Snack 
          </div>
          <div>
            {/* Future navigation links can go here */}
            <a href="#" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
