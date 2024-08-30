import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import githelper from '../../../assets/githelper.png'
import github from '../../../assets/github.svg'
import open from '../../../assets/open.svg'
function ProjectThree() {
  const [showDetail, setShowDetail] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = (event) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      console.log('hlw')
      setShowDetail(true)
    }, 600)
  }

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      console.log('bye')
      setShowDetail(false)
    }, 300)
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        className="sm:absolute sm:right-0 sm:top-0 flex flex-col text-[#9e9e9ecc] w-[250px] h-[180px] rounded-md "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img
          width={400}
          height={300}
          className="w-[250px] h-[180px] opacity-85 hover:opacity-95 hover:drop-shadow-lg rounded-xl "
          src={githelper}
          alt="project1"
        />
        <p className="w-full text-end">githelper</p>
        {showDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                duration: 1,
              },
            }}
            className={`absolute top-0 -right-4 w-[300px] h-full justify-between hidden sm:flex flex-col  z-50 border-2 backdrop-blur-xl text-white rounded-md drop-shadow-lg p-3 border-[#b2b2b222]`}
          >
            <div className="flex flex-col text-[14px] gap-y-2">
              <h1 className=" ">
                This script the need for repetitive git commands for adding,
                committing, and pushing changes.
              </h1>
              <p>
                <span className="text-balance text-black ">
                  language used :
                </span>
                {'  '}SHELL
              </p>
            </div>
            <div className="flex justify-between items-center w-full text-black">
              <a
                className="underline"
                href="https://www.npmjs.com/package/githelper125"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cursor-pointer"
                  src={open}
                  width={15}
                  alt="open"
                />
              </a>
              <a
                href="https://github.com/akaashvaa/git-helper"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="cursor-pointer"
                  src={github}
                  width={15}
                  alt="ghpopen"
                />
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  )
}

export default ProjectThree
