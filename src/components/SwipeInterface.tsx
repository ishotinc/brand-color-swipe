import React, { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Heart, X } from 'lucide-react';

interface SwipeInterfaceProps {
  onComplete: (preferences: boolean[]) => void;
}

const colorCards = [
  { id: 1, gradient: 'from-pink-400 via-red-500 to-yellow-500', name: 'Sunset Vibes' },
  { id: 2, gradient: 'from-purple-400 via-pink-500 to-red-500', name: 'Berry Burst' },
  { id: 3, gradient: 'from-blue-400 via-purple-500 to-pink-500', name: 'Ocean Dreams' },
  { id: 4, gradient: 'from-green-400 via-blue-500 to-purple-500', name: 'Aurora Lights' },
  { id: 5, gradient: 'from-yellow-400 via-orange-500 to-red-500', name: 'Tropical Fire' },
  { id: 6, gradient: 'from-indigo-400 via-purple-500 to-pink-500', name: 'Cosmic Energy' },
  { id: 7, gradient: 'from-teal-400 via-cyan-500 to-blue-500', name: 'Deep Ocean' },
  { id: 8, gradient: 'from-rose-400 via-pink-500 to-purple-500', name: 'Flower Power' },
  { id: 9, gradient: 'from-lime-400 via-green-500 to-emerald-500', name: 'Forest Fresh' },
  { id: 10, gradient: 'from-amber-400 via-orange-500 to-red-500', name: 'Golden Hour' },
];

export const SwipeInterface: React.FC<SwipeInterfaceProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preferences, setPreferences] = useState<boolean[]>([]);

  const handleSwipe = (direction: 'left' | 'right') => {
    const liked = direction === 'right';
    const newPreferences = [...preferences, liked];
    setPreferences(newPreferences);

    if (currentIndex + 1 >= colorCards.length) {
      onComplete(newPreferences);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDragEnd = (event: any, info: PanInfo, direction?: 'left' | 'right') => {
    const threshold = 100;
    if (direction) {
      handleSwipe(direction);
    } else if (info.offset.x > threshold) {
      handleSwipe('right');
    } else if (info.offset.x < -threshold) {
      handleSwipe('left');
    }
  };

  const progress = ((currentIndex + 1) / colorCards.length) * 100;

  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);

  const handleSwipeWithDirection = (direction: 'left' | 'right') => {
    setExitDirection(direction);
    setTimeout(() => {
      handleSwipe(direction);
      setExitDirection(null);
    }, 100);
  };

  return (
    <div className="w-full max-w-sm mx-auto px-4">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            {currentIndex + 1} of {colorCards.length}
          </span>
          <span className="text-sm font-medium text-gray-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Card Stack */}
      <div className="relative h-96 mb-8">
        <AnimatePresence mode="wait">
          {currentIndex < colorCards.length && (
            <motion.div
              key={colorCards[currentIndex].id}
              className={`absolute inset-0 bg-gradient-to-br ${colorCards[currentIndex].gradient} rounded-3xl shadow-2xl cursor-grab active:cursor-grabbing`}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              initial={{ scale: 0.8, opacity: 0, rotateZ: -10 }}
              animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
              exit={{ 
                scale: 0.8, 
                opacity: 0,
                x: exitDirection === 'right' ? 300 : exitDirection === 'left' ? -300 : (Math.random() > 0.5 ? 300 : -300),
                rotateZ: exitDirection === 'right' ? 30 : exitDirection === 'left' ? -30 : (Math.random() > 0.5 ? 30 : -30)
              }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              whileDrag={{ 
                rotateZ: 15,
                scale: 1.1 
              }}
            >
              <div className="h-full flex items-center justify-center p-8">
                <div className="text-center">
                  <motion.div
                    className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {colorCards[currentIndex].name}
                  </h3>
                  <p className="text-white/80 text-sm">
                    Swipe right if you love it!
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next card preview */}
        {currentIndex + 1 < colorCards.length && (
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${colorCards[currentIndex + 1].gradient} rounded-3xl shadow-xl -z-10`}
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: 0.95, opacity: 0.8 }}
            style={{ transform: 'translateY(20px)' }}
          />
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-8">
        <motion.button
          className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-red-500 border-2 border-red-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipeWithDirection('left')}
        >
          <X size={24} />
        </motion.button>
        <motion.button
          className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-green-500 border-2 border-green-100"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleSwipeWithDirection('right')}
        >
          <Heart size={24} />
        </motion.button>
      </div>

      <p className="text-center text-gray-600 mt-4 text-sm">
        Swipe right to like, left to pass
      </p>
    </div>
  );
};