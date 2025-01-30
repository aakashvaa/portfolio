import React, { useRef, useState } from 'react'
import uvault from '../../../assets/uvault.png'
import { motion } from 'framer-motion'
import { useMediaQuery } from '../../../utils/MediaQuery'
import Github from '../../icons/github'
import Live from '../../icons/live'

function ProjectSeven() {
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
                initial={{ y: 70 }}
                whileInView={{
                    y: 0,
                }}
                bg-white
                className="flex flex-col justify-center item-center gap-y-5  relative mx-auto pt-2  w-2/3 rounded-md "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-full relative overflow-hidden h-16 rounded-md before:absolute before:inset-[-50%] before:bg-[conic-gradient(transparent,transparent,#0B3860)] before:animate-spin-slow">
                    <div className="absolute inset-[5px] mx-auto w-[99%] h-16 rounded-md px-10 flex justify-between  items-center bg-[#101010]">
                        Scan your CSS/SCSS files for duplicate properties and
                        remove them, keeping the last occurrence.
                        <Github url="/css-dublicates-cleaner" />
                    </div>
                </div>

                <div className="w-full relative overflow-hidden  h-16 rounded-md before:absolute before:inset-[-50%] before:bg-[conic-gradient(transparent,transparent,#0B3860)] before:animate-spin-slow">
                    <div className="absolute left-[0.5%] mx-auto w-[99%] h-16 rounded-md px-10 flex justify-between  items-center bg-[#101010]">
                        Scan your CSS/SCSS files for duplicate properties and
                        remove them, keeping the last occurrence.
                        <Github url="/css-dublicates-cleaner" />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectSeven
