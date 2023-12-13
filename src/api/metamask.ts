import Web3 from 'web3';
import { ethers, ContractFactory } from 'ethers';

// @ts-ignore:next-line
import { ERC721ABI, ERC721ByteCode } from 'constants';

export const getAccount = (): Promise<any> => {
  // @ts-ignore:next-line
  return window.ethereum.request({
    method: "eth_requestAccounts"
  });
}

type MintType = {
  contractAdress: string,
  uri: string,
}
export const mint = async (data: MintType): Promise<string> => {
  const { contractAdress, uri } = data;
  // @ts-ignore:next-line
  const account = await window?.ethereum?.request({
    method: "eth_requestAccounts"
  });
  // @ts-ignore:next-line
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const nonce = await provider.getTransactionCount(contractAdress);
  // @ts-ignore:next-line
  const web3 = new Web3(window.ethereum);
  const web3Contract = await new web3.eth.Contract(JSON.parse(ERC721ABI), contractAdress);

  const tx = {
    from: account[0],
    to: contractAdress,
    nonce: `${nonce}`,
    gas: `500000`,
    // @ts-ignore:next-line
    data: web3Contract.methods.mint(account[0], uri).encodeABI()
  };

  // @ts-ignore:next-line
  const txHash = await window.ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [tx],
    });
  return txHash;
};

export type ContractType = {
  name: string,
  symbol: string,
  empty: string,
};

export const createContact = async (input: ContractType): Promise<string> => {
  const { name, symbol } = input;
  // @ts-ignore:next-line
  await ethereum?.request({
    method: "eth_requestAccounts"
  });
  // @ts-ignore:next-line
  const provider = new ethers.providers.Web3Provider(window.ethereum);

  const signer = await provider.getSigner();
  const factory = new ContractFactory(ERC721ABI, ERC721ByteCode, signer);

  const contract = await factory.deploy(name, symbol);
  await contract.deployTransaction.wait();

  return contract.address;
}
