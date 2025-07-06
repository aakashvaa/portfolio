import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Github from '../icons/github.jsx'
import Logo from '../Logo.jsx'
import X from '../icons/x.jsx'
import { NavStyle } from './navbar.styles'
import MobileNavbar from '../MobileNav/MobileNavbar.jsx'
import NavbarList from './NavbarList.jsx'
import LinkedIn from '../icons/linkedIn.jsx'

function Navbar() {
    const [isHovered, setIsHovered] = useState(false)
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    })

    return (
        <>
            <NavStyle>
                <Logo />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className="relative mx-auto w-fit  group will-change-transform transform-cpu"
                >
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 rounded-xl blur-sm"
                        animate={{
                            opacity: isHovered ? 1 : 0.7,
                        }}
                    />

                    <motion.div
                        className="relative w-full py-2 px-6 bg-white/5 text-white/90 rounded-xl font-medium flex items-center justify-center gap-2 transition-all duration-200 border border-white/10 group-hover:border-white/20 backdrop-blur-sm"
                        whileHover={{
                            backgroundColor: 'rgba(255,255,255,0.08)',
                        }}
                    >
                        {[
                            'about',
                            'experience',
                            'skills',
                            'project',
                            'contact',
                        ].map((name, i) => (
                            <NavbarList
                                key={name}
                                setPosition={setPosition}
                                position={position}
                                name={name}
                            />
                        ))}

                        <motion.div
                            animate={position}
                            className="absolute z-10  rounded-full h-10  px-5 py-1 btn "
                        />

                        <div className="mx-5">|</div>
                        <div className="flex w-[150px] justify-between items-center">
                            <Github />
                            <X />
                            <LinkedIn />
                        </div>
                    </motion.div>
                </motion.div>
            </NavStyle>
            <MobileNavbar />
        </>
    )
}

export default Navbar
