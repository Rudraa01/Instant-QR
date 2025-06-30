import React from 'react';

const Header = () => {
  return (
    <header className="relative z-10 pt-4 pb-2">
      <div className="container mx-auto px-4 text-center">
        <div className="floating-element">
          {/* Logo and Title */}
          <div className="flex items-center justify-center mb-2">
            <img 
              src="/logo.jpeg" 
              alt="Instant QR Logo" 
              className="h-12 w-12 md:h-14 md:w-14 object-contain mr-3 rounded-xl shadow-lg"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient tracking-tight">
              Instant QR
            </h1>
          </div>
          <p className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Generate beautiful QR codes instantly with custom logos
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-16 h-16 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-20 floating-element"></div>
        <div className="absolute top-8 right-8 w-12 h-12 bg-gradient-to-br from-blue-300 to-purple-300 rounded-full opacity-20 floating-element" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-20 left-1/4 w-8 h-8 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full opacity-20 floating-element" style={{ animationDelay: '4s' }}></div>
      </div>
    </header>
  );
};

export default Header;