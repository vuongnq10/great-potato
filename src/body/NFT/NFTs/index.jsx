"use client"

import { useContext } from "react";
import { useQuery } from '@tanstack/react-query';

import { getWalletNFT } from 'api/nft';
import NFTContext from "body/NFT/Context";

import "./style.css";

const domain = "https://ipfs.io/ipfs/";
const protocol = "ipfs://";

const Item = ({ rawMetadata, contract }) => {
  const { name, image } = rawMetadata || {}
  return (
    <div className="nft-thumbnail">
      <div className="img-thumb">
        <img src={image?.replace(protocol, domain)} alt={name} />
      </div>
      <div className="info">
        <div className="name">{name}</div>
        <div className="collection">{contract?.name}</div>
      </div>
    </div>
  )
};

const Index = () => {
  const context = useContext(NFTContext);

  const { data } = useQuery({
    queryKey: ['nftData'],
    queryFn: async () => (await getWalletNFT(context.account))?.ownedNfts || [],
    enabled: !!context.account
  });


  return (
    <>
      <h3 className="resume-title">Your Collection</h3>
      <div className="nft-grid">
        {data?.map((item, idx) => <Item key={idx} {...item} />)}
      </div>
    </>
  );
};

export default Index;
