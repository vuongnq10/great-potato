"use client"

import { useEffect, useState } from "react";
import Web3 from "web3";
// import { ethers, ContractFactory } from "ethers";

import { ABI } from "./constants";

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

      let contract = new web3.eth.Contract(ABI, "0xc1872c3Fae4c99F717cc37CA0B193c6C25AcB1E2");
      const tokenURI = await contract.methods.tokenURI(1).call();
      const url = tokenURI.replace(protocol, domain);
      const res = await (await fetch(url)).json();
      console.log(res);
      setTest(res);
    };

    call();
  }, []);

  return (
    <>
      <h3 className="resume-title">Your collection</h3>
      <div>This feature is under construction</div>
      <img src={test?.image?.replace(protocol, domain)} />
    </>
  );
};

export default Index;
