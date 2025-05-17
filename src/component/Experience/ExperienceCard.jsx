import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar } from 'lucide-react'
import { experiences } from '../../utils/constant'
import { TechTag} from "../../Skill/TechTag.jsx"
function ExperienceCard({ year, title, company, description, index, technologies }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative overflow-hidden rounded-xl ml-5"
        >
            <motion.div
                className="absolute left-[0px] top-1 w-6 h-6 rounded-full blur-xl  flex items-center justify-center border border-white/20"
                animate={{
                    scale: isHovered ? 1.1 : 1,
                    backgroundColor: isHovered
                        ? 'rgba(255,255,255,0.8)'
                        : 'rgba(255,255,255,0.01)',
                }}
            />
            <motion.div
                initial={{ opacity: 0.8 }}
                animate={{ opacity: isHovered ? 1 : 0.8 }}
                className="absolute right-0 top-3 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center border border-white/20"
            >
                <Calendar className="w-3 h-3 text-white/70" />
            </motion.div>

            <motion.div
                className="p-6 mr-10 backdrop-blur-md bg-white/[0.02] rounded-2xl border border-white/[0.05] relative overflow-hidden"
                whileHover={{
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.07] to-transparent pointer-events-none"
                    animate={{
                        opacity: isHovered ? 1 : 0.5,
                    }}
                />

                <motion.span
                    className="text-white/50 text-sm font-medium"
                    animate={{
                        color: isHovered
                            ? 'rgba(255,255,255,0.7)'
                            : 'rgba(255,255,255,0.5)',
                    }}
                >
                    {year}
                </motion.span>

                <motion.h3
                    className="text-xl font-bold text-white/90 mt-2"
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovered ? 1.005 : 1 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                    {title}
                </motion.h3>

                <div className="flex items-center gap-2 mt-1">
                    <Briefcase className="w-4 h-4 text-white/40" />
                    <span className="text-white/60">{company}</span>
                </div>

                <motion.p className="text-white/50 tracking-wide mt-3 text-sm leading-relaxed">
                    {description.map((item, index) => (
                        <p
                            key={index}
                        className={ isHovered ? 'text-white/70' : 'text-white/60'}
                        >
                            {item}
                        </p>
                    ))}
                </motion.p> 
                <div
                    className="flex pt-4 flex-wrap gap-2.5 text-[5px]"
                  
                >
                {technologies.map((tech, i) => (
                        <TechTag key={i} name={tech.name} level={tech.level} />
                    ))}
            </div>
            </motion.div>
        </motion.div>
    )
}

function Experience() {
    return (
        <div
            id="experience"
            className="relative font-abel w-[80%] p-3 gap-11 pt-28 justify-center items-center flex flex-col mx-auto"
        >
            <h1 className=" w-full text-center text-[3em]">Experience</h1>

            <div className="relative z-10 w-full max-w-4xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key="experience"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="relative"
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute right-[13px]  top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/[0.05] via-white/[0.1] to-transparent translate-y-5"
                        />
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <ExperienceCard
                                    key={index}
                                    {...exp}
                                    index={index}
                                />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Experience
