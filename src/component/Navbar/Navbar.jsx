import React, { useState } from 'react'
import { motion } from 'framer-motion'
import X from '../../assets/X.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import hashnode from '../../assets/hashnode.svg'
import Xh from '../../assets/Xh.svg'
import linkedinh from '../../assets/linkedinh.svg'
import githubh from '../../assets/githubh.svg'
import hashnodeh from '../../assets/hashnodeh.svg'

import Logo from '../Logo.jsx'

import { NavStyle } from './navbar.styles'
import MobileNavbar from '../MobileNav/MobileNavbar.jsx'
import NavbarList from './NavbarList.jsx'

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
          {['skills', 'about', 'project','experience', 'contact'].map((name, i) => (
            <NavbarList
              key={name}
              setPosition={setPosition}
              position={position}
              name={name}
            />
          ))}
          <motion.div
            animate={position}
            className="absolute z-10  rounded-full h-10  px-5 py-1 hover:blur-lg btn"
          ></motion.div>
          <div className="mx-5">|</div>  
          <div className="flex w-[200px] justify-between items-center">
            <a
              href="https://github.com/akaashvaa"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleHover('github')}
              onMouseLeave={handleRemoveHover}
            >
              <img
                className="cursor-pointer"
                src={hover === 'github' ? githubh : github}
                width={18}
                alt="github"
              />
            </a>
            <a
              href="https://twitter.com/aakashvaa"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => handleHover('x')}
              onMouseLeave={handleRemoveHover}
            >
              <img
                className="cursor-pointer  "
                src={hover === 'x' ? Xh : X}
                width={25}
                alt="x"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/aakash-kumar-verma-2508ba218/"
              onMouseEnter={() => handleHover('linkedin')}
              onMouseLeave={handleRemoveHover}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer  "
                src={hover === 'linkedin' ? linkedinh : linkedin}
                width={25}
                alt="linkedIn"
              />
            </a>
            <a
              href="https://akaashvaa.hashnode.dev/"
              target="_blank"
              onMouseEnter={() => handleHover('hashnode')}
              onMouseLeave={handleRemoveHover}
              rel="noopener noreferrer"
            >
              <img
                className="cursor-pointer  "
                src={hover === 'hashnode' ? hashnodeh : hashnode}
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
