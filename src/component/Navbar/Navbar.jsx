import React from 'react'

import X from '../../assets/X.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import hashnode from '../../assets/hashnode.svg'

import Logo from '../Logo.jsx'

import { ATag, NavStyle } from './navbar.styles'
function Navbar() {
  return (
    <NavStyle>
      <Logo />
      <div className="flex fixed z-50 top-5 gap-x-10 backdrop-blur-sm px-10 py-3">
        <ATag href="#home">Home </ATag>
        <ATag href="#about">About</ATag>
        <ATag href="#project">Project</ATag>
        <ATag href="#contact">Contact</ATag>
        <h1>|</h1>
        <img className="cursor-pointer" src={github} width={18} alt="github" />
        <img className="cursor-pointer  " src={X} width={30} alt="twitter" />
        <img
          className="cursor-pointer  "
          src={linkedin}
          width={25}
          alt="github"
        />
        <img
          className="cursor-pointer  "
          src={hashnode}
          width={20}
          alt="hasnode"
        />
      </div>
    </NavStyle>
  )
}

export default Navbar
