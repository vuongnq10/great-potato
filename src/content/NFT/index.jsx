"use client"

import { useEffect, useState } from 'react';

import './style.css';
import NFTs from './content/NFTs';
import Create from './content/create';
import Mint from './content/mint';

const Content = ({ show }) => {
  switch (show) {
    case 'create':
      return <Create />
    case 'mint':
      return <Mint />
    default:
      return <NFTs />
  }
}
const Index = () => {
  const [account, setAccount] = useState();
  const [show, setShow] = useState('nft');

  useEffect(() => {
    const run = async () => {
      const acc = await window.ethereum.request({
        method: "eth_requestAccounts"
      });
      setAccount(acc);
    }

    run();
  }, []);

  const get = async () => {
    const acc = await window.ethereum.request({
      method: "eth_requestAccounts"
    });
    setAccount(acc);

  }

  return (
    <section id="nft" className="web3">
      <div className="container">
        <div className="section-title">
          <h2>NFT Session</h2>
          <p>Create your own NFT Collection</p>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <h3 className="resume-title">Features</h3>
            <div className="nft-item"
              onClick={() => {
                setShow('nft');
                if (!account) {
                  get();
                }
              }}
            >
              <i className="bi bi-wallet"></i>  
              {account && account[0] || 'Click to connect wallet'}
            </div>
            <div className="nft-item" onClick={() => setShow('create')}>
              <i className="bi bi-file-text-fill"></i>
              Deploy contract
            </div>
            <div className="nft-item" onClick={() => setShow('mint')}>
              <i className="bi bi-magic"></i>
              Create NFT
            </div>
          </div>
          <div className="col-lg-8">
            <Content show={show} />
          </div>
        </div>
      </div>
    </section>
  )
};

export default Index;
