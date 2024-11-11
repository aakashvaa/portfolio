import React, { useTransition, useState, useEffect } from "react";
import tw from "twin.macro";
import IntroText from "./IntroText";

const name1 = "Full Stack Developer";
const IntroContainer = tw.div`relative justify-center items-end select-none border-t-[1px] mt-10 xs:mt-0 border-b border-l sm:h-[400px] py-5 sm:py-0 border-[#9e9e9e43] w-[80%] flex flex-col`;

const BlurWhite = tw.div`w-[120px]  h-[120px]   scale-[6]  -z-[40] -left-[80%] top-[10%] rounded-full absolute  bg-[#fff] blur-[70px]`;

const BlurBlue = tw.div`w-[120px] h-[120px] scale-[7]  rounded-full  -z-[40] absolute left-[-90%] top-[10%] bg-[#1d2486] blur-[100px]`;

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
        I AM A
      </h1>
      <BlurBlue />
      <BlurWhite />
      <div className="absolute w-[140px] scale-[5]  h-[140px] rounded-full rotate-30 shadow-3xl -left-[40%]   -backdrop-hue-rotate-180  top-0  -z-20 bg-[#E75236]   blur-[70px]" />
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
