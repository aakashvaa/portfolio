import React, { useState } from 'react'
import { motion } from 'framer-motion'

import GithubIcon from '../../icons/github'

function ProjectSeven() {
    return (
        <>
            <motion.div
                initial={{ y: 70 }}
                whileInView={{
                    y: 0,
                }}
                bg-white
                className="flex flex-col justify-center item-center gap-y-5  relative mx-auto pt-2  w-2/3 rounded-md "
            >
                <div className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:border-white/20 outline-none text-white/90 placeholder-white/40 transition-all duration-200 hover:border-white/10 flex justify-between items-center gap-5">
                    <p>
                        Scan your CSS/SCSS files for duplicate properties and
                        remove them, keeping the last occurrence.
                    </p>

                    <GithubIcon url="/css-dublicates-cleaner" />
                </div>
                <div className="w-full pl-12 pr-4 py-4 bg-white/[0.03] border border-white/[0.05] rounded-xl focus:border-white/20 outline-none text-white/90 placeholder-white/40 transition-all duration-200 hover:border-white/10 flex justify-between items-center gap-5">
                    <p>
                        This tool is useful for quickly sharing screenshots
                        without needing to manually attach and send them through
                        WhatsApp.
                    </p>

                    <GithubIcon url="/screenshotSender" />
                </div>
            </motion.div>
        </>
    )
}

export default ProjectSeven
