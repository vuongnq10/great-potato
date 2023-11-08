"use client"

import { useEffect, useState, useContext } from "react";

import NFTContext from "content/NFT/Context";

import NFT from "./NFT";

import "./style.css";

const Index = () => {
  const [nftList, setList] = useState();
  const context = useContext(NFTContext);

  useEffect(() => {
    const run = async () => {
      if (context.account) {
        const nfts = await (await fetch(`/api/nft?address=${context.account}`)).json();
        setList(nfts);
      }
    }
    run();
  }, [context.account]);

  return (
    <>
      <h3 className="resume-title">Your collection</h3>
      <div className="nft-grid">
        {nftList?.ownedNfts.map((item, idx) => <NFT key={idx} {...item} />)}
      </div>
    </>
  );
};

export default Index;
