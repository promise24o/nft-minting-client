import React, { useEffect, useState } from "react";
import axiosClient from "../utils/axiosClient";

const Gallery = ({ ownerAddress }) => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ownerAddress) {
      setNfts([]); // Clear NFTs if no wallet is connected
      setLoading(false);
      return;
    }

    const fetchGallery = async () => {
      setLoading(true);
      try {
        const response = await axiosClient.get(
          `/api/nft/gallery/${ownerAddress}`
        );
        setNfts(response.data || []);
      } catch (error) {
        console.error("Failed to fetch gallery", error);
        setNfts([]); // Ensure NFTs array is empty on error
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, [ownerAddress]);

  return (
    <div className="px-10 mt-20">
      <h2 className="text-2xl font-bold mb-6 text-white">Your NFT Gallery</h2>

      {!ownerAddress ? (
        <p className="text-gray-400">
          Please connect your wallet to view your NFTs.
        </p>
      ) : loading ? (
        <p className="text-gray-400">Loading NFTs...</p>
      ) : nfts.length === 0 ? (
        <p className="text-gray-400">
          No NFTs found, please mint your first one using the widget above.
        </p>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {nfts.map((nft) => (
            <div
              key={nft.nftId}
              className="w-80 border border-gray-800 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <img
                className="rounded-t-lg w-full h-56 object-cover"
                src={nft.logoUrl}
                alt={nft.name}
              />
              <div className="p-5">
                <h5 className="mb-2 text-md font-medium tracking-tight text-white">
                  {nft.name}
                </h5>
                <p className="mb-3 text-sm font-normal text-gray-400">
                  {nft.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Gallery;
