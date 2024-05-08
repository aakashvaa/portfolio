import React from 'react'

import X from '../../assets/X.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import hashnode from '../../assets/hashnode.svg'

import Logo from '../Logo.jsx'

import { ATag, NavStyle } from './navbar.styles'

function Navbar() {
  return (
    <>
      <NavStyle>
        <Logo />

        <div className="flex font-light fixed z-50 top-5 gap-x-10 justify-center items-center backdrop-blur-md px-10 py-3 rounded-3xl">
          <ATag href="#skills">Skills </ATag>
          <ATag href="#about">About</ATag>
          <ATag href="#project">Project</ATag>
          <ATag href="#contact">Contact</ATag>
          <h1>|</h1>
          <a
            href="https://github.com/akaashvaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cursor-pointer"
              src={github}
              width={18}
              alt="github"
            />
          </a>
          <a
            href="https://twitter.com/aakashvaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cursor-pointer  "
              src={X}
              width={25}
              alt="twitter"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aakash-kumar-verma-2508ba218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cursor-pointer  "
              src={linkedin}
              width={25}
              alt="linkedIn"
            />
          </a>
          <a
            href="https://akaashvaa.hashnode.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="cursor-pointer  "
              src={hashnode}
              width={20}
              alt="hashnode"
            />
          </a>
        </div>
      </NavStyle>
      <div className="sm:hidden w-[100%] flex fixed top-10 px-14 items-end justify-end   backdrop-blur-md">
        <Logo />
      </div>
    </>
  )
}

export default Navbar
