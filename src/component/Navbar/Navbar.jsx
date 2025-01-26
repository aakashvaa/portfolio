import React, { useState } from 'react'
import { motion } from 'framer-motion'

import hashnode from '../../assets/hashnode.svg'
import hashnodeh from '../../assets/hashnodeh.svg'
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
    const [hover, setHover] = useState('')
    const handleHover = (name) => {
        setHover(name)
    }
    const handleRemoveHover = () => {
        setHover('')
    }
    return (
        <>
            <NavStyle>
                <Logo />
                <div className="flex font-light fixed z-50 top-5 gap-x-3 justify-center items-center backdrop-blur-xl px-10 py-3 rounded-3xl">
                    {[
                        'skills',
                        'about',
                        'project',
                        'experience',
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
                    <div className="flex w-[200px] justify-between items-center">
                        <Github />
                        <X />
                        <LinkedIn />

                        <a
                            href="https://akaashvaa.hashnode.dev/"
                            target="_blank"
                            onMouseEnter={() => handleHover('hashnode')}
                            onMouseLeave={handleRemoveHover}
                            rel="noopener noreferrer"
                        >
                            <img
                                className="cursor-pointer  "
                                src={
                                    hover === 'hashnode' ? hashnodeh : hashnode
                                }
                                width={20}
                                alt="hashnode"
                            />
                        </a>
                    </div>
                </div>
            </NavStyle>
            <MobileNavbar />
        </>
    )
}

export default Navbar
