import React, { useState } from "react";
import { useAccount } from "wagmi";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MintForm from "../components/MintForm";

const Home = () => {
  const { address } = useAccount();
  const [refreshKey, setRefreshKey] = useState(0); 

  const refreshGallery = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#000000] to-[#111827]">
      <Header />
      <Hero />
      <div className="container mx-auto px-4 py-12">
        <MintForm onSuccess={refreshGallery} />{" "}
        <Gallery key={refreshKey} ownerAddress={address} />{" "}
      </div>
    </div>
  );
};

export default Home;
