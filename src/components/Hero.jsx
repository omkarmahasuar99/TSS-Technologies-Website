import React from "react";
import { Parallax } from "react-parallax";
import EarthOnly from "../assets/Earth_only.png";

function Hero() {
  return (
    <div className="bg-black w-full h-screen text-white">
      <div className="relative w-full h-screen">
        
        <div className="absolute top-[350px] sm:top-1/2 left-1/3 transform -translate-x-1/4 -translate-y-1/2 z-30">
          <h1 className="text-[45px] font-medium text-center mb-5 leading-[60px] sm:text-[75px] sm:leading-[100px]" >Crafting Solutions for a Better Future.</h1>
          <p className="text-[18px] text-center sm:text-[25px]">Innovating Today to Create Products that Shape Tomorrow's World.</p>
        </div>
        <Parallax
          className="absolute w-full h-full"
          renderLayer={(percentage) => (
            <img
              src={EarthOnly}
              alt=""
              className="absolute w-full h-full object-cover object-top z-20"
              style={{ transform: `scale(${0 + percentage})`, transition: 'transform 0.1s linear' }}
            />
          )}
        />
      </div>
    </div>
  );
}

export default Hero;
