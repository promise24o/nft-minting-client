import { useConnectModal } from "@rainbow-me/rainbowkit";
import React from "react";
import { useAccount, useDisconnect } from "wagmi";

const Header = () => {
  const { openConnectModal } = useConnectModal();
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center px-20">
      <div className="flex gap-2 items-center text-underline text-danger">
        <img src="/img/logo.png" alt="NFT Minting Logo" className="h-6 w-6" />
        <span className="text-lg font-normal text-muted">NFT Minting</span>
      </div>

      {isConnected ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-300">
            {address.slice(0, 6)}...{address.slice(-4)}
          </span>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded-full shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
            onClick={() => disconnect()}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <button
          className="bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white py-2 px-4 rounded-full shadow-md transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-105"
          onClick={openConnectModal}
        >
          <i className="fi fi-sr-wallet"></i> Connect Wallet
        </button>
      )}
    </nav>
  );
};

export default Header;
