// Layout.js
import React from 'react';
import { motion, useLocation } from 'framer-motion';

const variants = {
  initial: {
    x: '100%', // Start off-screen to the right
    opacity: 0,
  },
  enter: {
    x: 0, // Slide into view
    opacity: 1,
  },
  exit: {
    x: '-100%', // Slide out to the left
    opacity: 0,
  },
};

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <motion.div
      key={location.key} // Key to trigger re-mounting on route change
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'tween', duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Layout;