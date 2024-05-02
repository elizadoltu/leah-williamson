import React, { useEffect } from "react";
import profilePhoto from "../assets/png/landing/profile-photo.png";
import { gsap } from "gsap";
import { SlowMo } from "gsap/EasePack";

const LoadingPage = () => {
  useEffect(() => {
    gsap.to(".slowmo-entrance", {
      duration: 3, 
      x: "200%", 
      ease: SlowMo.ease.config(0.2, 0.8, false), 
    });
  }, []);

  return (
    <div className="slowmo-entrance loading-screen bg-background w-full h-screen font-apercu text-font -ml-20rem overflow-y-hidden">
      <div className="flex justify-center items-center">
        <img
          src={profilePhoto}
          alt="photo of Leah Williamson"
          className="mt-28"
        />
      </div>
      <div className="z-10 flex flex-row mix-blend-exclusion items-center -mt-128 ml-20">
        <h1 className="text-10xl">
          LEAH <span className="font-apercu-bold">WILLIAMSON</span>
        </h1>
        <h3 className="-mt-40">TM</h3>
      </div>
    </div>
  );
};

export default LoadingPage;
