import React from 'react';

const NotFound = () => {
  return (
    <div className="justify-center p-4 md:h-custom-height-lg lg:h-custom-height-lg xl-custom-height-xl 2xl:h-custom-height-lg 4xl:h-custom-height-2xl flex items-center bg-gray-100 m-6 rounded-xl border-4 border-black xs:m-4 lg:m-6 xl:m-6 2xl:m-6 3xl:m-6 font-custom">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">Oops! Page not found.</p>
        <p className="mt-2 text-gray-500">The page you are looking for doesn't exist.</p>
        <a 
          href="/" 
          className="mt-6 inline-block px-4 py-2 text-white bg-black rounded-lg hover:bg-white hover:text-black border-4 border-black transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;