import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SwipeInterface from '../components/SwipeInterface';

const SwipePage: React.FC = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState<boolean[]>([]);
  useEffect(() => {
    // ページがマウントされた時に実行
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'page_view',
      'page_path': window.location.pathname
    });
  }, []); // 空の依存配列で1回だけ実行

  const handleSwipeComplete = (prefs: boolean[]) => {
    setPreferences(prefs);
    // Store preferences in session storage
    sessionStorage.setItem('colorPreferences', JSON.stringify(prefs));
    // Navigate to analyzing page
    navigate('/analyzing');
  };

  return (
    <div className="min-h-screen bg-white py-8 flex items-center justify-center">
      <div className="w-full">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Swipe Your Way to Perfect Colors! 🎨
        </motion.h2>
        <SwipeInterface onComplete={handleSwipeComplete} />
      </div>
    </div>
  );
};

export default SwipePage;