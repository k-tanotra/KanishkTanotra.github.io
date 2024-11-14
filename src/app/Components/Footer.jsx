import React from 'react';

const Footer = () => {
  const tools = [
    '/K.png',
    '/K.png',
    '/K.png',
  ];

  return (
    <footer className="bg-black bg-opacity-30 w-full text-white py-6">
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src="/K.png" alt="Twitter" className="w-6 h-6" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/K.png" alt="Facebook" className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src="/K.png" alt="LinkedIn" className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center mb-4">
          <p>&copy; 2024</p>
        </div>

        {/* Built By, Tools, and Source Code */}
        <div className="flex flex-col items-center text-center">
          <p className="mb-2">
            Built by <strong>Your Name</strong>
          </p>
          <div className="flex justify-center space-x-4 mb-2">
            {tools.map((tool, index) => (
              <img key={index} src={tool} alt={`Tool ${index}`} className="w-6 h-6" />
            ))}
          </div>
          <a
            href="https://github.com/username/repository"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            Source Code
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
