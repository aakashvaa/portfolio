import React, { useTransition, useState, useEffect } from "react";
import tw from "twin.macro";
import IntroText from "./IntroText";

const name1 = "Full Stack Developer";
const IntroContainer = tw.div`relative justify-center items-end select-none border-t-[1px] mt-10 xs:mt-0 border-b border-l sm:h-[400px] py-5 sm:py-0 border-[#9e9e9e43] w-[80%] flex flex-col`;

const BlurWhite = tw.div`w-[220px]  h-[220px] sm:w-[120px]  sm:h-[120px]  sm:scale-[6]  -z-[40] -left-[95%]    top-[10%] rounded-full absolute  bg-[#fff] blur-[70px]`;

const BlurBlue = tw.div`w-[220px] h-[220px]   sm:scale-[6] scale-[3]  rounded-full  -z-[40] absolute -left-[90%]  top-0 bg-[#1d2486] blur-[200px]`;

function Intro() {
  const [isPending, startTransition] = useTransition();
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setShowText(true);
    });
  }, []);

  return (
    <IntroContainer>
      <h1 className="absolute -left-5 -top-3 text-[12px]   rounded-xl sm:text-[1em] backdrop-blur-sm p-3">
        I AM
      </h1>
      {/* <BlurBlue /> */}
      {/* <BlurWhite /> */}
      <div className="absolute w-[100px] scale-[8] hidden sm:block h-[100px] rounded-full rotate-30 -left-[75%]  sm:-left-[60%]  top-[400px]  -z-20 bg-[#1d24cc]   blur-[200px]" />
      <div className="flex text-[#d4defc] gap-x-1">
        {name1.split("").map((text, i) => (
          <IntroText
            key={i}
            text={text}
            i={i}
            isVisible={showText}
            delay={i * 0.1} // Stagger the animation
          />
        ))}
      </div>
    </IntroContainer>
  );
}

export default Intro;
