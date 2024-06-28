import React, { useEffect, useState } from "react";
import Transition from "../utils/TransitionPage";
import { gsap } from "gsap";
import PhotoCareerTransition from "../assets/png/transition/transition-photo-career.png";
import PhotoOfLeah from "../assets/png/career/photo-career-1.png";
import PhotoOfLeah1 from "../assets/png/career/photo-career-2.png";

const Career = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (!loading) {
      gsap.to(".loading-screen", {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.set(".loading-screen", { display: "none" });
        },
      });
    }
  }, [loading]);

  const Render = () => {
    return (
      <div className="text-font font-urbanist relative p-0 h-auto">
        <div className="mt-8 ml-8 font-extralight">
          <p>Arsenal</p>
          <p>England</p>
          <p>2014-Present</p>
        </div>
        <div className="-mt-10">
          <div className="font-apercu text-10xl flex justify-center ml-96">
            <h1>CAREER</h1>
          </div>
          <div className="flex justify-end mr-400 -mt-20 mb-1 text-lg font-extralight">
            <p>Appearances</p>
          </div>
          <div className="h-1px bg-font w-1200 opacity-20 z-0 flex justify-end ml-28"></div>
          <div className="h-1px bg-font w-1200 opacity-20 z-0 flex justify-end ml-28 mt-96"></div>
          <div className="absolute ml-28 mt-2">
            <p>Goals & Assists</p>
          </div>
          <div className="absolute mix-blend-exclusion text-10xl font-apercu ml-28 -mt-5">
            <h1>STATS</h1>
          </div>
          <div className="flex justify-center items-center -mt-256 z-10 relative ml-44">
            <img
              src={PhotoOfLeah}
              alt="photo of leah williamson in arsenal shirt"
            />
            <div className="text-xl flex justify-end flex-col ml-10 mt-40">
              <p className="font-extralight">
                <span className="font-bold">Appearances: </span>220+
              </p>
              <p className="font-extralight">
                <span className="font-bold">Goals: </span>5+
              </p>
              <p className="font-extralight">
                <span className="font-bold">Assists: </span>10+
              </p>
              
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-background w-full overflow-x-hidden h-screen">
      <Transition title="Career" photo={PhotoCareerTransition} />
      {!loading && <Render />}
    </div>
  );
};

export default Career;
