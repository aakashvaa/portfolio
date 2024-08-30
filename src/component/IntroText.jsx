import React from "react";
import { motion } from "framer-motion";

function IntroText({ text, i, isVisible, delay }) {
  return (
    <motion.h1
      initial={{ x: (i + 1) * 50, opacity: 0 }}
      animate={{
        x: isVisible ? 0 : (i + 1) * 50,
        opacity: isVisible ? 1 : 0,
        transition: {
          type: "spring",
          delay: delay,
          duration: 1,
          ease: "easeOut",
        },
      }}
      className="lg:text-[6em] md:text-[5em] sm:text-[4em] xs:text-[3em] text-[1.3em] font-bold xs:font-thin hoverText"
    >
      {text === " " ? "\u00A0" : text}
    </motion.h1>
  );
}

export default IntroText;
