import { motion } from 'framer-motion'
import React from 'react'
import tw from 'twin.macro'
const name1 = 'Full Stack Developer'
const name2 = 'heyyy devsss'

const IntroContainer = tw.div`relative  justify-center items-end select-none border-t-[1px] mt-10 xs:mt-0 border-b  border-l sm:h-[400px] py-5 sm:py-0 border-[#9e9e9e43] w-[80%] flex flex-col`

function Intro() {
  return (
    <IntroContainer>
      <h1 className="absolute -left-5 -top-3 text-[12px] sm:text-[1em] backdrop-blur-sm p-3">
        I AM A
      </h1>
      <div className="flex  text-[#d4defc] gap-x-1 ">
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
            className=" lg:text-[6em] md:text-[5em] sm:text-[4em] xs:text-[3em] text-[1.3em] font-bold xs:font-thin hoverText"
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.h1>
        ))}
      </div>
    </IntroContainer>
  )
}

export default Intro
