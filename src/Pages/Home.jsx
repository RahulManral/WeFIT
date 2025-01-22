// import React from 'react';
// import './temp.css'


// const Home = () => {
//   return (


//     <div className="md:h-custom-height-lg lg:h-custom-height-lg xl-custom-height-xl 2xl:h-custom-height-lg 4xl:h-custom-height-2xl  flex items-center bg-gray-100 m-6 rounded-xl border-4 border-black">
//     <main className="flex flex-col items-center justify-center w-full flex-1 px-20 mb-20">
//       <h1 className="text-6xl  font-extrabold font-custom">
//         Welcome to your Fitness Guidance Calculator
//       </h1>
//       <p className="mt-3 text-2xl font-custom">
//         Get personalized fitness advice based on your body metrics
//       </p>
//       <button className='border-2 py-4 px-10 text-lg font-bold rounded-2xl bg-black text-white mt-5'>Start Calculator</button>
      
//     </main>
//   </div>
//   );
// };

// export default Home;







import React from 'react';
import { motion } from 'framer-motion';
import './background.css';
import { Link } from 'react-router-dom';

const Home = () => {
  // Define the animation variants with a bounce effect
  const variants = {
    hidden: { y: '20%', opacity: 0, scale: 1 }, // Start slightly below and smaller
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      }
    },
  };

  return (
    <div className="md:h-custom-height-lg lg:h-custom-height-lg xl-custom-height-xl 2xl:h-custom-height-lg 4xl:h-custom-height-2xl flex items-center bg-gray-100 xs:m-4 lg:m-5 rounded-xl ">
      <main className="flex flex-col items-center justify-center w-full flex-1 xs:px-2 lg:px-64 text-center mb-24 mt-24">
        <motion.h1
          className="lg:text-6xl font-extrabold font-custom xs:text-4xl"
          initial="hidden"
          animate="visible"
          variants={variants}
        >
          Welcome to your Fitness Guidance Calculator
        </motion.h1>
        <motion.p
          className="mt-3 xs:text-xl lg:text-2xl font-custom px-8"
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Get personalized fitness advice based on your body metrics
        </motion.p>
        <Link to="/fitnesscalculator">
          <motion.button
            className=" border-4 py-4 px-10   xs:text-lg lg:text-xl xl:text-xl 2xl:text-xl 3xl:text-xl font-semibold rounded-2xl bg-black text-white mt-5 hover:bg-white hover:text-black border-black transition duration-300 ease-in-out font-custom"
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Start Calculator
          </motion.button>
        </Link>
      </main>
    </div>
  );
};

export default Home;



