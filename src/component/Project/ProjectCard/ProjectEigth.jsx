import React, { useRef, useState } from 'react'
import project1 from '../../../assets/project1.png'
import { motion } from 'framer-motion'
function ProjectEigth() {
  const [showDetail, setShowDetail] = useState(false)
  const timeoutRef = useRef(null)

  const handleMouseEnter = () => {
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
        initial={{ y: -100 }}
        whileInView={{
          y: 0,

          transition: { type: 'spring', duration: 1 },
        }}
        viewport={{ once: true }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex relative flex-col w-[250px] h-[180px] "
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
            className={`absolute sm:flex flex-col  hidden w-[300px] h-full justify-between bottom-0 -right-5 items-center  z-50 border-2 backdrop-blur-xl  rounded-md drop-shadow-lg p-3 border-[#b2b2b222]`}
          >
            <h1>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo m necessitatibus quod modi dignissimos vel sequi.
            </h1>
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
      </motion.div>{' '}
    </>
  )
}

export default ProjectEigth
