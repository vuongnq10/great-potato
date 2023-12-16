// this is temporary solution which use alchemy service
// should be replace to use on chain service to get NFT list

const { Alchemy, Network } = require("alchemy-sdk");

const config = {
  apiKey: process.env.ALCHEMY_KEY,
  network: Network.ETH_SEPOLIA, // Replace with your network
};

const alchemy = new Alchemy(config);

export default async function handler(req, res): Promise<any> {
  switch (`${req.method}`.toLowerCase()) {
    case 'get': {
      const address = req.query?.address;
      if (address) {
        let response = await alchemy.nft.getNftsForOwner(address)
        return res.status(200).json(response);
      }
      res.status(403);
      return;
    }
    default: {
      res.status(200);
    }
  };
};
