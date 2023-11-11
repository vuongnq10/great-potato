import { ethers, ContractFactory } from 'ethers';
import { useState } from 'react';

import { ERC721ABI, ERC721ByteCode } from '../constants';

const Index = () => {
  const [loading, setLoad] = useState(false);
  const [contractAddress, setContractAddress] = useState();
  const [error, setError] = useState();
  const [tokenData, setData] = useState({ tokenName: "", tokenSymbol: "" });

  const create = async () => {
    if (!tokenData.tokenName || !tokenData.tokenSymbol) {
      setError("Please input Token's Name & Token's Symbol");
      return;
    }
    setLoad(true);
    try {
      await ethereum?.request({
        method: "eth_requestAccounts"
      });

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      const signer = await provider.getSigner();
      const factory = new ContractFactory(ERC721ABI, ERC721ByteCode, signer);

      const contract = await factory.deploy(tokenData.tokenName, tokenData.tokenSymbol);
      await contract.deployTransaction.wait();

      setContractAddress(contract.address)
      setError();
      setLoad(false);
    } catch (error) {
      console.log(error)
      setError("Ops! Something went wrong");
      setLoad(false);
      setContractAddress();
    }
  }
  return (
    <>
      <h3 className="resume-title">Create Your Contract</h3>
      <div className="nft-contract">
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Token's Name"
              required=""
              onChange={e => setData({ ...tokenData, tokenName: e?.target?.value })}
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" placeholder="Token's symbol" required=""
              onChange={e => setData({ ...tokenData, tokenSymbol: e?.target?.value })}
            />
          </div>
        </div>
        {error && (
          <div className="error-message">
            {error || "Ops! Something went wrong"}
          </div>
        )}
        {contractAddress && (
          <div className="sent-message">
            {`Congrats, ${contractAddress} is your contract address.`}
          </div>
        )}
        <div className="text-center">
          <button type="submit" onClick={() => !loading && create()}>
            {loading && <div className="loading" />}
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
