import "./App.css";
import AnimationCanvas from "./component/AnimationCanvas";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimationLogo from "./AnimationLogo/AnimationLogo.jsx";
import { motion } from "framer-motion";
import { Suspense } from "react";

function HeroContainer() {
  return (
    <motion.div className="main">
      <div className="animation absolute">
        <Suspense fallback={<div>Loading...</div>}>
          <AnimationCanvas />
        </Suspense>
      </div>

      <div className="h-screen w-full" style={{ zIndex: 100 }}>
        <AnimationLogo />
      </div>
    </motion.div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HeroContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
