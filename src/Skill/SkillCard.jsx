import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TechTag } from './TechTag'

export function SkillCard({
    icon: Icon,
    title,
    technologies,
    description,
    index,
}) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative group"
        >
            <motion.div
                className="p-8 backdrop-blur-md bg-white/[0.02] rounded-2xl border border-white/[0.05] relative overflow-hidden"
                whileHover={{
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                }}
            >
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-white/[0.07] via-white/[0.05] to-transparent pointer-events-none"
                    animate={{
                        opacity: isHovered ? 1 : 0.5,
                    }}
                />

                <div className="flex items-start justify-between mb-6">
                    <motion.div
                        className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center relative overflow-hidden"
                        animate={{
                            backgroundColor: isHovered
                                ? 'rgba(255,255,255,0.05)'
                                : 'rgba(255,255,255,0.03)',
                        }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent"
                            animate={{
                                opacity: isHovered ? 1 : 0,
                            }}
                        />
                        <Icon className="w-7 h-7 text-white/70 relative z-10" />
                    </motion.div>
                </div>

                <motion.h3
                    className="text-2xl font-bold text-white/90 mb-3 tracking-tight"
                    animate={{
                        scale: isHovered ? 1.02 : 1,
                    }}
                >
                    {title}
                </motion.h3>

                <motion.p
                    className="text-white/50 text-sm leading-relaxed mb-6"
                    animate={{
                        opacity: isHovered ? 0.8 : 0.5,
                    }}
                >
                    {description}
                </motion.p>

                <motion.div
                    className="flex flex-wrap gap-2.5"
                    animate={{
                        scale: isHovered ? 1.02 : 1,
                    }}
                >
                    {technologies.map((tech, i) => (
                        <TechTag key={i} name={tech.name} level={tech.level} />
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
