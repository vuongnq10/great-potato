"use client"

import { useEffect, useState } from "react";
import Web3 from "web3";
// import { ethers, ContractFactory } from "ethers";

// import { ABI } from "./constants";

import json from '../ERC721NFT.json';

// temporary cheat this sheet :))))
const domain = "https://ipfs.io/ipfs/";
const protocol = "ipfs://";

const Index = () => {
  const [test, setTest] = useState();

  useEffect(() => {
    const call = async () => {
      const web3 = new Web3(window.ethereum);
      const account = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      let contract = new web3.eth.Contract(json.abi, "0x0F19B7934434C032289fd8f413CBCC50DD28002e");
      const tokenURI = await contract.methods.tokenURI(1).call();
      const url = tokenURI.replace(protocol, domain);
      const res = await (await fetch(url)).json();
      setTest(res);
    };

    call();
  }, []);

  return (
    <>
      <h3 className="resume-title">Your collection</h3>
      <div>This feature is under construction</div>
      <img src={test?.image?.replace(protocol, domain)} width="100%"/>
    </>
  );
};

export default Index;
