import { motion } from 'framer-motion'
import React from 'react'
import tw from 'twin.macro'
const name1 = 'Full Stack Developer'
const name2 = 'heyyy devsss'
const IntroContainer = tw.div`relative justify-center items-center select-none border-t-[1px] border-b border-l h-[400px] border-[#9e9e9e43] w-3/4 flex flex-col`
function Intro() {
  return (
    <IntroContainer>
      <h1 className="absolute -left-5  -top-3 backdrop-blur-sm p-3">I AM A</h1>
      <div className="flex text-[#d4defc] gap-2">
        {'Full Stack Developer'.split('').map((char, i) => (
          <motion.h1
            initial={{ x: (i + 1) * 50 }}
            animate={{
              x: 0,
              transition: {
                type: 'spring',
                delay: 0.3,
                duration: 2,
                ease: 'linear',
              },
            }}
            key={i}
            className="text-[6em]  font-thin hoverText"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.h1>
        ))}
      </div>
    </IntroContainer>
  )
}

export default Intro
