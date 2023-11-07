//Contract based on [https://docs.openzeppelin.com/contracts/3.x/erc721](https://docs.openzeppelin.com/contracts/3.x/erc721)
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// npx hardhat compile
// npx hardhat --network sepolia run scripts/deploy.js
contract ERC721NFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor(
        string memory tokenName,
        string memory tokenSymbol
    ) public ERC721(tokenName, tokenSymbol) {}

    function mint(
        address recipient,
        string memory tokenURI
    ) public onlyOwner returns (uint256) {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}
// npx hardhat compile && npx hardhat --network sepolia run scripts/deploy.js && node scripts/mint.js && 
// step 1: update contract for get list tokens
// step 2: complie -> deploy -> mint token -> copy ABI & override src/content/NFT/content
// step 3: test if get all tokens works
