'use client'
import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import SVG from '../component/SVG'
import tw from 'twin.macro'
import Main from '../component/Main/Main'

const Animate = tw.div`flex relative flex-col w-full h-full justify-center items-center`
const gradientStyle = {
  background: ` radial-gradient(farthest-corner at 70px 40px,   transparent 10%, #000000d3 90% )`,
}

const AnimationLogo = () => {
  const [disableSVG, setDisableSVG] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => setDisableSVG(true), 2500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <Animate style={gradientStyle}>
      {!disableSVG ? <SVG /> : <Main />}
      <motion.h1>hlw, this is akash</motion.h1>
    </Animate>
  )
}

export default AnimationLogo
