import React from 'react';
import { motion } from 'framer-motion';

interface Palette {
  id: number;
  name: string;
  description: string;
  personality: string;
  colors: string[];
  primary: string;
  secondary: string;
  accent: string;
}

const palettes: Palette[] = [
  {
    id: 1,
    name: "Vibrant Energy",
    description: "Bold and energetic colors that command attention and inspire action.",
    personality: "You're a trailblazer who isn't afraid to stand out. Your brand radiates confidence and innovation.",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"],
    primary: "#FF6B6B",
    secondary: "#4ECDC4",
    accent: "#45B7D1"
  },
  {
    id: 2,
    name: "Sophisticated Elegance",
    description: "Refined and timeless colors that speak to luxury and premium quality.",
    personality: "You value quality over quantity. Your brand represents sophistication and attention to detail.",
    colors: ["#2C3E50", "#34495E", "#BDC3C7", "#ECF0F1", "#E8B4CB"],
    primary: "#2C3E50",
    secondary: "#34495E",
    accent: "#E8B4CB"
  },
  {
    id: 3,
    name: "Natural Harmony",
    description: "Earth-inspired colors that promote balance, growth, and sustainability.",
    personality: "You're grounded and authentic. Your brand connects people with nature and promotes wellbeing.",
    colors: ["#27AE60", "#2ECC71", "#F39C12", "#E67E22", "#8E44AD"],
    primary: "#27AE60",
    secondary: "#2ECC71",
    accent: "#F39C12"
  },
  {
    id: 4,
    name: "Creative Spark",
    description: "Playful and imaginative colors that inspire creativity and joy.",
    personality: "You're an innovator who thinks outside the box. Your brand sparks imagination and creativity.",
    colors: ["#9B59B6", "#E74C3C", "#F1C40F", "#1ABC9C", "#3498DB"],
    primary: "#9B59B6",
    secondary: "#E74C3C",
    accent: "#F1C40F"
  },
  {
    id: 5,
    name: "Tech Forward",
    description: "Modern and sleek colors that represent innovation and digital excellence.",
    personality: "You're forward-thinking and tech-savvy. Your brand represents the future of digital innovation.",
    colors: ["#667EEA", "#764BA2", "#667EEA", "#F093FB", "#43E97B"],
    primary: "#667EEA",
    secondary: "#764BA2",
    accent: "#F093FB"
  }
];

interface ColorPaletteProps {
  preferences: boolean[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ preferences }) => {
  // Simple algorithm to select palette based on preferences
  const likedCount = preferences.filter(Boolean).length;
  const selectedPalette = palettes[Math.min(Math.floor(likedCount / 2), palettes.length - 1)];

  return (
    <motion.div
      className="w-full max-w-4xl mx-auto px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="text-center mb-8">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Your Perfect Palette! 🎨
        </motion.h2>
        <motion.p
          className="text-xl text-gray-600 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {selectedPalette.name}
        </motion.p>
        <motion.p
          className="text-gray-500 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {selectedPalette.description}
        </motion.p>
      </div>

      {/* Color Palette */}
      <motion.div
        className="bg-white rounded-3xl shadow-2xl p-8 mb-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="grid grid-cols-5 gap-4 mb-6">
          {selectedPalette.colors.map((color, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index + 0.5 }}
            >
              <div
                className="w-full h-24 rounded-2xl shadow-md cursor-pointer transform hover:scale-105 transition-transform"
                style={{ backgroundColor: color }}
              />
              <p className="text-xs text-gray-600 text-center mt-2 font-mono">
                {color}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Personality Insight */}
        <motion.div
          className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-6 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Your Brand Personality
          </h3>
          <p className="text-gray-600">
            {selectedPalette.personality}
          </p>
        </motion.div>

        {/* Usage Examples */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {/* Logo Mockup */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-6 mb-3">
              <div
                className="w-16 h-16 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold text-xl"
                style={{ backgroundColor: selectedPalette.primary }}
              >
                B
              </div>
              <div className="text-sm text-gray-600">Brand Logo</div>
            </div>
            <p className="text-sm text-gray-500">Logo Design</p>
          </div>

          {/* Website Mockup */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-4 mb-3">
              {/* Browser chrome */}
              <div className="flex items-center space-x-1 mb-2">
                <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="flex-1 bg-gray-200 h-1.5 rounded-full ml-2"></div>
              </div>
              
              {/* Header */}
              <div
                className="h-4 rounded mb-2 flex items-center justify-between px-2"
                style={{ backgroundColor: selectedPalette.primary }}
              >
                <div className="w-8 h-2 bg-white/30 rounded"></div>
                <div className="flex space-x-1">
                  <div className="w-3 h-1.5 bg-white/50 rounded"></div>
                  <div className="w-3 h-1.5 bg-white/50 rounded"></div>
                  <div className="w-3 h-1.5 bg-white/50 rounded"></div>
                </div>
              </div>
              
              {/* Hero section */}
              <div
                className="h-6 rounded mb-2 flex items-center px-2"
                style={{ backgroundColor: selectedPalette.secondary }}
              >
                <div className="w-12 h-3 bg-white/40 rounded mr-2"></div>
                <div className="flex-1 space-y-0.5">
                  <div className="w-full h-0.5 bg-white/30 rounded"></div>
                  <div className="w-3/4 h-0.5 bg-white/30 rounded"></div>
                </div>
              </div>
              
              {/* Content sections */}
              <div className="flex space-x-1 mb-1">
                <div
                  className="flex-1 h-3 rounded"
                  style={{ backgroundColor: selectedPalette.accent }}
                ></div>
                <div
                  className="flex-1 h-3 rounded"
                  style={{ backgroundColor: selectedPalette.colors[3] }}
                ></div>
                <div
                  className="flex-1 h-3 rounded"
                  style={{ backgroundColor: selectedPalette.colors[4] }}
                ></div>
              </div>
              
              {/* Footer */}
              <div className="flex space-x-0.5">
                <div className="flex-1 h-1 bg-gray-300 rounded"></div>
                <div className="flex-1 h-1 bg-gray-300 rounded"></div>
                <div className="flex-1 h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
            <p className="text-sm text-gray-500">Website Design</p>
          </div>

          {/* Business Card Mockup */}
          <div className="text-center">
            <div className="bg-gray-50 rounded-2xl p-4 mb-3">
              {/* Business card front */}
              <div className="relative bg-white rounded-lg shadow-sm border p-3 mb-2 aspect-[1.75/1]">
                {/* Left side - Logo area */}
                <div className="absolute left-2 top-2 bottom-2 w-1/2 flex flex-col justify-between">
                  <div>
                    {/* Logo */}
                    <div
                      className="w-6 h-6 rounded mb-1 flex items-center justify-center"
                      style={{ backgroundColor: selectedPalette.primary }}
                    >
                      <div className="w-3 h-3 bg-white/80 rounded"></div>
                    </div>
                    {/* Company name */}
                    <div className="space-y-0.5">
                      <div className="w-12 h-1 bg-gray-800 rounded"></div>
                      <div className="w-8 h-0.5 bg-gray-500 rounded"></div>
                    </div>
                  </div>
                </div>
                
                {/* Right side - Contact info */}
                <div 
                  className="absolute right-0 top-0 bottom-0 w-1/2 rounded-r-lg flex flex-col justify-center px-2 space-y-1"
                  style={{ backgroundColor: selectedPalette.primary }}
                >
                  <div className="w-8 h-1 bg-white/90 rounded"></div>
                  <div className="w-6 h-0.5 bg-white/70 rounded"></div>
                  <div className="mt-1 space-y-0.5">
                    <div className="w-7 h-0.5 bg-white/60 rounded"></div>
                    <div className="w-8 h-0.5 bg-white/60 rounded"></div>
                    <div className="w-6 h-0.5 bg-white/60 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-500">Business Card</p>
          </div>
        </motion.div>
      </motion.div>

    </motion.div>
  );
};

export default ColorPalette;