import React from 'react'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro'

import { motion } from 'framer-motion'
import About from '../About'

export default function Main() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: 'easeIn',
        },
      }}
      className="w-full items-center mt-[7rem] gap-36 flex flex-col  "
    >
      <Navbar />
      <Intro />
      <About />
    </motion.div>
  )
}
