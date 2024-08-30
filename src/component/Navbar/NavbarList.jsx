import React, { useRef } from 'react'
import { ATag } from './navbar.styles'
import { capitalize } from '../../utils/constant'

function NavbarList({ name, setPosition, position }) {
  const ref = useRef(null)
  const handleMouseEnter = (e) => {
    if (!ref) return
    const { width } = ref.current.getBoundingClientRect()

    setPosition({
      left: ref.current.offsetLeft,
      width,
      opacity: 1,
    })
  }
  return (
    <ATag
      ref={ref}
      href={`#${name}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => {
        setPosition({ ...position, opacity: 0 })
      }}
    >
      {capitalize(name)}
    </ATag>
  )
}

export default NavbarList
