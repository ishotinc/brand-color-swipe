import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorPalette from '../components/ColorPalette';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<boolean[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Submit the form data to the external URL
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // This prevents CORS errors but we won't get a response
      });
      
      // Navigate to thanks page after submission
      navigate('/thanks');
    } catch (error) {
      console.error('Form submission error:', error);
      // Navigate to thanks page anyway
      navigate('/thanks');
    }
  };

  if (preferences.length === 0) {
    return null; // Loading state while checking preferences
  }

  return (
    <div className="min-h-screen bg-white py-8">
      <ColorPalette preferences={preferences} />
      
      {/* Website URL Form */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-3">
          Get a free analysis for your website
          </h3>
          
          <p className="text-gray-600 text-center mb-6">
            Enter an URL address and get a Free Website Analysis!
          </p>
          
          <form action="https://try.ishot.jp/r/ZnRRQF5Z3bQT/store" method="post" onSubmit={handleFormSubmit}>
            <div className="relative">
              <input 
                className="w-full px-4 py-3 pr-24 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-400 transition-colors text-gray-700" 
                required 
                id="mail" 
                type="url" 
                name="mail" 
                placeholder="Example.com"
                autoComplete="url"
              />
              <button 
                className="absolute right-1 top-1 bottom-1 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Audit'}
              </button>
            </div>
          </form>
        </div>
      </div>
      
      
    </div>
  );
};

export default ResultsPage;