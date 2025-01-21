// // import React, { useState } from "react"

// // export default function FitnessForm({ onSubmit }) {
// //   const [formData, setFormData] = useState({
// //     height: "",
// //     weight: "",
// //     age: "",
// //     gender: "",
// //     activityLevel: "sedentary",
// //   })

// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData((prevData) => ({
// //       ...prevData,
// //       [name]: value,
// //     }))
// //   }

// //   const handleSubmit = (e) => {
// //     e.preventDefault()
// //     onSubmit(formData)
// //   }

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-4">
// //       <div>
// //         <label htmlFor="height" className="block text-sm font-medium text-gray-700">
// //           Height (cm)
// //         </label>
// //         <input
// //           type="number"
// //           id="height"
// //           name="height"
// //           value={formData.height}
// //           onChange={handleChange}
// //           required
// //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
// //         />
// //       </div>
// //       <div>
// //         <label htmlFor="weight" className="block text-sm font-medium text-gray-700">
// //           Weight (kg)
// //         </label>
// //         <input
// //           type="number"
// //           id="weight"
// //           name="weight"
// //           value={formData.weight}
// //           onChange={handleChange}
// //           required
// //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
// //         />
// //       </div>
// //       <div>
// //         <label htmlFor="age" className="block text-sm font-medium text-gray-700">
// //           Age
// //         </label>
// //         <input
// //           type="number"
// //           id="age"
// //           name="age"
// //           value={formData.age}
// //           onChange={handleChange}
// //           required
// //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
// //         />
// //       </div>
// //       <div>
// //         <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
// //           Gender
// //         </label>
// //         <select
// //           id="gender"
// //           name="gender"
// //           value={formData.gender}
// //           onChange={handleChange}
// //           required
// //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
// //         >
// //           <option value="">Select gender</option>
// //           <option value="male">Male</option>
// //           <option value="female">Female</option>
// //         </select>
// //       </div>
// //       <div>
// //         <label htmlFor="activityLevel" className="block text-sm font-medium text-gray-700">
// //           Activity Level
// //         </label>
// //         <select
// //           id="activityLevel"
// //           name="activityLevel"
// //           value={formData.activityLevel}
// //           onChange={handleChange}
// //           className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
// //         >
// //           <option value="sedentary">Sedentary (little to no exercise)</option>
// //           <option value="light">Light (light exercise 1-3 days/week)</option>
// //           <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
// //           <option value="active">Active (hard exercise 6-7 days/week)</option>
// //           <option value="veryActive">Very Active (very hard exercise & physical job)</option>
// //         </select>
// //       </div>
// //       <button
// //         type="submit"
// //         className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
// //       >
// //         Calculate
// //       </button>
// //     </form>
// //   )
// // }



// ////////////////////////////////////////////////////////////////////////////////////////
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
//   e.preventDefault()
//   onSubmit(formData)
// }

//   return (
//     <div className=" md:h-custom-height-lg lg:h-custom-height-lg xl-custom-height-xl 2xl:h-custom-height-lg 4xl:h-custom-height-2xl  flex items-center bg-white m-6 rounded-xl border-4 border-black">
//     <form onSubmit={handleSubmit} className="space-y-4 flex flex-col justify-center mx-auto px-6 py-4 rounded-xl bg-white">
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



import React, { useState } from "react";
import { motion } from "framer-motion";

export default function FitnessForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    gender: '',
    activityLevel: 'sedentary'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="md:h-custom-height-lg lg:h-custom-height-lg xl-custom-height-xl 2xl:h-custom-height-lg 4xl:h-custom-height-2xl flex items-center bg-white m-6 rounded-xl border-4 border-black xs:m-4 lg:m-6 xl:m-6 2xl:m-6 3xl:m-6">
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col justify-center mx-auto px-6 py-4 rounded-xl bg-white"
        initial={{ opacity: 0, y: 10 }} // Initial state for the form
        animate={{ opacity: 1, y: 0 }}   // Final state for the form
        transition={{ duration: 0.4 }}     // Animation duration
      >
        <div>
          <label htmlFor="height" className="block text-lg font-medium text-black">Height (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-black focus:ring-opacity-50 py-1 bg-black border-2 border-gray-900 text-white pl-1"
          />
        </div>
        <div>
          <label htmlFor="weight" className="block text-lg font-medium text-black">Weight (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-black focus:ring-opacity-50 py-1 bg-black border-2 border-gray-900 text-white pl-1"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-lg font-medium text-black">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-black focus:ring-opacity-50 py-1 bg-black border-2 border-gray-900 text-white pl-1"
          />
        </div>
        <div>
          <label htmlFor="gender" className="block text-lg font-medium text-black">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-black focus:ring-opacity-50 py-1 bg-black border-2 border-gray-900 text-white pl-1"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label htmlFor="activityLevel" className="block text-lg font-medium text-black">Activity Level</label>
          <select
            id="activityLevel"
            name="activityLevel"
            value={formData.activityLevel}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md shadow-sm focus:border-black focus:ring focus:ring-indigo-200 focus:ring-opacity-50 py-1 bg-black border-2 border-gray-900 text-white pl-1"
          >
            <option value="sedentary">Sedentary (little to no exercise)</option>
            <option value="light">Light (light exercise 1-3 days/week)</option>
            <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
            <option value="active">Active (hard exercise 6-7 days/week)</option>
            <option value="veryActive">Very Active (very hard exercise & physical job)</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border-4 border-black rounded-md shadow-sm text-md font-medium text-black bg-white hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-300"
        >
          Calculate
        </button>
      </motion.form>
    </div>
  );
}
