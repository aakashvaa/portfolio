import React, { useState } from 'react'
import { motion } from 'framer-motion'

export function TechTag({ name }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative"
        >
            <motion.div
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] inline-flex items-center gap-3 group "
                animate={{
                    backgroundColor: isHovered
                        ? 'rgba(255,255,255,0.05)'
                        : 'rgba(255,255,255,0.03)',
                }}
            >
                <span className="text-white/90 text-sm font-medium tracking-wide">
                    {name}
                </span>
            </motion.div>
        </motion.div>
    )
}
