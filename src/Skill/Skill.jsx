import React from 'react'
import { motion } from 'framer-motion'
import { SkillCard } from './SkillCard'
import { skills } from '../utils/constant'

export function SkillsSection() {
    return (
        <section
            id="skills"
            className="font-abel relative w-[100%] md:w-[90%] mt-20 p-3  h-auto flex flex-col gap-16 justify-center items-center "
        >
            <h1 className="text-4xl font-bold text-white/90 mb-6">Skills</h1>

            <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4"
            >
                {skills.map((skill, index) => (
                    <SkillCard key={index} {...skill} index={index} />
                ))}
            </motion.div>
        </section>
    )
}
