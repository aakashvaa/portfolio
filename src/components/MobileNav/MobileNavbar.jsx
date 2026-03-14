'use client'

import { useState } from 'react'
import GithubIcon from '../icons/github'
import LinkedInIcon from '../icons/linkedIn'
import XLogo from '../icons/x'

export default function MobileNavbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <div className="fixed z-50 top-10 right-5 flex sm:hidden gap-x-10 justify-end">
            <div onClick={() => setToggleMenu(!toggleMenu)} className="cursor-pointer">
                <svg
                    width="30"
                    height="20"
                    viewBox="0 0 85 97"
                    xmlns="http://www.w3.org/2000/svg"
                    className="drop-shadow-xl outline-none cursor-pointer"
                >
                    <path
                        d="M42.5 0L84.5022 96.75H0.497768L42.5 0Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>

            {toggleMenu && (
                <nav className="absolute backdrop-blur-xl shadow-md border border-[#9e9e9e17] items-center top-10 gap-5 right-0 flex flex-col text-sm w-[200px] rounded-md px-3 py-5">
                    {['top', 'about', 'skills', 'experience', 'project', 'contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item}`}
                            onClick={() => setToggleMenu(false)}
                            className="z-50 mix-blend-difference px-3 py-2 text-white text-center transition-all duration-300 ease-in-out"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    ))}
                    <hr className="w-full blur-[1.5px]" />
                    <div className="flex justify-between items-center gap-x-5">
                        <GithubIcon />
                        <LinkedInIcon />
                        <XLogo />
                    </div>
                </nav>
            )}
        </div>
    )
}
