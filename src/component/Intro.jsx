import React, { useTransition, useState, useEffect } from "react";
import tw from "twin.macro";
import IntroText from "./IntroText";

const name1 = "Full Stack Developer";
const IntroContainer = tw.div`relative justify-center items-end select-none border-t-[1px] mt-10 xs:mt-0 border-b border-l sm:h-[400px] py-5 sm:py-0 border-[#9e9e9e43] w-[80%] flex flex-col`;

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
      <h1 className="absolute -left-5 -top-3 text-[12px] sm:text-[1em] backdrop-blur-sm p-3">
        I AM A
      </h1>
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
