import './App.css'
import { Suspense } from 'react'
import AnimationCanvas from './component/AnimationCanvas'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'twin.macro'
import AnimationLogo from './AnimationLogo/AnimationLogo.jsx'
const Input = () => <input tw="border hover:border-black" />

function Container() {
  return (
    <main>
      <div className="animation">
        <AnimationLogo />
      </div>
      <div className="animation ">
        <Suspense fallback={<div>Loading...</div>}>
          <AnimationCanvas />
        </Suspense>
      </div>
    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Container />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
