import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AnalyzingPage from '../components/AnalyzingPage';

const AnalyzingPageWrapper: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has preferences
    const preferences = sessionStorage.getItem('colorPreferences');
    if (!preferences) {
      // Redirect to swipe page if no preferences
      navigate('/swipe');
      return;
    }

    // Auto-navigate to results after 3 seconds
    const timer = setTimeout(() => {
      navigate('/results');
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-white">
      <AnalyzingPage />
    </div>
  );
};

export default AnalyzingPageWrapper;