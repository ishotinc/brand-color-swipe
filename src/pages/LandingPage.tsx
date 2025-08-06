import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PrivacyPolicy } from '../components/PrivacyPolicy';

interface FormData {
  mail: string;
  free19: string;
  free20: string;
  free21: string;
}

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    mail: '',
    free19: '',
    free20: 'Takes too much time away from core business. ',
    free21: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('mail', formData.mail);
      formDataToSend.append('free19', formData.free19);
      formDataToSend.append('free20', formData.free20);
      formDataToSend.append('free21', formData.free21);

      const response = await fetch('https://try.ishot.jp/r/JP59uMuhza8A/store', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
    
    // Store form data in session storage for potential use in results
    sessionStorage.setItem('formData', JSON.stringify(formData));
    
    // Navigate to swipe page
    navigate('/swipe');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Sample palettes for display
  const samplePalettes = [
    ['#C4A484', '#A8C8EC', '#2E3A87', '#1A1A1A', '#FF6B35', '#FFD23F', '#F7E7CE', '#FFB3BA', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C'],
    ['#2E3A87', '#FFD23F', '#FF69B4', '#32CD32', '#FF4500', '#8A2BE2', '#00CED1', '#FF1493', '#7FFF00', '#DC143C', '#4169E1', '#FF8C00'],
    ['#B8E6B8', '#FFB3BA', '#A8A8A8', '#DDA0DD', '#F0E68C', '#87CEEB', '#F5DEB3', '#98FB98', '#FFE4E1', '#E0E0E0', '#FAFAD2', '#D3D3D3'],
    ['#9B59B6', '#3498DB', '#1ABC9C', '#F39C12', '#E74C3C', '#2ECC71', '#34495E', '#95A5A6', '#F1C40F', '#E67E22', '#16A085', '#27AE60'],
    ['#FF69B4', '#87CEEB', '#98FB98', '#DDA0DD', '#F0E68C', '#FFB3BA', '#B8E6B8', '#E0E0E0', '#FAFAD2', '#D3D3D3', '#F5DEB3', '#FFE4E1'],
    ['#2C3E50', '#E74C3C', '#F39C12', '#27AE60', '#3498DB', '#9B59B6', '#1ABC9C', '#34495E', '#F1C40F', '#E67E22', '#2ECC71', '#8E44AD'],
    ['#FF6B35', '#F7931E', '#FFD23F', '#06FFA5', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98FB98', '#87CEEB', '#F0E68C'],
    ['#667EEA', '#764BA2', '#F093FB', '#43E97B', '#38F9D7', '#5EFCE8', '#4FACFE', '#00F2FE', '#FA709A', '#FEE140', '#A8EDEA', '#FED6E3']
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div className="space-y-8">
            <motion.h1
              className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              EVERY SMALL BUSINESS OWNER HITS THIS WALL:
            </motion.h1>

            <motion.p
              className="text-2xl font-semibold text-gray-700 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              "What colors should my business use?"
            </motion.p>

            <motion.div
              className="space-y-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <p className="text-lg text-gray-600 mb-4">And then you spiral:</p>
              <div className="space-y-2 text-gray-600">
                <p>→ Google "psychology of colors" for 3 hours</p>
                <p>→ Ask 10 people, get 10 different answers</p>
                <p>→ Pick something random just to move forward</p>
                <p>→ Regret it every time you see your materials</p>
              </div>
            </motion.div>

            <motion.p
              className="text-lg text-gray-600 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Meanwhile, your business suffers because you look unprofessional.
            </motion.p>

            <motion.div
              className="text-2xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="mb-2">FORGET THE OVERTHINKING.</p>
              <p>TRUST YOUR INSTINCTS.</p>
            </motion.div>

            <motion.div
              className="text-lg text-gray-600 mb-8 space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p>Just swipe through colors like you swipe through everything else.</p>
              <div className="flex justify-start space-x-8 text-base">
                <span>Like = Good for your business</span>
                <span>Dislike = Not your vibe</span>
              </div>
              <p>10 swipes later, you have professional brand colors.</p>
              <p>No analysis paralysis. No second-guessing. No regrets.</p>
            </motion.div>

            <motion.p
              className="text-2xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              Stop the madness. Start swiping.
            </motion.p>

            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get Your Perfect Brand Colors</h3>
                
                <div>
                  <label htmlFor="mail" className="block text-sm font-bold text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="mail"
                    name="mail"
                    required
                    value={formData.mail}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoComplete="email"
                  />
                </div>

                <div>
                  <label htmlFor="free19" className="block text-sm font-bold text-gray-700 mb-1">
                    What do you do for work? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="free19"
                    name="free19"
                    required
                    value={formData.free19}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="free20" className="block text-sm font-bold text-gray-700 mb-1">
                    What's your biggest challenge with brand/design decisions?
                  </label>
                  <select
                    id="free20"
                    name="free20"
                    value={formData.free20}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="Takes too much time away from core business. ">Takes too much time away from core business.</option>
                    <option value="Hard to articulate what I want to designers">Hard to articulate what I want to designers</option>
                    <option value="Difficult to make confident decisions without expertise">Difficult to make confident decisions without expertise</option>
                    <option value="Team members have conflicting opinions">Team members have conflicting opinions</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="free21" className="block text-sm font-bold text-gray-700 mb-1">
                    What brought you to try this brand color service?
                  </label>
                  <input
                    type="text"
                    id="free21"
                    name="free21"
                    value={formData.free21}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'End My Color Confusion - Start Swiping Now'}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Right Side - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {/* Main Laptop/Screen */}
            <div className="relative bg-gray-900 rounded-2xl p-4 shadow-2xl">
              <div className="bg-white rounded-lg p-6 min-h-[300px] relative overflow-hidden">
                {/* Sample palette in the "screen" */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {['#8B7EC8', '#7EC8A3', '#F4E4BC', '#2C2C2C'].map((color, index) => (
                    <div
                      key={index}
                      className="h-16 rounded-lg"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                {/* Floating UI elements */}
                <div className="absolute bottom-4 left-4 bg-gray-100 rounded-lg px-3 py-1 text-xs text-gray-600">
                  MAKE A PALETTE
                </div>
              </div>
            </div>

            {/* Floating Color Palette Grid */}
            <motion.div
              className="absolute -right-8 -top-8 bg-white rounded-2xl shadow-xl p-4 border"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 1, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="grid grid-cols-12 gap-1">
                {samplePalettes.flat().slice(0, 96).map((color, index) => (
                  <motion.div
                    key={index}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: color }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.01, duration: 0.3 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-center">
            <button
              onClick={() => setIsPrivacyOpen(true)}
              className="text-gray-600 hover:text-gray-800 text-sm underline transition-colors"
            >
              Privacy Policy
            </button>
            
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyPolicy isOpen={isPrivacyOpen} onClose={() => setIsPrivacyOpen(false)} />
    </div>
  );
};

export default LandingPage;