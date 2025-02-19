🚀 NFT Minting DApp - React + Vite

This project is a Fullstack NFT Minting DApp where users can mint NFTs on the Sepolia test network. The dApp allows users to connect their wallet, generate a unique NFT ID, store metadata in the backend, and interact with a smart contract to mint the NFT.

📌 Features

🦄 Mint NFTs on the blockchain

🎨 NFT Gallery displaying user-owned NFTs

💳 Wallet Connection using Wagmi & RainbowKit

📡 Smart Contract Interaction using Viem

⚡ High performance with React + Vite

🛠 Backend API for storing NFT metadata

📝 Swagger API Documentation

🛠 Tech Stack

Frontend

React (Vite)

Tailwind CSS

Wagmi + RainbowKit (Wallet Connection)

Viem (Smart Contract Interaction)

Axios (API Requests)

React Toastify (Notifications)

Backend

Node.js + Express

MongoDB (NFT Metadata Storage)

Prisma (Database ORM)

Ethereum Smart Contract (Solidity)

Swagger (API Documentation)

🚀 Getting Started

1️⃣ Clone the repository

git clone https://github.com/promise24o/nft-minting-client/
cd nft-minting-client

2️⃣ Install dependencies

npm install

3️⃣ Set up environment variables

Create a .env file in the root directory and add:

VITE_APP_CONTRACT_ADDRESS=<YOUR_SMART_CONTRACT_ADDRESS>
VITE_APP_BACKEND_URL=<YOUR_BACKEND_URL>

4️⃣ Run the project

npm run dev

  
## API Routes

### **POST `/api/nft/`**
Stores metadata for a newly minted NFT.

**Request Body:**
{
  "nftId": 1,
  "name": "Cool NFT",
  "description": "This is a rare NFT.",
  "logoUrl": "https://example.com/nft.jpg",
  "ownerAddress": "0x1234567890abcdef"
}
Response:
{
  "message": "NFT data stored successfully.",
  "nft": {
    "nftId": 1,
    "name": "Cool NFT",
    "description": "This is a rare NFT.",
    "logoUrl": "https://example.com/nft.jpg",
    "ownerAddress": "0x1234567890abcdef"
  }
}
GET /api/nft/:nftId
Fetches metadata for a specific NFT by its ID.

Response:

{
  "nftId": 1,
  "name": "Cool NFT",
  "description": "This is a rare NFT.",
  "logoUrl": "https://example.com/nft.jpg",
  "ownerAddress": "0x1234567890abcdef"
}
GET /api/nft/gallery/:ownerAddress
Retrieves all NFTs owned by a specific wallet address.

Response:
[
  {
    "nftId": 1,
    "name": "Cool NFT",
    "description": "This is a rare NFT.",
    "logoUrl": "https://example.com/nft.jpg",
    "ownerAddress": "0x1234567890abcdef"
  },
  {
    "nftId": 2,
    "name": "Another NFT",
    "description": "This is another rare NFT.",
    "logoUrl": "https://example.com/another-nft.jpg",
    "ownerAddress": "0x1234567890abcdef"
  }
]
API Documentation
The backend provides a Swagger API documentation which can be accessed at: Deployed Swagger Docs

Example API Route Documentation
POST /api/nft/
✅ Stores metadata for a newly minted NFT.

Request Body:
{
  "nftId": 1,
  "name": "Cool NFT",
  "description": "This is a rare NFT.",
  "logoUrl": "https://example.com/nft.jpg",
  "ownerAddress": "0x1234567890abcdef"
}
Response:
{
  "message": "NFT data stored successfully.",
  "nft": {
    "nftId": 1,
    "name": "Cool NFT",
    "description": "This is a rare NFT.",
    "logoUrl": "https://example.com/nft.jpg",
    "ownerAddress": "0x1234567890abcdef"
  }
}

## 🌍 Deployed Links

- 🔹 **Frontend:** [NFT Minting DApp](https://kobapay-landing.onrender.com/)
- 🔹 **Backend API:** [NFT Backend API](https://github.com/promise24o/nft-minting-server)
- 🔹 **Swagger API Docs:** [View API Docs](https://ecommerce-ma0m.onrender.com/api-docs)


🎥 Loom Video Walkthrough


🔗 Backend Repository
