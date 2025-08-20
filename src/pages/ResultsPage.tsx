import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ColorPalette from '../components/ColorPalette';
import Footer from '../components/Footer';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<boolean[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Get preferences from session storage
    const storedPreferences = sessionStorage.getItem('colorPreferences');
    
    if (!storedPreferences) {
      // Redirect to home if no preferences
      navigate('/');
      return;
    }

    setPreferences(JSON.parse(storedPreferences));
    
    // Add scroll listener for footer visibility
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show footer when user has scrolled 30% of the page or more
      const scrollPercentage = (scrollY + windowHeight) / documentHeight;
      setShowFooter(scrollPercentage > 0.3);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
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
    <>
    <div className="min-h-screen bg-white py-8">
      <ColorPalette preferences={preferences} />
      
      {/* Conversion CTA Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            You just discovered your perfect brand colors.
          </h2>
          
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">
            Now let's see how much money they could make you.
          </h3>
          
          <div className="space-y-4 mb-10 text-left max-w-xl mx-auto">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              You'll get:
            </p>
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-xl">✅</span>
              <p className="text-lg text-gray-700">
                Your website's color conversion score
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-xl">✅</span>
              <p className="text-lg text-gray-700">
                Exactly which colors are hurting your sales
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-green-500 text-xl">✅</span>
              <p className="text-lg text-gray-700">
                3 quick fixes that could improve your website
              </p>
            </div>
          </div>
          
          <p className="text-xl font-semibold text-gray-800 mb-8">
            Today it's completely free.
          </p>
          
          <button
            onClick={() => navigate('/report')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-12 rounded-full text-2xl shadow-lg transform hover:scale-105 transition-all duration-300 mb-6"
          >
            🚀 Get My Free Analysis
          </button>
          
          <p className="text-lg text-gray-600">
            ⏰ Takes 30 seconds. Results in your inbox soon.
          </p>
          
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ⚡ One Last Thing...
            </h3>
            <div className="text-lg text-gray-700 space-y-3 max-w-3xl mx-auto">
              <p>
                If this color analysis felt "spot on" for your brand, that's your intuition telling you something important.
              </p>
              <p className="font-semibold">
                You're ready to stop guessing and start converting.
              </p>
              <p>
                Your colors are perfect. Your website should be too.
              </p>
              <p className="text-xl font-bold text-purple-600">
                Time to turn your beautiful brand into a profitable business.
              </p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    {/* Scroll-triggered Footer */}
    <div className={`fixed bottom-0 left-0 right-0 transform transition-transform duration-500 ease-in-out z-50 ${
      showFooter ? 'translate-y-0' : 'translate-y-full'
    }`}>
      <Footer />
    </div>
    </>
  );
};

export default ResultsPage;