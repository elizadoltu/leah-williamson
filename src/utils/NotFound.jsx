import React from "react";
import photoNotFound from "../assets/png/not found/photo-not-found.png";

const NotFound = () => {

    const numberOfDivsHor = 5;
    const numberOfDivsVer = 5;

    const RenderDivsHor = () => {
        const divElements = [];
        for (let index = 0; index < numberOfDivsHor; ++index) {
            divElements.push(
                <div key={index} className="h-1px w-1200 bg-font mb-40 mt-40 opacity-20"> </div>
            );
        }

        return divElements;
    }

    // const RenderDivsVer = () => {
    //     const divElements = [];
    //     for (let index = 0; index < numberOfDivsVer; ++index) {
    //         divElements.push(
    //             <div key={index} className="absolute h-1px w-25 bg-font -mt-96 opacity-20 rotate-90"> </div>
    //         );
    //     }

    //     return divElements;
    // }

    return (
      <div className="w-full h-screen bg-background font-apercu-bold text-font flex justify-center items-center overflow-hidden">
        <div>
          {RenderDivsHor()}
          {/* {RenderDivsVer()} */}
        </div>
        <div className="absolute">
          <img src={photoNotFound} alt="photo of leah williamson" />
        </div>
        <div className="absolute -mt-80 -ml-512">
          <h1 className="font-apercu-bold text-14xl mix-blend-exclusion">
            NOT
          </h1>
        </div>
        <div className="absolute mt-80 ml-256">
          <h1 className="font-apercu-bold text-14xl mix-blend-exclusion">
            FOUND
          </h1>
        </div>
      </div>
    );
};

export default NotFound;