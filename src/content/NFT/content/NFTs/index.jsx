"use client"

import { useEffect, useState } from "react";

import './style.css';
import NFT from './NFT';
import data from './data.json';

const Index = () => {
  const [nftList, setList] = useState(data);
  // useEffect(() => {
  //   const run = async () => {
  //     const [address] = await window.ethereum.request({
  //       method: "eth_requestAccounts"
  //     });
  //     if (address) {
  //       const nfts = await (await fetch(`/api/nft?address=${address}`)).json();
  //       console.log(nfts);
  //       setList(nfts);
  //     }
  //   }
  //   run();
  // }, []);

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
