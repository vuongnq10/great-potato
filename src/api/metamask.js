import Web3 from 'web3';
import { ethers, ContractFactory } from 'ethers';

import { ERC721ABI, ERC721ByteCode } from 'constants';

export const getAccount = () => {
  return window.ethereum.request({
    method: "eth_requestAccounts"
  });
}

export const mint = async ({ contractAdress, uri }) => {
  const account = await window?.ethereum?.request({
    method: "eth_requestAccounts"
  });

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const nonce = await provider.getTransactionCount(contractAdress);

  const web3 = new Web3(window.ethereum);
  const web3Contract = await new web3.eth.Contract(JSON.parse(ERC721ABI), contractAdress);

  const tx = {
    from: account[0],
    to: contractAdress,
    nonce: `${nonce}`,
    gas: `500000`,
    data: web3Contract.methods.mint(account[0], uri).encodeABI()
  };

  const txHash = await window.ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [tx],
    });
  return txHash;
};

export const createContact = async ({ name, symbol }) => {
  await ethereum?.request({
    method: "eth_requestAccounts"
  });

  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = await provider.getSigner();
  const factory = new ContractFactory(ERC721ABI, ERC721ByteCode, signer);

  const contract = await factory.deploy(name, symbol);
  await contract.deployTransaction.wait();

  return contract.address;
}
