import React from 'react'
import { motion } from 'framer-motion'
import { pathVariants, svgVariants } from '../utils/constant'
function Logo() {
  return (
    <a
      href="#top"
      className="absolute right-10 cursor-pointer decoration-transparent "
    >
      <motion.svg
        width="30"
        height="20"
        viewBox="0 0 85 97"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', transformOrigin: '0%' }}
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        className="drop-shadow-xl outline-none"
        whileTap={{
          x: [-5, 5],
        }}
      >
        <motion.path
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          d="M42.5 0L84.5022 96.75H0.497768L42.5 0Z"
          fill="#ffffff"
        />
      </motion.svg>
    </a>
  )
}

export default Logo
