import React from 'react';
import { motion } from 'framer-motion';

export default function FitnessAnalysis({ analysis, onReset }) {
  return (
    <motion.div
      className="space-y-4 border-4 border-black m-4 px-6 py-14 rounded-xl font-custom"
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}    
    >
      <h2 className="text-3xl font-extrabold text-center -mt-2 mb-7 font-custom">Your Fitness Analysis</h2>
      <div>
        <p className="font-medium">BMI: {analysis.bmi}</p>
        <p className="font-medium">Category: {analysis.category}</p>
        <p className="font-medium mb-6">Daily Calorie Needs: {analysis.dailyCalories} kcal</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold ">Recommendation:</h3>
        <p className="mb-8 text-gray-900">{analysis.recommendation}</p>
      </div>
      <button
        onClick={onReset}
        className="w-full  mx-auto flex justify-center  py-2 border-4 border-black rounded-lg transition duration-300 shadow-sm text-lg font-semibold text-white bg-black hover:bg-white hover:text-black "
      >
        Calculate Again
      </button>
    </motion.div>
  );
}