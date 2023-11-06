"use client"

import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { ethers, ContractFactory } from 'ethers';

import { ERC721ABI, ERC721ByteCode } from './constants';

import './style.css';

const Index = () => {
  const [account, setAccount] = useState();
  const [contractAddress, setContractAddress] = useState();

  useEffect(() => {
    const run = async () => {
      const acc = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      setAccount(acc);
    }

    run();
  }, []);

  const run = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = await provider.getSigner();

    const factory = new ContractFactory(ERC721ABI, ERC721ByteCode, signer)

    console.log("Start deploy");
    let contract = await factory.deploy("NewPotato", "NPT");

    console.log("Start deployTransaction");
    await contract.deployTransaction.wait();

    console.log('Done', setContractAddress(contract.address));
  };

  const mint = async () => {
    const newAdd = "0x328B28AB947C7d4d14c6D188162ef2C1f308C78f"// || "0xc2cB92A71A10DFd66178C71D607603f66fF89DA6";

    const provider = new ethers.providers.Web3Provider(window.ethereum);


    const signer = await provider.getSigner();
    console.log('start signer', signer)

    // const contract = new ethers.Contract(account, ERC721ABI, signer);
    // console.log('start contract', contract)

    const nonce = await provider.getTransactionCount(newAdd);
    console.log('start nonce', nonce)

    const web3 = new Web3(window.ethereum);
    const web3Contract = await new web3.eth.Contract(JSON.parse(ERC721ABI), newAdd);
    const tx = {
      from: account[0],
      to: newAdd,
      nonce: `${nonce}`,
      gas: `500000`,
      data: web3Contract.methods.mint(account[0], "ipfs://QmXzGjfvw2qRV623XeLzMSF9neCj7mGbi3HoWQG93iv7CV").encodeABI()
    };

    const txHash = await window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [tx],
      });
    console.log(txHash);
  }

  return (
    <section id="nft" className="web3 resume">
      {`account: ${account}`}
      <div className="container">
        <div className="section-title">
          <h2>NFT Session</h2>
          <p>Create your own NFT Collection</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <h3 className="resume-title">Features</h3>
            <div className="nft-item">
              Connect wallet
            </div>
            <div className="nft-item">
              Deploy contract
            </div>
            <div className="nft-item">
              Create NFT
            </div>
          </div>
          <div className="col-lg-8">
            Content here
          </div>
        </div>
        {/* <button onClick={() => activateBrowserWallet()}>Connect wallet</button>

        <button onClick={run}>Run</button>
        <button onClick={mint}>Mint</button> */}
      </div>
    </section>
  )
};

export default Index;
