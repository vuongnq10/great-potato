"use client"

import { useEffect, useState } from "react";
import Web3 from "web3";
// import { ethers, ContractFactory } from "ethers";

import { ABI } from "./constants";

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

      // const contract = new web3.eth.Contract(ABI, "0xc1872c3Fae4c99F717cc37CA0B193c6C25AcB1E2");
      // const balance = await contract.methods.balanceOf(account[0]).call();
      // const array = [];
      // for (let i = 0; i < Number(`${balance}`) - 1; i++) {
      //   array.push(contract.methods.tokenOfOwnerByIndex(account[0], `${i}`).call().then(res => res.json()));
      // }
      // Promise.all([array]).then(res => console.log(res));
      // debugger

      // const test = await contract.methods.tokenOfOwnerByIndex(account[0], 2).call();
      // debugger

      // let contract = new web3.eth.Contract(ABI, "0xc1872c3Fae4c99F717cc37CA0B193c6C25AcB1E2");
      // const tokenURI = await contract.methods.getTokenURI(1).call();
      // const url = tokenURI.replace(protocol, domain);
      // const res = await (await fetch(url)).json();
      // console.log(res);
      // setTest(res);
    };

    call();
  }, []);

  return (
    <>
      <h3 className="resume-title">Your collection</h3>
      <div>This feature is under construction</div>
    </>
  );
};

export default Index;
