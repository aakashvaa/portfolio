import React, { useEffect, useState } from 'react'
import SVG from '../component/SVG'

import Main from '../component/Main/Main'

const gradientStyle = {
    background: ` radial-gradient(farthest-corner at 70px 40px,   transparent 10%, #000000d3 90% )`,
}

const AnimationLogo = () => {
    const [disableSVG, setDisableSVG] = useState(false)
    useEffect(() => {
        const timer = setTimeout(() => setDisableSVG(true), 2500)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div
            className={`flex relative flex-col w-full ${!disableSVG ? ' h-[100vh]  overflow-hidden ' : ''} `}
            style={gradientStyle}
        >
            {!disableSVG ? <SVG /> : <Main />}
        </div>
    )
}

export default AnimationLogo
