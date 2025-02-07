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
            <div className="flex flex-col-reverse z-50 relative w-[170%] sm:w-[103%] h-[400px]   pxy rounded-md ">
                <div className="w-full h-full bg-[#00000044] relative rounded-2xl ">
                    {/* <div className="absolute w-[150px] h-[200px] shadow-sm right-0 bottom-0  -z-20 bg-[#d1d0d1]   blur-sm" /> */}

                    <div className="absolute w-[250px] h-[100px] brightness-200  shadow-xl drop-shadow-2xl left-[50px] top-0 -z-50 bg-[#0052aa] blur-md " />
                    <div className="absolute w-[250px] h-[100px] brightness-200  shadow-xl drop-shadow-2xl right-[50px] top-0 -z-50 bg-[#0052aa] blur-md " />
                </div>
            </div>
            <Footer />
        </motion.section>
    )
}
