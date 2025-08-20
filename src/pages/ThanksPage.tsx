import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const ThanksPage: React.FC = () => {
  useEffect(() => {
    // Push conversion event to dataLayer when component mounts
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      'event': 'conversion',
      'page_path': '/thanks',
      'conversion_type': 'form_submission'
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center py-8">
      <motion.div
        className="max-w-2xl mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="bg-white rounded-3xl shadow-2xl p-12"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          <motion.div
            className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
          >
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Thank You! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Your website analysis request has been submitted successfully!
          </p>
          
          <p className="text-gray-500 mb-8">
            We'll analyze your website and send you a comprehensive report to help improve your online presence.
          </p>
          
          <div className="space-y-4">
            <Link
              to="/report"
              className="inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
            >
              Start New Analysis
            </Link>
            
            <p className="text-sm text-gray-400">
              Need help? Contact us at support@example.com
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ThanksPage;