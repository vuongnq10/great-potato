import { useState } from 'react';

import Web3 from 'web3';
import { ethers, ContractFactory } from 'ethers';

import { ERC721ABI, ERC721ByteCode } from '../constants';

const Index = () => {
  const [loading, setLoad] = useState(false);
  const [error, setError] = useState();
  const [hash, setHash] = useState();
  const [nftData, setData] = useState({ contractAdress: "", uri: "" });

  const create = async () => {
    if (!nftData.contractAdress || !nftData.uri) {
      setError("Please input Contract's address & URI");
      return;
    }
    setLoad(true);
    try {
      const account = await ethereum?.request({
        method: "eth_requestAccounts"
      });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const nonce = await provider.getTransactionCount(nftData.contractAdress);

      const web3 = new Web3(window.ethereum);
      const web3Contract = await new web3.eth.Contract(JSON.parse(ERC721ABI), nftData.contractAdress);

      const tx = {
        from: account[0],
        to: nftData.contractAdress,
        nonce: `${nonce}`,
        gas: `500000`,
        data: web3Contract.methods.mint(account[0], nftData.uri).encodeABI()
      };

      const txHash = await window.ethereum
        .request({
          method: 'eth_sendTransaction',
          params: [tx],
        });
      setHash(txHash);
      setLoad(false);
      setError();
    } catch (error) {
      console.log(error)
      setError("Ops! Something went wrong");
      setLoad(false);
      setHash();
    }
  }

  return (
    <>
      <h3 className="resume-title">Mint Your NFT</h3>
      <div className="nft-contract contact">
        <div className="row">
          <div className="col-md-12 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Contract's address"
              required=""
              onChange={e => setData({ ...nftData, contractAdress: e?.target?.value })}
            />
          </div>
          <div style={{ height: '12px' }} />
          <div className="col-md-12 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="NFT's URI"
              required=""
              onChange={e => setData({ ...nftData, uri: e?.target?.value })}
            />
          </div>
        </div>
        {error && (
          <div className="error-message">
            {error || "Ops! Something went wrong"}
          </div>
        )}
        {hash && (
          <div className="sent-message">
            {`Congrats, ${hash} is your transaction hash.`}
          </div>
        )}
        <div className="text-center">
          <button type="submit" onClick={() => !loading && create()}>
            {loading && <div className="loading" />}
            Mint
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;