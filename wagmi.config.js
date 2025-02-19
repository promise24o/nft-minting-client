import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { sepolia } from "wagmi/chains";

const projectId = import.meta.env.VITE_APP_WALLET_PROJECT_ID;

export const config = getDefaultConfig({
  appName: import.meta.env.VITE_APP_NAME || "NFT Minting App",
  projectId, // Use the environment variable
  chains: [sepolia],
  ssr: true,
});