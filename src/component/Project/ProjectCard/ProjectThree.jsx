import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import project1 from '../../../assets/project1.png'
import ShowDeatils from './ShowDeatils'
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
          src={project1}
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
            className={`absolute -top-4 -right-4 w-[300px] hidden sm:flex flex-col  z-50 border-2 backdrop-blur-xl p-1 text-white rounded-md drop-shadow-lg px-3 border-[#b2b2b222]`}
          >
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo molestiae quas amet delectus voluptate aut excepturi
              perferendis sed
            </h1>{' '}
            <div className="flex justify-between w-full text-black">
              <a
                className="underline"
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
              >
                open
              </a>
              <a
                href="http://"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                git
              </a>
            </div>
          </motion.div>
        )}
      </motion.div>
    </>
  )
}

export default ProjectThree
