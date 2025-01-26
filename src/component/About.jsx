import React from 'react'
import { motion } from 'framer-motion'
function About() {
    return (
        <section
            id="about"
            className="flex  pt-28  font-thin mb-20 items-end flex-col w-3/4"
        >
            <div className="flex text-[#eaefff] ">
                {'Akash Kumar Verma'.split('').map((char, i) => {
                    return char === 'A' || char === 'K' || char === 'V' ? (
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: 2,
                                    ease: 'easeIn',
                                },
                            }}
                            key={`${i}-${char}`}
                            className="text-[1.7em] xs:text-[3em] sm:text-[4em] "
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.h1>
                    ) : (
                        <h1
                            key={`${i}-${char}`}
                            className="text-[1.7em] xs:text-[3em] sm:text-[4em] font-light "
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </h1>
                    )
                })}
            </div>
            <p className="text-[#f2e6f2ca]  font-abel sm:text-[1.12em] tracking-wider w-3/4 xs:text-justify text-start  xs:text-balance text-wrap">
                I'm a versatile MERN full-stack developer with expertise in a
                wide range of technologies, including the MERN stack (MongoDB,
                Express.js, React, and Node.js). My skills extend beyond these
                core tools, covering various databases, frameworks, and
                programming languages. I specialize in creating scalable,
                high-performance web applications and enjoy solving complex
                technical challenges. Collaboration and continuous learning are
                at the heart of my approach, ensuring that I deliver solutions
                that meet both business goals and user expectations. Let's
                collaborate to turn your ideas into impactful digital
                experiences!
            </p>
        </section>
    )
}

export default About
