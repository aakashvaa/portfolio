import './App.css'
import AnimationCanvas from './component/AnimationCanvas'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnimationLogo from './AnimationLogo/AnimationLogo.jsx'
import Main from './component/Main/Main.jsx'
import { useScroll, motion } from 'framer-motion'

function HeroContainer() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div>
      {/* <div className="animation ">
        <Suspense fallback={<div>Loading...</div>}>
          <AnimationCanvas />
        </Suspense>
      </div> */}
      <div className="h-screen  w-full" style={{ zIndex: 100 }}>
        <AnimationLogo />
      </div>
      <h1 style={{ opacity: scrollYProgress }} className="bg-white">
        Akash{' '}
      </h1>

      <Main style={{ scale: scrollYProgress }} />
    </motion.div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HeroContainer />} />
        <Route path="/about" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
