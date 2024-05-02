import React from "react";
import profilePicture from "../assets/png/landing/profile-photo.png";
import MenuHeader from "../components/MenuHeader";

const Landing = () => {
  const data = ["Arsenal", "England", "Defender"];

  return (
    <div className="h-auto landing-content bg-background w-full relative">
      <MenuHeader />
      <div className="flex flex-col font-apercu text-font text-[15rem] ml-52">
        <h1 className="-ml-4">LEAH</h1>
        <div className="flex flex-col">
          <div className="text-font font-extralight text-lg font-urbanist absolute -mt-24 ml-1">
            +
          </div>
          <div className="text-font font-extralight text-lg font-urbanist absolute right-0 -mt-24 mr-72">
            -
          </div>
          <h1 className="mix-blend-exclusion -mt-40 z-20">WILLIAMSON</h1>
          <div className="absolute mt-28 right-0 mr-72">
            <p className="font-urbanist font-extralight text-lg">Footballer</p>
          </div>
        </div>
      </div>
      <div className="absolute z-0 ml-52 -mt-12">
        <div className="h-1px w-1200 bg-font opacity-20"></div>
        <div className="h-1px w-1200 bg-font opacity-20 mt-28"></div>
        <div className="h-1px w-1200 bg-font opacity-20 mt-28"></div>
        <div className="h-1px w-1200 bg-font opacity-20 mt-28"></div>
      </div>
      <div className="relative z-10 flex justify-center items-center -mt-80">
        <img src={profilePicture} alt="photo of Leah Williamson" />
      </div>
      <div className="flex justify-between items-center -mt-32">
        <div className="text-font font-urbanist font-extralight text-lg ml-20 mt-20">
          {data.map((club, index) => (
            <div key={index}>
              <p>{club}</p>
            </div>
          ))}
        </div>
        <div className="font-apercu text-[15rem] text-stroke text-transparent -mr-10">
          <h2>ATHLETE</h2>
        </div>
      </div>
      <div className="text-font font-extralight absolute">+</div>
    </div>
  );
};

export default Landing;
