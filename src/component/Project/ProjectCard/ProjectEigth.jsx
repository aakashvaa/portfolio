import React, { useRef, useState } from "react";
import uvault from "../../../assets/project1.png";
import { motion } from "framer-motion";

function ProjectEight() {
  const [showDetail, setShowDetail] = useState(false);

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
        viewport={{ once: true }}
        whileInView={{
          y: 150,
          x: 30,
          transition: { type: "spring", mass: 2, duration: 1 },
        }}
        className="flex flex-col-reverse relative  w-[350px] h-[400px]   pxy rounded-md "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full bg-[#00000044] relative rounded-2xl ">
          {/* <div className="absolute w-[100px] h-[200px]  shadow-sm left-0 bottom-0  -z-20 bg-[#d1d0d1]   blur-sm" /> */}

          <div className="absolute w-[150px] h-[50px] hue-rotate-5 backdrop-hue-rotate-30  brightness-200  shadow-xl drop-shadow-2xl left-0 top-0  -z-20 bg-[#005299]   blur-md" />
          <div className="absolute w-[140px] h-[100px] hue-rotate-15  backdrop-hue-rotate-60 brightness-200    shadow-xl drop-shadow-2xl right-0 top-0  -z-20 bg-[#0052bb]   blur-md" />
          <div className="m-2  ">
            <img
              width={800}
              height={400}
              className={`w-[350px] h-[200px] opacity-85 hover:opacity-95 hover:drop-shadow-lg rounded-xl `}
              src={uvault}
              alt="fashion globe"
            />
          </div>
          <div
            className="absolute left-0 bottom-0 w-full  h-[60%] backdrop-blur-sm rounded-b-2xl rounded-t-sm  px-4 py-2 "
            style={{
              background:
                "linear-gradient( 90deg, #000 0%, rgba(50, 50, 50, 0.6) 50%, #000  100%)",
            }}
          >
            <h4 className="px-2 font-thin w-full tracking-widest ">
              Fashion Globe
            </h4>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectEight;
