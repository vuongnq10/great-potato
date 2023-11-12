
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { createContact } from 'api/metamask';

const Index = () => {
  const [tokenData, setData] = useState({ tokenName: "", tokenSymbol: "" });

  const { data: resp, mutate, status } = useMutation({
    mutationKey: ['createContract'],
    mutationFn: async () => await createContact({ name: tokenData.tokenName, symbol: tokenData.tokenSymbol }),
    onSuccess: () => setData({ tokenName: "", tokenSymbol: "" }),
  });

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
              value={tokenData.tokenName}
              onChange={e => setData({ ...tokenData, tokenName: e?.target?.value })}
            />
          </div>
          <div className="col-md-6 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" placeholder="Token's symbol"
              value={tokenData.tokenSymbol}
              onChange={e => setData({ ...tokenData, tokenSymbol: e?.target?.value })}
            />
          </div>
        </div>
        {status === 'error' && (
          <div className="error-message">Ops! Something went wrong</div>
        )}
        {resp && (
          <div className="sent-message">
            {`Congrats, ${resp} is your contract address.`}
          </div>
        )}
        <div className="text-center">
          <button type="submit" onClick={() => status === 'idle' && mutate()}>
            {status === 'pending' && <div className="loading" />}
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Index;
