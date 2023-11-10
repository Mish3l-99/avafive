"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const AnimateLayout = ({ children }: Props) => {
  const variants = {
    hidden: { opacity: 0, x: -40, scale: 1.1 },
    visible: { opacity: 1, x: 0, scale: 1 },
  };

  const transition = {
    duration: 0.6,
    // type: "spring",
    // stiffness: 260, // Adjust the stiffness to control the spring effect
    // damping: 20, // Adjust the damping to control the spring effect
    delay: 0.2,
  };

  return (
    <motion.div
      variants={variants}
      transition={transition}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateLayout;
