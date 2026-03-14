'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import AnimationLogo from './AnimationLogo/AnimationLogo'

// Three.js canvas must be dynamically imported with ssr:false
const AnimationCanvas = dynamic(() => import('./AnimationCanvas/AnimationCanvas'), {
    ssr: false,
    loading: () => null,
})

export default function HeroContainer() {
    return (
        <div className="main">
            <div className="animation absolute">
                <AnimationCanvas />
            </div>
            <div className="h-screen w-full" style={{ zIndex: 100 }}>
                <AnimationLogo />
            </div>
        </div>
    )
}
