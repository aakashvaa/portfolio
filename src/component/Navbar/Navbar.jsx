import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import Github from '../icons/github.jsx'
import Logo from '../Logo.jsx'
import X from '../icons/x.jsx'
import { NavStyle } from './navbar.styles'
import MobileNavbar from '../MobileNav/MobileNavbar.jsx'
import NavbarList from './NavbarList.jsx'
import LinkedIn from '../icons/linkedIn.jsx'

function Navbar() {
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    })
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            console.log('Scroll event detected:', window.scrollY)
            setIsVisible(window.scrollY > 0)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        // Initial check
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <NavStyle>
                <Logo />
                <div
                    className={`flex font-light fixed z-50 top-5 gap-x-3 justify-center items-center backdrop-blur-xl px-10 py-3 rounded-3xl transition-all duration-300 ${
                        isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-[-100%]'
                    }`}
                >
                    {[
                        'skills',
                        'about',
                        'experience',
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
                </div>
            </NavStyle>
            <MobileNavbar />
        </>
    )
}

export default Navbar
