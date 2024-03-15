import React from 'react'
import { motion } from 'framer-motion'
import SVG from '../component/SVG'
import tw from 'twin.macro'

const Animate = tw.div`flex relative flex-col w-full h-full justify-center items-center`
const gradientStyle = {
  background: ` linear-gradient(to bottom, transparent 0%, transparent 80%, #000000d3 100%)`,
}

const AnimationLogo = () => {
  return (
    <Animate style={gradientStyle}>
      <SVG />
      <motion.h1>hlw, this is akash</motion.h1>
    </Animate>
  )
}

export default AnimationLogo
