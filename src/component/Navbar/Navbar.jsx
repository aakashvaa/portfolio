import React from 'react'

import X from '../../assets/X.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

import { NavStyle } from './navbar.styles'
function Navbar() {
  return (
    <NavStyle>
      <div className="flex fixed  top-5 gap-x-10 backdrop-blur-sm px-10 py-3">
        <a href="#home">Home </a>
        <a href="#about">About</a>
        <a href="#project">Project</a>
        <a href="#contact">Contact</a>
        <h1>|</h1>
        <img
          className="cursor-pointer  "
          src={X}
          width={25}
          height={20}
          alt="twitter"
        />
        <img
          className="cursor-pointer"
          src={github}
          width={20}
          height={20}
          alt="github"
        />
        <img
          className="cursor-pointer  "
          src={linkedin}
          width={25}
          height={20}
          alt="github"
        />
      </div>
    </NavStyle>
  )
}

export default Navbar
