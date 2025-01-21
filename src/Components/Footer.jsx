import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-6 m-6 rounded-2xl shadow-2xl border-2">
        <div className="mt-4 md:mt-0 text-center">
          <p className="text-black text-xl font-bold">© {new Date().getFullYear()} WeFIT. All rights reserved.</p>
        </div>
    </footer>
  );
};

export default Footer;