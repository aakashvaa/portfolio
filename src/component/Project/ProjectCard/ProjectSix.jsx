import React, { useRef, useState } from "react";
import uvault from "../../../assets/githelper.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../../utils/MediaQuery";

function ProjectSix() {
  const [showDetail, setShowDetail] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width: 1060px)");
  console.log(isSmallScreen);
  const handleMouseEnter = () => {
    setShowDetail(true);
  };

  const handleMouseLeave = () => {
    setShowDetail(false);
  };
  return (
    <>
      <motion.div
        initial={
          isSmallScreen
            ? {}
            : {
                y: -100,
                x: -100,
                opacity: 0.8,
              }
        }
        whileInView={
          isSmallScreen
            ? {}
            : {
                y: -100,
                x: 400,
              }
        }
        transition={{ type: "spring", mass: 1, duration: 1 }}
        className="flex flex-col-reverse relative  w-[350px] my-4 h-[400px]   pxy rounded-md backdrop-blur-2xl
        "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full bg-[#00000044] relative rounded-2xl ">
          {/* <div className="absolute w-[100px] h-[50px]  shadow-sm left-5 bottom-4 rounded-full  -z-20 bg-[#d1d0d1]   blur-md" />
          <div className="absolute w-[100px] h-[50px] shadow-sm right-5 bottom-4 rounded-full  -z-20 bg-[#d1d0d1]   blur-md" /> */}
          <div className="absolute w-[190px] h-[50px] hue-rotate-60  backdrop-hue-rotate-60 brightness-200  shadow-xl drop-shadow-xl left-0 top-0  -z-20 bg-[#00ff00]   blur-md" />

          <div className="absolute w-[190px] h-[50px] hue-rotate-90 backdrop-hue-rotate-90  brightness-200  shadow-xl drop-shadow-xl right-0 top-0  -z-20 bg-[#00ff00]   blur-md" />
          <div className="m-2  ">
            <img
              width={800}
              height={400}
              className={`w-[350px] h-[200px] opacity-90 object-cover rounded-xl `}
              src={uvault}
              alt="githelper"
            />
          </div>
          <div
            className="absolute left-0 bottom-0 w-full  h-[60%] backdrop-blur-sm rounded-b-2xl rounded-t-sm  px-4 py-2 "
            style={{
              background:
                "linear-gradient( 90deg, #000 0%, rgba(50, 50, 50, 0.6) 50%, #000  100%)",
            }}
          >
            <h4 className="px-2 font-thin w-full tracking-widest">
              Git Helper
            </h4>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectSix;
