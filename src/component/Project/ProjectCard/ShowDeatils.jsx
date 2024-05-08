import React from 'react'
import { motion } from 'framer-motion'
function ShowDeatils() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 1,
          },
        }}
        className={`absolute w-[300px] hidden sm:flex  z-50 border-2 backdrop-blur-xl p-5  rounded-md drop-shadow-lg px-3 border-[#b2b2b222]`}
      >
        <h1>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          molestiae quas amet delectus voluptate aut excepturi perferendis sed
        </h1>
      </motion.div>
    </>
  )
}

export default ShowDeatils
