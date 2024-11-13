import React, { useRef, useState } from "react";
import uvault from "../../../assets/uvault.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../../utils/MediaQuery";
import Github from "../../icons/github";
import Live from "../../icons/live";

function ProjectSeven() {
  const [showDetail, setShowDetail] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 1060px)");
  const handleMouseEnter = () => {
    setShowDetail(true);
  };

  const handleMouseLeave = () => {
    setShowDetail(false);
  };
  return (
    <>
      <motion.div
        initial={{ y: -100 }}
        whileInView={
          isSmallScreen
            ? { y: 0 }
            : {
                y: isSmallScreen ? 0 : 150,
                x: isSmallScreen ? 0 : -20,
              }
        }
        transition={{ type: "spring", mass: 1, duration: 0.7, stiffness: 50 }}
        className="flex flex-col-reverse relative  w-[350px] h-[400px]   pxy rounded-md "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full bg-[#00000044] relative rounded-2xl ">
          {/* <div className="absolute w-[150px] h-[200px] shadow-sm right-0 bottom-0  -z-20 bg-[#d1d0d1]   blur-sm" /> */}

          <div className="absolute w-[150px] h-[50px]    brightness-200  shadow-xl drop-shadow-2xl left-0 top-0  -z-20 bg-[#005299]   blur-md" />
          <div className="absolute w-[140px] h-[100px]   brightness-200    shadow-xl drop-shadow-2xl right-0 top-0  -z-20 bg-[#0052bb]   blur-md" />

          <div className="m-2  ">
            <img
              width={800}
              height={400}
              className={`w-[350px] h-[200px] opacity-90 drop-shadow-lg object-cover rounded-xl `}
              src={uvault}
              alt="project1"
            />
          </div>
          <div
            className="absolute left-0 bottom-0 w-full  h-[60%] backdrop-blur-sm rounded-b-2xl rounded-t-sm  px-4 py-2 "
            style={{
              background:
                "linear-gradient( 90deg, #000 0%, rgba(50, 50, 50, 0.6) 50%, #000  100%)",
            }}
          >
            <div className="flex justify-center items-center">
              <h4 className="px-2 font-thin w-full tracking-widest">uVault</h4>
              <div className="contents space-x-3">
                <Github url="/uvault-client" />
                <Live url="https://uvault-phi.vercel.app" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectSeven;
