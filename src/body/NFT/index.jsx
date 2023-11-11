"use client"

import { useState } from 'react';

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
const Index = () => {
  const [account, setAccount] = useState();
  const [show, setShow] = useState('nft');

  const get = async () => {
    const acc = await getAccount();
    setAccount(acc);
  }

  return (
    <NFTContext.Provider value={{ account, setAccount: setAccount }}>
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
