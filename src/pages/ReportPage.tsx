import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { PrivacyPolicy } from '../components/PrivacyPolicy';

const ReportPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    // Check the scroll position on initial render
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      await fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      });
      
      navigate('/thanks');
    } catch (error) {
      console.error('Form submission error:', error);
      navigate('/thanks');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center py-16">
        <div className="w-full max-w-2xl px-4">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Almost there! Just need two things:
            </h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <p className="text-lg text-gray-700">Your email (for the detailed report)</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🌐</span>
                <p className="text-lg text-gray-700">Your website URL</p>
              </div>
            </div>

            <form action="https://try.ishot.jp/r/ZnRRQF5Z3bQT/store" method="post" onSubmit={handleFormSubmit}>
              <div className="space-y-6">
                <div>
                  <input 
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-700 text-lg" 
                    required 
                    id="mail" 
                    type="email" 
                    name="mail" 
                    autoComplete="email"
                    placeholder='example@email.com'
                  />
                </div>
                
                <div>
                  <input 
                    className="w-full px-5 py-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors text-gray-700 text-lg" 
                    required 
                    id="free25" 
                    type="text" 
                    name="free25"
                    placeholder="https://example.com"
                  />
                </div>
                
                <button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Analyzing...' : ' Analyze Your Website '}
                </button>
              </div>
            </form>
            
            <p className="text-center mt-8 text-lg text-gray-600">
              ⚡ Analysis starts immediately. Get a Free Report for your website improvement.
            </p>
          </div>
          
          <div className="text-center mt-6">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="text-gray-500 hover:text-gray-700 text-sm underline transition-colors"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
      
      
      {showFooter && <Footer />}
      
      {/* Privacy Policy Modal */}
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </>
  );
};

export default ReportPage;