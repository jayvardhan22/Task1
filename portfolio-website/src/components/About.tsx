import React from "react";
import icon1 from "./assests/Icono (2).png";
import icon2 from "./assests/Icono (1).png";
import colombianImage from "./assests/Group 27 (1).png";
import back from "./assests/Abm graphic (1) (1).png";

const AboutMeCard = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 relative"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "75% 50%",
        backgroundPosition: "center",
      }}
    >
      <h1 className="absolute top-8 left-1/2 transform -translate-x-1/2 text-white text-3xl font-semibold">
        About Me
      </h1>

      <div className="relative bg-white bg-opacity-90 rounded-[40px] p-12 flex items-center justify-between gap-8 w-full max-w-4xl mt-16 shadow-lg">
        <div className="flex-1 flex flex-col items-center text-center">
          <img src={icon1} alt="Responsibility Icon" className="w-16 h-16 mb-3" />
          <p className="text-4xl font-bold text-black">100%</p>
          <p className="text-black font-poppins text-2xl">Responsibility</p>
        </div>

        <div className="absolute top-[-148px] left-1/2 transform -translate-x-1/2 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
          <img
            src={colombianImage}
            alt="Colombian"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="flex-1 flex flex-col items-center text-center">
          <img src={icon2} alt="Punctuality Icon" className="w-16 h-16 mb-3" />
          <p className="text-4xl font-bold text-black">100%</p>
          <p className="text-black font-poppins text-2xl">Punctuality</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
