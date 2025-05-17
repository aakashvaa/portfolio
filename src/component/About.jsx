import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
function About() {
    const [isHovered, setIsHovered] = useState(false)

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
                I'm a versatile Frontend and Gen AI developer with expertise in a
                wide range of technologies, including the React.js, Redux Toolkit, SCSS, Jest, Langchain, Google ADK, MCP etc. My skills extend beyond these
                core tools, covering various databases, backend, frameworks, and
                programming languages. I specialize in creating scalable,
                high-performance web applications and enjoy solving complex
                technical challenges. Collaboration and continuous learning are
                at the heart of my approach, ensuring that I deliver solutions
                that meet both business goals and user expectations. Let's
                collaborate to turn your ideas into impactful digital
                experiences!
            </p>

            <motion.a
                href="https://drive.google.com/file/d/17wd-terxA756LuzER1YgwC-T6L9MKh2Z/view?usp=sharing"
                target="_blank"
                type="submit"
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="relative mx-auto w-[70%] mt-10 sm:w-[30%] group"
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-sm"
                    animate={{
                        opacity: isHovered ? 1 : 0.7,
                    }}
                />
                <motion.div
                    className="relative w-full py-4 px-6 bg-white/5 text-white/90 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 border border-white/10 group-hover:border-white/20"
                    whileHover={{
                        backgroundColor: 'rgba(255,255,255,0.08)',
                    }}
                >
                    <motion.div
                        animate={{
                            x: isHovered ? [0, 5, 0] : 0,
                        }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <Download className="w-4 h-4" />
                    </motion.div>
                    <span>Resume</span>
                </motion.div>
            </motion.a>
        </section>
    )
}

export default About
