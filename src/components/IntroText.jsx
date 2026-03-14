'use client'

import { motion } from 'framer-motion'

export default function IntroText({ text, i, isVisible, delay }) {
    return (
        <motion.h1
            initial={{
                x: (i + 1) * 10,
                y: -(i + 1),
                opacity: 0,
            }}
            animate={{
                x: isVisible ? 0 : 0,
                y: isVisible ? 0 : i + 1,
                opacity: isVisible ? 1 : 0,
                transition: {
                    type: 'spring',
                    delay: delay,
                    duration: 0.8,
                    mass: 3,
                    ease: 'easeInOut',
                },
            }}
            className="lg:text-[3em] md:text-[2.5em] sm:text-[2em] xs:text-[1.5em] text-[1em] font-bold xs:font-thin hoverText"
        >
            {text === ' ' ? '\u00A0' : text}
        </motion.h1>
    )
}
