import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '../../../utils/MediaQuery'
import Github from '../../icons/github'
import Live from '../../icons/live'

function ProjectEight({ el, index }) {
    const { title, imgSrc, links, description, tech } = el

    const [showDetail, setShowDetail] = useState(false)

    const handleMouseEnter = () => {
        setShowDetail(true)
    }

    const handleMouseLeave = () => {
        setShowDetail(false)
    }
    return (
        <>
            <motion.div
                initial={{ y: 70 * index }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', mass: 1, duration: 1 }}
                className="flex flex-col-reverse relative   w-[350px] h-[400px] my-4  pxy rounded-md "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-full h-full bg-[#00000044] relative rounded-2xl  ">
                    <div className="absolute w-[150px] h-[100px] brightness-200  shadow-xl drop-shadow-2xl left-[50px] top-0  -z-50 bg-[#0052aa]   blur-[120px] " />
                    <div className="absolute w-[190px] h-[100px] brightness-200  shadow-xl drop-shadow-2xl left-0 top-0  -z-20 bg-[#0052aa] blur-md" />
                    <div className="absolute w-[190px] h-[100px] brightness-200    shadow-xl drop-shadow-2xl right-0 top-0  -z-20 bg-[#005299]  blur-md" />

                    <div className="m-2  relative  ">
                        <img
                            width={800}
                            height={400}
                            className={`w-[350px] z-10 h-[200px] drop-shadow-lg opacity-90 object-cover rounded-xl `}
                            src={imgSrc}
                            alt="chess"
                        />

                        <AnimatePresence>
                            {showDetail && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 0,
                                        scale: 0.95,
                                        rotateZ: -5,
                                    }}
                                    animate={{
                                        opacity: [0, 1, 1],
                                        y: [0, -150, -100],
                                        scale: [0.95, 1.05, 1],
                                        rotateZ: [-5, 2, 0],
                                        transition: {
                                            duration: 1.2,
                                            times: [0, 0.6, 1],
                                            ease: [0.34, 0.1, 0.3, 1],
                                            y: {
                                                type: 'keyframes',
                                                ease: [
                                                    [0.34, 0.1, 0.3, 1],
                                                    [0.33, 1.2, 0.64, 1],
                                                ],
                                                duration: 0.8,
                                            },
                                            scale: {
                                                type: 'spring',
                                                stiffness: 150,
                                                damping: 10,
                                                delay: 0.2, // Delay scale animation slightly
                                            },
                                            opacity: {
                                                duration: 0.2,
                                                ease: 'easeIn',
                                            },
                                        },
                                    }}
                                    exit={{
                                        opacity: [1, 1, 0],
                                        y: [-100, 100],
                                        rotateZ: [0, 0, -5],
                                        transition: {
                                            duration: 1,
                                            times: [0, 0.5, 1],
                                            ease: [0.36, 0, 0.66, -0.56],

                                            opacity: {
                                                delay: 0.8,
                                                duration: 0.2,
                                                ease: 'easeOut',
                                            },
                                        },
                                    }}
                                    className="absolute -bottom-16 bg-black/10 left-0 backdrop-blur-xl rounded-xl p-6 shadow-2xl  "
                                >
                                    <p className="text-sm text-gray-300 contrast-200 ">
                                        {description}
                                    </p>
                                    <div className="flex flex-wrap justify-balance gap-2 mt-2 mb-6">
                                        {tech.map((name) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs bg-black/10  rounded-full "
                                            >
                                                {name}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div
                        className="absolute  isolate left-0 bottom-0 w-full  h-[60%] backdrop-blur-md rounded-b-2xl rounded-t-sm  px-4 py-2 "
                        style={{
                            background:
                                'linear-gradient( 90deg, #000 0%, rgba(50, 50, 50, 0.6) 50%, #000  100%)',
                        }}
                    >
                        <div className="flex justify-center items-center">
                            <h4 className="px-2 font-thin w-full tracking-widest">
                                {title}
                            </h4>
                            <div className="contents space-x-3">
                                <Github url={links[0]} />
                                <Live url={links[1]} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectEight
