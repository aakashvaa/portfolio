import React, { useState } from 'react'
import hashnode from '../../assets/hashnode.svg'
import { ATag } from '../Navbar/navbar.styles'
import tw from 'twin.macro'
import XLogo from '../icons/x'
import Github from '../icons/github'
import LinkedIn from '../icons/linkedIn'

const NavbarContainer = tw.nav`
absolute  backdrop-blur-xl shadow-md border-[1px] border-[#9e9e9e17] items-center top-10 gap-5 right-0 flex flex-col text-sm w-[200px] rounded-md px-3 py-5


`
function MobileNavbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <div className="fixed z-50 top-10  right-5  flex sm:hidden gap-x-10 justify-end  ">
            <div onClick={handleToggleMenu}>
                <svg
                    width="30"
                    height="20"
                    viewBox="0 0 85 97"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-xl outline-none cursor-pointer "
                >
                    <path
                        initial="hidden"
                        animate="visible"
                        d="M42.5 0L84.5022 96.75H0.497768L42.5 0Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>
            {toggleMenu && (
                <NavbarContainer>
                    <ATag href="#top"> Top</ATag>
                    <ATag href="#skills">Skills </ATag>
                    <ATag href="#about">About</ATag>
                    <ATag href="#project">Project</ATag>
                    <ATag href="#contact">Contact</ATag>
                    <hr className="  w-full blur-[1.5px] " />
                    <div className="flex justify-between items-center gap-x-5">
                        <Github />
                        <LinkedIn />
                        <XLogo />

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
                </NavbarContainer>
            )}
        </div>
    )
}

export default MobileNavbar
