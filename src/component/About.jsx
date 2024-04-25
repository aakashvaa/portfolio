import React from 'react'
import { motion } from 'framer-motion'
function About() {
  return (
    <div className="flex font-thin items-end flex-col w-3/4">
      <div className="flex">
        {'Akash Kumar Verma'.split('').map((char, i) => (
          <>
            {char === 'A' || char === 'K' || char === 'V' ? (
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 2,
                    ease: 'easeIn',
                  },
                }}
                key={char}
                className="text-[4em] "
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.h1>
            ) : (
              <h1 key={char} className="text-[4em] font-light text-[#f2e6f2d4]">
                {char === ' ' ? '\u00A0' : char}
              </h1>
            )}
          </>
        ))}
      </div>
      <p className="text-[#f2e6f2ca] font-abel text-[1.12em] tracking-wider w-3/4 text-justify text-balance">
        I'm a versatile MERN full-stack developer with expertise in a wide range
        of technologies, including the MERN stack (MongoDB, Express.js, React,
        and Node.js). My skills extend beyond these core tools, covering various
        databases, frameworks, and programming languages. I specialize in
        creating scalable, high-performance web applications and enjoy solving
        complex technical challenges. Collaboration and continuous learning are
        at the heart of my approach, ensuring that I deliver solutions that meet
        both business goals and user expectations. Let's collaborate to turn
        your ideas into impactful digital experiences!
      </p>
    </div>
  )
}

export default About
