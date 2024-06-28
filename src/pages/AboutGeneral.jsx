import React, { useEffect, useState } from "react";
import Transition from "../utils/TransitionPage";
import aboutPhotoHeader from "../assets/png/about/photo-general-1.png";
import { gsap } from "gsap";
import PhotoAboutTransition from "../assets/png/transition/transition-photo-about.png";
import aboutPhotoStage from "../assets/png/about/photo-general-2.png";
import { NavLink } from "react-router-dom";

const AboutGeneral = () => {
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
      <div className="w-full h-auto text-font font-urbanist relative p-0">
        <div className="flex justify-between text-xl w-96 mt-20 ml-24">
          <div className="font-bold">
            <NavLink to="/General">
              <p>General</p>
            </NavLink>
          </div>
          <div className="font-bold">
            <NavLink to="/Arsenal">
              <p>Arsenal</p>
            </NavLink>
          </div>
          <div className="font-bold">
            <NavLink to="/England">
              <p>England</p>
            </NavLink>
          </div>
        </div>
        <div className="flex justify-start ml-96 mt-16">
          <div>
            <div className="flex justify-start items-center">
              <div className="absolute -mt-36 ml-5">
                <p>+</p>
              </div>
              <div className="text-font font-apercu text-10xl">ABOUT</div>
            </div>
            <div className="flex items-center">
              <div className="-mt-32 -ml-16">
                <img src={aboutPhotoHeader} alt="image of leah williamson" />
              </div>
              <div>
                <div>
                  <p>-</p>
                </div>
                <div className="text-xl ml-64">
                  <p className="font-extralight">
                    <span className="font-apercu">Born:</span> March 29, 1997
                  </p>
                  <p className="font-extralight">
                    <span className="font-apercu">Hometown:</span> Milton Keynes
                  </p>
                  <p className="font-extralight">
                    <span className="font-apercu">Height:</span> 1.7m
                  </p>
                  <p className="font-extralight">
                    <span className="font-apercu">Position&#40;s&#41;:</span> CB
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-64 flex justify-center">
          <div>
            <div className="flex justify-end mr-40">
              <div className="flex items-center">
                <div>
                  <div className="flex justify-end">+</div>
                  <div className="h-1px w-25 bg-font opacity-30"></div>
                </div>
                <div className="font-apercu text-[15rem] text-stroke text-transparent opacity-90">
                  <h1>EARLY</h1>
                </div>
              </div>
            </div>
            <div className="flex justify-end mr-96 -mt-40">
              <div className="flex items-center">
                <div>
                  <div className="flex justify-end">-</div>
                  <div className="h-1px w-25 bg-font opacity-30"></div>
                </div>
                <div className="font-apercu text-[15rem] text-font z-20 mix-blend-exclusion">
                  <h1>STAGE</h1>
                </div>
              </div>
            </div>
            <div className="flex mr-28 -mt-96 z-10 items-center justify-end relative">
              <div className="text-right mr-40 mt-64 text-xl font-light">
                <p className="w-20rem">
                  <span className="font-bold">Leah Cathrine Williamson's</span> football journey is a tale of
                  unwavering passion in a divided household. Raised amidst
                  Tottenham Hotspur and Arsenal F.C. rivalry, Leah's allegiance
                  to Arsenal, passed down from her mother and grandmother, never
                  wavered.
                </p>
                <p className="w-20rem mt-10">
                  {" "}
                  Her football adventure began when her mother drove miles to
                  make Leah's dream of being an Arsenal mascot a reality.{" "}
                </p>
              </div>
              <div>
                <img
                  src={aboutPhotoStage}
                  alt="image of leah williamson as a child"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-background w-full overflow-x-hidden h-screen">
      <Transition title="About" photo={PhotoAboutTransition} />
      {!loading && <Render />}
    </div>
  );
};

export default AboutGeneral;
