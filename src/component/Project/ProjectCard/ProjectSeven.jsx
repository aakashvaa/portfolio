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
                className="flex flex-col-reverse relative  w-[115%] h-[400px]   pxy rounded-md "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="w-full h-full bg-[#00000044] relative rounded-2xl ">
                    <div className="w-full flex mx-auto gap-5 justify-between items-center mt-6 w-1/2 bg-white/5 px-6 py-4 rounded-md h-auto">
                        Scan your CSS/SCSS files for duplicate properties and
                        remove them, keeping the last occurrence.
                        <Github url="/css-dublicates-cleaner" />
                    </div>
                    <div className="w-full flex mx-auto gap-5 justify-between items-center mt-6 w-1/2 bg-white/5 px-6 py-4 rounded-md h-auto">
                        Takes the Screenshot of your system's window and send it
                        to your predefined WhatsApp number.
                        <Github url="/screenshotSender" />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default ProjectSeven
