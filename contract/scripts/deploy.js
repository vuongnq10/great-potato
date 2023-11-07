const { ethers } = require("hardhat");

async function main() {
  const MyNFT = await ethers.getContractFactory("ERC721NFT");

  // Start deployment, returning a promise that resolves to a contract object
  const tokenName = "";
  const tokenSymbol = "";

  const myNFT = await MyNFT.deploy(tokenName, tokenSymbol);
  await myNFT.deployed();
  console.log("Contract deployed to address:", myNFT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
