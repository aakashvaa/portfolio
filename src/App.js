import './App.css'
import AnimationCanvas from './component/AnimationCanvas'
import AnimationLogo from './AnimationLogo/AnimationLogo.jsx'
import { Suspense } from 'react'

function HeroContainer() {
    return (
        <div className="main">
            <div className="animation absolute">
                <Suspense fallback={<div>Loading...</div>}>
                    <AnimationCanvas />
                </Suspense>
            </div>

            <div className="h-screen w-full" style={{ zIndex: 100 }}>
                <AnimationLogo />
            </div>
        </div>
    )
}

function App() {
    return <HeroContainer />
}

export default App
