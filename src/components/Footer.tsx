import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/report');
  };

  return (
    <footer className="bg-gray-800 py-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white text-lg">
            Stop losing customers to poor website performance
          </p>
          <button
            onClick={handleButtonClick}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg"
          >
            Analyze Now
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;