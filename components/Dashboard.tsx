import React from "react";
import Image from "next/image";

interface DashboardProps {
  nfts: NFT[];
}

interface NFT {
  id: string;
  name: string;
  imageUrl: string;
  fractionalizedValue: number;
}

const Dashboard: React.FC<DashboardProps> = ({ nfts }) => {
  return (
    <div>
      <h2>Dashboard</h2>
      <div>
        {nfts.map((nft) => (
          <div key={nft.id}>
            <Image src={nft.imageUrl} alt={nft.name} width={200} height={200} />
            <p>Name: {nft.name}</p>
            <p>Fractionalized Value: {nft.fractionalizedValue}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
