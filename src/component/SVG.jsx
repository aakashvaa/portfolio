import React from "react";
import { motion } from "framer-motion";
import { pathVariants, svgVariants } from "../utils/constant";

function SVG() {
  return (
    <div className="flex w-full flex-col gap-10 bg-black h-screen justify-center scale-150 items-center logo">
      <motion.svg
        width="85"
        height="97"
        viewBox="0 0 85 97"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "100%", transformOrigin: "0%" }}
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M42.5 0L84.5022 96.75H0.497768L42.5 0Z"
          fill="#D9D9D9"
        />
      </motion.svg>
    </div>
  );
}

export default SVG;
