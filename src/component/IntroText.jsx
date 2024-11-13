import React from "react";
import { motion } from "framer-motion";

function IntroText({ text, i, isVisible, delay }) {
  return (
    <motion.h1
      initial={{
        x: (i + 1) * 10,
        y: -(i + 1),
        opacity: 0,
        filter: "blur(15px)",
      }}
      animate={{
        x: isVisible ? 0 : 0,
        y: isVisible ? 0 : i + 1,
        opacity: isVisible ? 1 : 0,
        filter: "blur(0px)",
        transition: {
          type: "spring",
          delay: delay,
          duration: 0.8,
          mass: 3,
          ease: "easeInOut",
        },
      }}
      className="lg:text-[6em] md:text-[5em] sm:text-[4em] xs:text-[3em] text-[1.3em] font-bold xs:font-thin hoverText"
    >
      {text === " " ? "\u00A0" : text}
    </motion.h1>
  );
}

export default IntroText;
