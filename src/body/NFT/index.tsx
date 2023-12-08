"use client"
import React from 'react';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { getAccount } from 'api/metamask';

import NFTContext from './Context';
import NFTs from './NFTs';
import Create from './create';
import Mint from './mint';

import './style.css';

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

const Index: React.FC<{}> = () => {
  const [show, setShow] = useState<string>('nft');

  const { data: account, mutate } = useMutation({
    mutationKey: ['getNFT'],
    mutationFn: async () => await getAccount(),
  });

  return (
    <NFTContext.Provider value={{ account, setAccount: mutate }}>
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
                    mutate();
                  }
                }}
              >
                <i className="bi bi-wallet"></i>
                {account && account[0] || 'Click to connect wallet'}
              </div>
              <div className="nft-item" onClick={() => setShow('create')}>
                <i className="bi bi-file-text-fill"></i>
                Create contract
              </div>
              <div className="nft-item" onClick={() => setShow('mint')}>
                <i className="bi bi-magic"></i>
                Mint NFT
              </div>
              <div className='notice'>
                <div dangerouslySetInnerHTML={{
                  __html: '<strong>Notice: </strong>all features on this page are built on Sepolia-ETH test-net, please feel free to test with wallet keys'
                }} />
                <div>
                  <code>
                    crunch snow timber bicycle suspect type light that mirror load bottom honey
                  </code>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <Content show={show} />
            </div>
          </div>
        </div>
      </section>
    </NFTContext.Provider>
  )
};

export default Index;
