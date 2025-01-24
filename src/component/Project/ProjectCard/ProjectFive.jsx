import React, { useRef, useState } from "react";
import trello from "../../../assets/trello.png";
import { motion } from "framer-motion";
import { useMediaQuery } from "../../../utils/MediaQuery";
import Github from "../../icons/github";
import Live from "../../icons/live";

function ProjectFive() {
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
        initial={
          isSmallScreen
            ? { y: 0, x: 0, opacity: 0 }
            : { y: 70, x: -70, opacity: 0 }
        }
        whileInView={
          isSmallScreen
            ? { y: 0, opacity: 1 }
            : {
                y: 0,
                x: 0,
                opacity: 1,
              }
        }
        tansition={{ type: "spring", mass: 1, duration: 1 }}
        className="flex flex-col-reverse relative  w-[350px] h-[400px]   pxy rounded-md "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full bg-[#00000044] relative rounded-2xl ">
          {/* <div className="absolute w-[100px] h-[50px]  shadow-sm left-5 bottom-5  -z-20 bg-[#d1d0d1]   blur-sm" />
          <div className="absolute w-[150px] h-[50px] shadow-sm right-5 bottom-5  -z-20 bg-[#d1d0d1]   blur-sm" /> */}
          <div className="absolute w-[250px] h-[100px]  hue-rotate-60 brightness-200  shadow-xl drop-shadow-xl left-[50px] top-0  -z-50 bg-[#ffff00]  blur-[120px]" />
          <div className="absolute w-[190px] h-[50px]  hue-rotate-60 brightness-200  shadow-xl drop-shadow-xl left-0 top-0  -z-20 bg-[#ffff00]  blur-md" />

          <div className="absolute w-[190px] h-[50px]  hue-rotate-60   shadow-xl drop-shadow-xl right-0 top-0 -z-20 bg-[#ffff00]  blur-md" />
          <div className="m-2  ">
            <img
              width={800}
              height={400}
              className={`w-[350px] h-[200px] opacity-90 drop-shadow-lg  rounded-xl  object-cover`}
              src={trello}
              alt="trello"
            />
          </div>
          <div
            className="absolute left-0 bottom-0 w-full   h-[60%] backdrop-blur-sm rounded-b-2xl rounded-t-sm  px-4 py-2 "
            style={{
              background:
                "linear-gradient( 90deg, #000 0%, rgba(50, 50, 50, 0.6) 50%, #000  100%)",
            }}
          >
            <div className="flex justify-center items-center">
              <h4 className="px-2 font-thin w-full tracking-widest">xPenses Tracker</h4>
              <div className="contents space-x-3">
                <Github url="/trelloClient" />
                <Live url="https://trello-client-r7bt.vercel.app" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectFive;
