// //FitnessForm.jsx
// import { useState } from 'react'
// export default function FitnessForm({ onSubmit }) {
//   const [formData, setFormData] = useState({
//     height: '',
//     weight: '',
//     age: '',
//     gender: '',
//     activityLevel: 'sedentary'
//   })

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }))
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (typeof onSubmit === 'function') {
//       onSubmit(formData)
//     } else {
//       console.error('onSubmit is not a function')
//     }
//   }

  
//   // const handleSubmit = (e) => {
//   //   e.preventDefault()
//   //   onSubmit({
//   //     ...formData,
//   //     height: formData.height,
//   //     weight:formData.weight,
//   //     age:formData.age,
//   //   })
//   // }
  


//   return (
//     <div className=" md:h-custom-height-lg lg:h-custom-height-lg xl-custom-height-xl 2xl:h-custom-height-lg 4xl:h-custom-height-2xl  flex items-center bg-gray-100 m-6 rounded-xl border-4 border-black">
//     <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center mx-auto border-4 border-black px-6 py-4 rounded-xl bg-white">
//       <div>
//         <label htmlFor="height" className="block text-lg font-medium text-black">Height (cm)</label>
//         <input
//           type="number"
//           id="height"
//           name="height"
//           value={formData.height}
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-black focus:ring-opacity-50 py-1 bg-black border-2 border-gray-900 text-white pl-1"
//         />
//       </div>
//       <div>
//         <label htmlFor="weight" className="block text-lg font-medium text-black">Weight (kg)</label>
//         <input
//           type="number"
//           id="weight"
//           name="weight"
//           value={formData.weight}
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-black focus:ring-opacity-50 py-1  bg-black border-2 border-gray-900 text-white pl-1"
//         />
//       </div>
//       <div>
//         <label htmlFor="age" className="block text-lg font-medium text-black">Age</label>
//         <input
//           type="number"
//           id="age"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//           required
//           className="mt-1 block w-full rounded-md  shadow-sm focus:border-indigo-300 focus:ring focus:ring-black focus:ring-opacity-50 py-1  bg-black border-2 border-gray-900 text-white pl-1"
//         />
//       </div>
//       <div>
//         <label htmlFor="gender" className="block text-lg font-medium text-black">Gender</label>
//         <select
//           id="gender"
//           name="gender"
//           value={formData.gender}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-black focus:ring-opacity-50 py-1  bg-black border-2 border-gray-900 text-white pl-1"
//         >
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="activityLevel" className="block text-lg font-medium text-black">Activity Level</label>
//         <select
//           id="activityLevel"
//           name="activityLevel"
//           value={formData.activityLevel}
//           onChange={handleChange}
//           className="mt-1 block w-full rounded-md shadow-sm focus:border-black focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-1  bg-black border-2 border-gray-900 text-white pl-1"
//         >
//           <option value="sedentary">Sedentary (little to no exercise)</option>
//           <option value="light">Light (light exercise 1-3 days/week)</option>
//           <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
//           <option value="active">Active (hard exercise 6-7 days/week)</option>
//           <option value="veryActive">Very Active (very hard exercise & physical job)</option>
//         </select>
//       </div>
//       <button
//         type="submit"
//         className="w-full flex justify-center py-2 px-4 border-4 border-black rounded-md shadow-sm text-md font-medium text-black bg-white  hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-300"
//       >
//         Calculate
//       </button>
//     </form>
//     </div>
//   )
// }

// //FitnessCalculator.jsx

// import { useState } from 'react'
// import FitnessForm from './FitnessForm'
// import FitnessAnalysis from './FitnessAnalysis'

// export default function FitnessCalculator() {
//   const [analysis, setAnalysis] = useState(null)

//   const calculateFitness = (userData) => {
//     const { height, weight, age, gender, activityLevel } = userData
//     const heightInMeters = height / 100
//     const bmi = weight / (heightInMeters * heightInMeters)
    
//     let analysis = {
//       bmi: bmi.toFixed(2),
//       category: '',
//       recommendation: ''
//     }

//     if (bmi < 18.5) {
//       analysis.category = 'Underweight'
//       analysis.recommendation = 'Focus on increasing calorie intake with nutrient-dense foods and start a strength training program.'
//     } else if (bmi >= 18.5 && bmi < 25) {
//       analysis.category = 'Normal weight'
//       analysis.recommendation = 'Maintain a balanced diet and regular exercise routine to stay healthy.'
//     } else if (bmi >= 25 && bmi < 30) {
//       analysis.category = 'Overweight'
//       analysis.recommendation = 'Focus on creating a slight calorie deficit through diet and increase cardiovascular exercise.'
//     } else {
//       analysis.category = 'Obese'
//       analysis.recommendation = 'Consult with a healthcare professional for a personalized weight loss plan. Focus on creating a sustainable calorie deficit and increasing physical activity.'
//     }

//     // Calculate daily calorie needs (using Harris-Benedict equation)
//     let bmr
//     if (gender === 'male') {
//       bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
//     } else {
//       bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age)
//     }

//     const activityMultipliers = {
//       sedentary: 1.2,
//       light: 1.375,
//       moderate: 1.55,
//       active: 1.725,
//       veryActive: 1.9
//     }

//     const dailyCalories = Math.round(bmr * activityMultipliers[activityLevel])
//     analysis.dailyCalories = dailyCalories

//     setAnalysis(analysis)
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto">
//             <h1 className="text-2xl font-semibold mb-6 text-center">WeFIT Fitness Calculator</h1>
//             {!analysis ? (
//               <FitnessForm onSubmit={calculateFitness} />
//             ) : (
//               <FitnessAnalysis analysis={analysis} onReset={() => setAnalysis(null)} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// //FitnessAnalysis.jsx

// export default function FitnessAnalysis({ analysis, onReset }) {
//     return (
//       <div className="space-y-4">
//         <h2 className="text-xl font-semibold">Your Fitness Analysis</h2>
//         <div>
//           <p className="font-medium">BMI: {analysis.bmi}</p>
//           <p className="font-medium">Category: {analysis.category}</p>
//           <p className="font-medium">Daily Calorie Needs: {analysis.dailyCalories} kcal</p>
//         </div>
//         <div>
//           <h3 className="text-lg font-medium">Recommendation:</h3>
//           <p>{analysis.recommendation}</p>
//         </div>
//         <button
//           onClick={onReset}
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Calculate Again
//         </button>
//       </div>
//     )
//   }
  