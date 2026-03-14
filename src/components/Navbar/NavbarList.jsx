'use client'

import { useRef } from 'react'
import { capitalize } from '@/utils/constant'

export default function NavbarList({ name, setPosition, position }) {
    const ref = useRef(null)

    const handleMouseEnter = () => {
        if (!ref.current) return
        const { width } = ref.current.getBoundingClientRect()
        setPosition({
            left: ref.current.offsetLeft,
            width,
            opacity: 1,
        })
    }

    return (
        <a
            ref={ref}
            href={`#${name}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setPosition({ ...position, opacity: 0 })}
            className="z-50 mix-blend-difference lg:px-8 px-3 md:px-5 py-2 text-white text-center justify-center items-center transition-all duration-300 ease-in-out"
        >
            {capitalize(name)}
        </a>
    )
}
