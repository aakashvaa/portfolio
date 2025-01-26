import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useMediaQuery } from '../../../utils/MediaQuery'
import Github from '../../icons/github'
import Live from '../../icons/live'

import chess from '../../../assets/githelper.png'
function ProjectEight() {
    const [showDetail, setShowDetail] = useState(false)
    const isSmallScreen = useMediaQuery('(max-width: 1060px)')

    const handleMouseEnter = () => {
        setShowDetail(true)
    }

    const handleMouseLeave = () => {
        setShowDetail(false)
    }
    return (
        <>
            <motion.div
                initial={{ y: 70, x: -70 }}
                whileInView={
                    isSmallScreen
                        ? { y: 0, x: 0 }
                        : {
                              y: 0,
                              x: 0,
                          }
                }
                transition={{ type: 'spring', mass: 1, duration: 1 }}
                className="flex flex-col-reverse relative   w-[350px] h-[400px] my-4   pxy rounded-md "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-full h-full bg-[#00000044] relative rounded-2xl ">
                    {/* <div className="absolute w-[100px] h-[200px]  shadow-sm left-0 bottom-0  -z-20 bg-[#d1d0d1]   blur-sm" /> */}

                    <div className="absolute w-[250px] h-[100px] hue-rotate-60  backdrop-hue-rotate-60 brightness-200  shadow-xl drop-shadow-xl left-[50px] top-0  -z-50 bg-[#00ff00]   blur-[130px]" />
                    <div className="absolute w-[190px] h-[50px] hue-rotate-60  backdrop-hue-rotate-60 brightness-200  shadow-xl drop-shadow-xl left-0 top-0  -z-20 bg-[#00ff00]   blur-md" />

                    <div className="absolute w-[190px] h-[50px] hue-rotate-90 backdrop-hue-rotate-90  brightness-200  shadow-xl drop-shadow-xl right-0 top-0  -z-20 bg-[#00ff00]   blur-md" />
                    <div className="m-2  relative  ">
                        <img
                            width={800}
                            height={400}
                            className={`w-[350px] z-10 h-[200px] drop-shadow-lg opacity-90 object-cover rounded-xl `}
                            src={chess}
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
                                            times: [0, 0.6, 1], // Increased time for 0→-400 portion
                                            ease: [0.34, 0.1, 0.3, 1], // Smoother bezier curve
                                            y: {
                                                type: 'keyframes',
                                                ease: [
                                                    [0.34, 0.1, 0.3, 1], // Smooth ease for 0→-400
                                                    [0.33, 1.2, 0.64, 1], // Different ease for -400→-100
                                                ],
                                                duration: 0.8, // Longer duration for y-axis movement
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
                                        zIndex: -1,
                                        y: [-150, 0],
                                        rotateZ: [0, -3, -5],
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
                                    className="absolute -bottom-16 left-0 backdrop-blur-xl rounded-xl p-6 shadow-2xl  "
                                >
                                    <p className="text-sm text-gray-300 contrast-200 ">
                                        A real-time multiplayer chess game with
                                        move validation, game history, and
                                        interactive board. Features include
                                        pplayer matchmaking, chat functionality,
                                        and game analysis.la
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {[
                                            'React',
                                            'TypeScript',
                                            'Node.js',
                                            'Socket.io',
                                            'Tailwind CSS',
                                        ].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs bg-white/10 rounded-full text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div
                        className="absolute  isolate left-0 bottom-0 w-full  h-[60%] backdrop-blur-sm rounded-b-2xl rounded-t-sm  px-4 py-2 "
                        style={{
                            background:
                                'linear-gradient( 90deg, #000 0%, rgba(50, 50, 50, 0.6) 50%, #000  100%)',
                        }}
                    >
                        <div className="flex justify-center items-center">
                            <h4 className="px-2 font-thin w-full tracking-widest">
                                Chess
                            </h4>
                            <div className="contents space-x-3">
                                <Github url="/chess-fe" />
                                <Live url="https://chess-mu-seven.vercel.app/" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectEight
