"use client"

import { useEffect, useState, useContext } from "react";

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
  const [nftList, setList] = useState([]);
  const context = useContext(NFTContext);

  useEffect(() => {
    const run = async () => {
      if (context.account) {
        const nfts = await getWalletNFT(context.account);
        setList(nfts);
      }
    }
    run();
  }, [context.account]);

  return (
    <>
      <h3 className="resume-title">Your Collection</h3>
      <div className="nft-grid">
        {nftList?.ownedNfts?.map((item, idx) => <Item key={idx} {...item} />)}
      </div>
    </>
  );
};

export default Index;
