import React, { useEffect } from "react";
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";

const Transition = ({ title, photo }) => {
    
    useEffect(() => {
        gsap.to(".slowmo-entrance", {
            duration: 2, 
            x: "200%",
            ease: SlowMo.ease.config(0.2, 0.9, false),
        })
    }, []);
    
    return (
      <div className="slowmo-entrance loading-screen bg-background w-full h-screen font-apercu text-font -ml-20rem overflow-y-hidden">
        <div className="flex justify-center items-center">
          <img src={photo} alt="photo of Leah Williamson" className="mt-28" />
        </div>
        <div className="z-10 flex flex-row mix-blend-exclusion justify-center items-center -mt-128">
          <h1 className="text-10xl font-apercu-bold">
            {title} 
          </h1>
        </div>
      </div>
    );
};

export default Transition;