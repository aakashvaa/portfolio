import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from '../../../utils/MediaQuery'
import Github from '../../icons/github'
import Live from '../../icons/live'

import fashion from '../../../assets/project1.png'
function ProjectSix() {
    const [showDetail, setShowDetail] = useState(false)
    const isSmallScreen = useMediaQuery('(max-width: 1060px)')
    console.log(isSmallScreen)
    const handleMouseEnter = () => {
        setShowDetail(true)
    }

    const handleMouseLeave = () => {
        setShowDetail(false)
    }
    return (
        <>
            <motion.div
                initial={
                    isSmallScreen
                        ? {}
                        : {
                              y: 70,
                              x: 70,
                              opacity: 0,
                          }
                }
                whileInView={
                    isSmallScreen
                        ? { y: 0, x: 0 }
                        : {
                              y: 0,
                              x: 0,
                              opacity: 1,
                          }
                }
                transition={{ type: 'spring', mass: 1, duration: 1 }}
                className="flex flex-col-reverse relative  w-[350px] my-4 h-[400px]   pxy rounded-md backdrop-blur-2xl
        "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-full h-full bg-[#00000044] relative rounded-2xl ">
                    {/* <div className="absolute w-[100px] h-[50px]  shadow-sm left-5 bottom-4 rounded-full  -z-20 bg-[#d1d0d1]   blur-md" />
          <div className="absolute w-[100px] h-[50px] shadow-sm right-5 bottom-4 rounded-full  -z-20 bg-[#d1d0d1]   blur-md" /> */}
                    <div className="absolute w-[250px] h-[100px] hue-rotate-90 backdrop-hue-rotate-90 brightness-200  shadow-xl drop-shadow-xl left-[50px] top-0  -z-50 bg-[#0f00f0]   blur-[120px] " />
                    <div className="absolute w-[190px] h-[100px] hue-rotate-90 backdrop-hue-rotate-90 brightness-200  shadow-xl drop-shadow-xl left-0 top-0  -z-20 bg-[#0f00f0]   blur-md" />

                    <div className="absolute w-[190px] h-[100px] hue-rotate-60  backdrop-hue-rotate-90  brightness-200  shadow-xl drop-shadow-xl right-0 top-0  -z-20 bg-[#0f00f3]   blur-md" />

                    <div className="m-2  ">
                        <img
                            width={800}
                            height={400}
                            className={`w-[350px] drop-shadow-lg h-[200px] object-cover rounded-xl `}
                            src={fashion}
                            alt="fahsion-globe"
                        />
                    </div>
                    <div
                        className="absolute flex flex-col gap-3 left-0 bottom-0 w-full  h-[60%] backdrop-blur-sm rounded-b-2xl rounded-t-sm  px-4 py-2 "
                        style={{
                            background:
                                'linear-gradient( 90deg, #000 0%, rgba(50, 50, 50, 0.6) 50%, #000  100%)',
                        }}
                    >
                        <div className="flex justify-center items-center">
                            <h4 className="px-2 font-thin w-full tracking-widest ">
                                Track Xpenses
                            </h4>
                            <div className="contents space-x-3">
                                <Github url="/track-xpenses" />
                                <Live url="https://know-xpenses.vercel.app/" />
                            </div>
                        </div>
                        <div className="text-[18px] text-[#999] text-start tracking-wide">
                            <ul className="flex flex-col gap-2">
                                <li>
                                    Upload Bank Statement PDF, track
                                    transactions, and visualize your investments
                                </li>

                                <li>
                                    Tech Track : Next.js, TypeScript, Tailwind
                                    CSS, Framer Motion, Zustand
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectSix
