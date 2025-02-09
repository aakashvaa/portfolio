import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../Navbar/Navbar'
import Intro from '../Intro'

import About from '../About'
import Project from '../Project/Project'
import Contact from '../Contact/Contact'
import Experience from '../Experience/ExperienceCard'
import Footer from '../Footer/Footer'
import { SkillsSection } from '../../Skill/Skill'

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
            <SkillsSection />
            <Project />
            <Contact />

            <Footer />
            <h1 className="text-center pt-10 text-white text-2xl font-light text-[1em] tracking-wider">
                Thank You for Visiting; Wish you a good day!
            </h1>
        </motion.section>
    )
}
