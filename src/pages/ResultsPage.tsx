import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorPalette from '../components/ColorPalette';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<boolean[]>([]);

  useEffect(() => {
    // Get preferences from session storage
    const storedPreferences = sessionStorage.getItem('colorPreferences');
    
    if (!storedPreferences) {
      // Redirect to home if no preferences
      navigate('/');
      return;
    }

    setPreferences(JSON.parse(storedPreferences));
  }, [navigate]);

  const handleStartOver = () => {
    // Clear session storage
    sessionStorage.removeItem('colorPreferences');
    sessionStorage.removeItem('formData');
    // Navigate back to home
    navigate('/');
  };

  if (preferences.length === 0) {
    return null; // Loading state while checking preferences
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <ColorPalette preferences={preferences} />
      <div className="text-center pb-8">
        <button
          onClick={handleStartOver}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Generate New Palette
        </button>
      </div>
    </div>
  );
};

export default ResultsPage;