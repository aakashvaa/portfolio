import React, { useRef, useState } from "react";
import uvault from "../../../assets/uvault.png";
import { motion } from "framer-motion";

function ProjectSeven() {
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
        initial={{ y: 100 }}
        viewport={{ once: true }}
        whileInView={{
          y: 0,
          transition: { type: "spring", duration: 1 },
        }}
        className="flex flex-col-reverse relative  w-[350px] h-[400px]   pxy rounded-md "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full h-full bg-[#00000044] relative rounded-2xl ">
          <div className="absolute w-[50px] h-[300px] rotate-45 shadow-2xl left-[50%]  -z-20 bg-white   blur-3xl">
            {" "}
          </div>
          <div className="m-2  ">
            <img
              width={800}
              height={400}
              className={`w-[350px] h-[200px] opacity-85 hover:opacity-95 hover:drop-shadow-lg rounded-xl `}
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
            <h4 className="px-2 ">uVault</h4>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default ProjectSeven;
