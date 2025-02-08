import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro'

import About from '../About'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import Experience from '../Experience/ExperienceCard'
import Footer from '../Footer/Footer'

export default function Main() {
    return (
        <motion.section
            id="top"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: {
                    duration: 1,
                    ease: 'easeIn',
                },
            }}
            className="w-full items-center pt-14  sm:pt-[9rem] pb-[7rem] flex flex-col  "
        >
            <Navbar />
            <Intro />
            <About />
            <Experience />
            <Project />
            <Contact />

            <Footer />
        </motion.section>
    )
}
