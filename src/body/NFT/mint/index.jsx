import { useState } from 'react';

import { mint } from 'api/metamask';

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
      const hash = await mint({ contractAdress: nftData.contractAdress, uri: nftData.uri });
      setHash(hash);
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