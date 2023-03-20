import React from "react";
import { motion } from "framer-motion";

const animations = {
  initial: {
    opacity: 0,
    y: -60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeIn",
    },
  },

  exit: {
    opacity: 0,
    y: 100,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial={animations.initial}
      animate={animations.animate}
      exit={animations.exit}
    >
      {children}
    </motion.div>
  );
};
