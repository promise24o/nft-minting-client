import React, { useState } from "react";
import { toast } from "react-toastify";
import { parseEther } from "viem";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import axiosClient from "../utils/axiosClient";
import NFT_ABI from "../utils/NFT_ABI.json";
import Success from "./Success";

const CONTRACT_ADDRESS = import.meta.env.VITE_APP_CONTRACT_ADDRESS;

const MintForm = ({ onSuccess }) => {
  const [nftName, setNftName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isMinting, setIsMinting] = useState(false);
  const [mintedNFT, setMintedNFT] = useState(null); // Track minted NFT

  const { isConnected, address } = useAccount();
  const { writeContract } = useWriteContract();
  const { data: checkIdResult, refetch } = useReadContract({
    address: CONTRACT_ADDRESS,
    abi: NFT_ABI,
    functionName: "checkId",
  });

  const generateRandomId = async () => {
    let newId, exists;
    do {
      newId = Math.floor(Math.random() * 1000000);
      const response = await refetch({ args: [newId] });
      exists = response?.data;
    } while (exists);
    return newId;
  };

  const storeNFTMetadata = async (nftId) => {
    try {
      const response = await axiosClient.post("/api/nft/", {
        nftId,
        name: nftName,
        description,
        logoUrl: imageUrl,
        ownerAddress: address,
      });
      return response.data;
    } catch {
      return null;
    }
  };

  const handleMint = async () => {
    if (!isConnected) return toast.error("Please connect your wallet first.");
    setIsMinting(true);

    try {
      const tokenId = await generateRandomId();
      const metadataStored = await storeNFTMetadata(tokenId);
      if (!metadataStored) throw new Error("Failed to store metadata");

      await writeContract({
        address: CONTRACT_ADDRESS,
        abi: NFT_ABI,
        functionName: "mint",
        args: [tokenId, imageUrl],
        value: parseEther("0.01"),
      });

      onSuccess();

      // Save minted NFT details
      setMintedNFT({
        id: tokenId,
        name: nftName,
        description,
        imageUrl,
      });

      // Clear form
      setNftName("");
      setDescription("");
      setImageUrl("");
      toast.success("NFT minted successfully!");
    } catch {
      toast.error("Minting failed.");
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <>
      {mintedNFT ? (
        <Success nft={mintedNFT} mintAnother={() => setMintedNFT(null)} />
      ) : (
        <div className="max-w-xl mx-auto bg-[#111827] bg-opacity-50 text-white p-6 rounded-xl shadow-lg border border-gray-800">
          <h2 className="text-2xl font-medium mb-6">Mint Your NFT</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm mb-2 text-gray-500">
                NFT Name
              </label>
              <input
                type="text"
                className="w-full p-2 py-3 rounded bg-gray-700"
                placeholder="Enter NFT name"
                value={nftName}
                onChange={(e) => setNftName(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-500">
                Description
              </label>
              <textarea
                className="w-full p-2 rounded bg-gray-700"
                placeholder="Describe your NFT"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm mb-2 text-gray-500">
                Image URL
              </label>
              <input
                type="text"
                className="w-full p-2 py-3 rounded bg-gray-700"
                placeholder="Enter Image URL"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>
            <button
              className={`w-full py-4 px-7 rounded-md shadow-md transition-all duration-300 font-medium ${
                isConnected && !isMinting
                  ? "bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white cursor-pointer hover:shadow-lg hover:scale-105"
                  : "bg-gray-500 cursor-not-allowed"
              }`}
              onClick={handleMint}
              disabled={!isConnected || isMinting}
            >
              {isMinting ? "Minting..." : "Mint NFT"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MintForm;
