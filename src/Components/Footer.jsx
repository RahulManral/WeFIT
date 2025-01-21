import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 xs:m-4 lg:m-6 xl:m-6 2xl:m-6 3xl:m-6 4xl:m-10 rounded-2xl shadow-2xl border-2">
        <div className=" text-center">
          <p className="text-black text-lg font-medium font-custom">© {new Date().getFullYear()} WeFIT. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;