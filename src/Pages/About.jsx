// const About = () => {
//   const cards = [
//     {
//       title: "Our Vision",
//       content: "At We-Fit, we envision a world where everyone has access to the resources they need to lead a healthier lifestyle. We believe that fitness should be accessible, enjoyable, and tailored to each individual's needs.",
//       imageUrl: "/src/assets/mission.png",
//     },
//     {
//       title: "Our Tools",
//       content: "Our website offers a variety of fitness calculators, including BMI, calorie tracking, and workout planning tools. These resources are designed to help you track your progress and make informed decisions about your health.",
//       imageUrl: "/src/assets/tools.png",
//     },
//     {
//       title: "Join Us",
//       content: "Join our community of fitness enthusiasts, share your journey, and get inspired by others. Together, we can achieve our health goals and motivate each other to stay fit and healthy!",
//       imageUrl: "/src/assets/join.png",
//     },
//   ];

//   return (
//     <div className="justify-center p-4 md:h-custom-height-lg lg:h-custom-height-lg xl-custom-height-xl 2xl:h-custom-height-lg 4xl:h-custom-height-2xl  flex items-center bg-gray-100 m-6 rounded-xl border-4 border-black">
//       <div className="flex flex-col items-center justify-center mb-6 w-full max-w-screen-xl ">
//         <h1 className="text-4xl font-bold text-gray-800 mb-5 text-center">About Us</h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-full">
//           {cards.map((card, index) => (
//             <div key={index} className="bg-white rounded-2xl shadow-md p-5 border-4 border-black flex flex-col items-center">
//               <img src={card.imageUrl} alt={card.title} className="w-32 h-32 object-cover rounded-t-lg mb-4" />
//               <h2 className="text-xl font-semibold text-gray-800 text-center">{card.title}</h2>
//               <p className="text-lg text-gray-600 mt-2 text-center">{card.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;



import React from 'react';
import { motion } from 'framer-motion';
import './temp.css';

const About = () => {
  const cards = [
    {
      title: "Our Vision",
      content: "At We-Fit, we envision a world where everyone has access to the resources they need to lead a healthier lifestyle. We believe that fitness should be accessible, enjoyable, and tailored to each individual's needs.",
      imageUrl: "/src/assets/mission.png",
    },
    {
      title: "Our Tools",
      content: "Our website offers a variety of fitness calculators, including BMI, calorie tracking, and workout planning tools. These resources are designed to help you track your progress and make informed decisions about your health.",
      imageUrl: "/src/assets/tools.png",
    },
    {
      title: "Join Us",
      content: "Join our community of fitness enthusiasts, share your journey, and get inspired by others. Together, we can achieve our health goals and motivate each other to stay fit and healthy!",
      imageUrl: "/src/assets/join.png",
    },
  ];

  // Define the animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="justify-center p-4 md:h-custom-height-lg lg:h-custom-height-lg xl-custom-height-xl 2xl:h-custom-height-lg 4xl:h-custom-height-2xl flex items-center bg-gray-100 m-6 rounded-xl border-4 border-black">
      <div className="flex flex-col items-center justify-center mb-6 w-full max-w-screen-xl">
        <motion.h1
          className="text-4xl font-bold text-gray-800 mb-5 text-center"
          initial={{ opacity: 0, y: -20 }} // Initial state for the heading
          animate={{ opacity: 1, y: 0 }}    // Final state for the heading
          transition={{ duration: 0.5 }}     // Transition properties
        >
          About Us
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16 w-full">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 border-4 border-black flex flex-col items-center"
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }} // Delay based on index for staggered effect
            >
              <img src={card.imageUrl} alt={card.title} className="w-32 h-32 object-cover rounded-t-lg mb-4" />
              <h2 className="text-xl font-semibold text-gray-800 text-center">{card.title}</h2>
              <p className="text-lg text-gray-600 mt-2 text-center">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;