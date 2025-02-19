import React from "react";

const Hero = () => {
  return (
    <div className="text-white py-20 px-8">
      <div className="max-w-xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold mb-4">
          Discover & Collect <br /> Extraordinary NFTs
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Enter the world of digital art and collectibles. Explore unique NFTs
          created by artists worldwide.
        </p>
        <div className="space-x-4  md:flex-col sm:space-x-4 space-y-4 md:space-y-0">
          <button className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white py-4 px-7 rounded-md shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-gradient-to-l font-medium">
            <i className="fi fi-br-rocket-lunch mr-1"></i> Start Creating
          </button>
          <button className="bg-[#1F2937] bg-opacity-50 text-white py-4 px-7 rounded-md shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 font-medium border border-white hover:bg-opacity-75">
            <i className="fi fi-sr-play-circle mr-1"></i> Watch Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
