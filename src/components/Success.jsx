import React from "react";

const Success = ({ nft, mintAnother }) => {
  return (
    <div className="max-w-xl mx-auto bg-[#111827] bg-opacity-50 text-white p-6 rounded-xl shadow-lg border border-green-800 text-center flex flex-col items-center">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#10B98138] bg-opacity-20">
        <i className="fi fi-bs-check text-green-300 text-2xl"></i>
      </div>

      <h4 className="text-green-400 font-bold text-lg mt-4">
        NFT Minted Successfully!
      </h4>
      <p className="text-gray-400">
        Your NFT has been created and added to your collection
      </p>

      <div className="w-80 border border-gray-800 rounded-lg shadow-sm bg-gray-900 transform transition-all duration-300 hover:scale-105 hover:shadow-lg text-start mt-6">
        <img
          className="rounded-t-lg w-full h-56 object-cover"
          src={nft?.imageUrl}
          alt={nft?.name}
        />
        <div className="p-5">
          <span className="text-gray-600 block">NFT Name</span>
          <h5 className="mb-2 text-md font-medium tracking-tight text-white">
            {nft?.name}
          </h5>
          <span className="text-gray-600 block">Description</span>
          <p className="mb-3 text-sm font-normal text-gray-400">
            {nft?.description}
          </p>
          <span className="text-gray-600 block">NFT ID</span>
          <p className="mb-3 text-sm font-normal text-green-400">#{nft?.id}</p>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="space-x-4  md:flex-col sm:space-x-4 space-y-4 md:space-y-0">
          <button className="bg-[#1F2937] bg-opacity-50 text-white py-4 px-7 rounded-md shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 font-medium border border-white hover:bg-opacity-75">
            <i className="fi fi-rr-share"></i> Share
          </button>
          <button
            onClick={mintAnother}
            className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white py-4 px-7 rounded-md shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105 hover:bg-gradient-to-l font-medium"
          >
            <i className="fi fi-sr-cube"></i> Mint Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;
