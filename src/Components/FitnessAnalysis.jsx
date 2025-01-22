// export default function FitnessAnalysis({ analysis, onReset }) {
//   return (
//     <div className="space-y-4 border-4 border-black px-10 py-14 rounded-xl">
//       <h2 className="text-xl font-semibold text-center -mt-2">Your Fitness Analysis</h2>
//       <div>
//         <p className="font-medium">BMI: {analysis.bmi}</p>
//         <p className="font-medium">Category: {analysis.category}</p>
//         <p className="font-medium">Daily Calorie Needs: {analysis.dailyCalories} kcal</p>
//       </div>
//       <div>
//         <h3 className="text-lg font-medium">Recommendation:</h3>
//         <p>{analysis.recommendation}</p>
//       </div>
//       <button
//         onClick={onReset}
//         className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//       >
//         Calculate Again
//       </button>
//     </div>
//   )
// }


import React from 'react';
import { motion } from 'framer-motion';

export default function FitnessAnalysis({ analysis, onReset }) {
  return (
    <motion.div
      className="space-y-4 border-4 border-black m-4 px-6 py-14 rounded-xl font-custom"
      initial={{ opacity: 0, y: 20 }} // Initial state for the animation
      animate={{ opacity: 1, y: 0 }}   // Final state for the animation
      transition={{ duration: 0.5 }}     // Animation duration
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