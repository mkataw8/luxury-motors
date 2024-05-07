import React from "react";
import { ReactTyped } from "react-typed";
import video from "./lamborghini.mp4";
const Hero = () => {
  return (
    <div className="" id="process">
      <video className=" h-" src={video} autoPlay loop muted height={100} />

      <div className="bg-gradient-to-b from-stone-200 to-gray-400">
        <div
          className="max-w-[800px] pt-10 w-full h-[400px] mx-auto text-center
       flex-col  justify-center "
        >
          <p className=" flex justify-center font-bold text-2xl text-black">
            Finance up to &nbsp;
            <div className="text-[#c3af2e]">$4.4 Million</div>
          </p>
          <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
            Everchanging Inventory
          </h1>
          <div>
            <p className="md:text-5xl sm:text-4xl text-xl font-bold ">
              Fast, Flexible Finanicng For
            </p>
            <ReactTyped
              className="text-white text-[20px] pt-4 "
              strings={[
                "Lamborghini",
                "Porsche",
                "Ferrari",
                "Mclaren",
                "Finance For All",
              ]}
              typeSpeed={100}
              backSpeed={120}
            />
          </div>
          <button className="bg-slate-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
