import { useEffect } from 'react';
import Web3 from 'web3';
import { ethers, ContractFactory } from 'ethers';

const minABI = [
  // balanceOf
  // {
  //   "constant": true,
  //   "inputs": [{ "name": "_owner", "type": "address" }],
  //   "name": "balanceOf",
  //   "outputs": [{ "name": "balance", "type": "uint256" }],
  //   "type": "function"
  // },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "balance",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];
const Index = () => {
  // await ERC721.methods.userOwnedTokens.call(walletAddress)
  // useEffect(() => {
  //   const call = async () => {
  //     const web3 = new Web3(window.ethereum);
  //     const account = await window.ethereum.request({
  //       method: "eth_requestAccounts"
  //     });
  //     console.log("start contract")
  //     let contract = new web3.eth.Contract(minABI, '0xc1872c3Fae4c99F717cc37CA0B193c6C25AcB1E2');
  //     // debugger
  //     console.log("start start balanceOf")
  //     const all = await contract.methods.balanceOf(account[0]).call();
  //     debugger
  //   };

  //   call();
  // }, []);

  useEffect(() => {
    const run = async () => {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      var tokenInst = web3.eth.contract(tokenABI).at(tokenAddress);
      const get = await provider.getBalance('0x9237145C7aeF0F6d9F0aCE26bD39b10a2E8c86bB');
      const number = ethers.utils.formatEther(get)
      debugger
    };
    run();
  }, []);

  return (
    <>
      <h3 className="resume-title">Your collection</h3>
    </>
  );
};

export default Index;