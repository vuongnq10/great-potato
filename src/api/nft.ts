export type ContractType = {
  address: string,
  name: string,
  openSea: any,
  symbol: string,
  tolenType: string,
}
export type MediaType = {
  gateway: string,
  raw: string,
}
export type RawMetadata = {
  name: string,
  image: string,
  description: string,
  attributes: Array<{ value: string, trait_type: string }>
}
export type NFTItem = {
  balance: number,
  contract: ContractType,
  description: string,
  media: MediaType[],
  rawMetadata: RawMetadata,
  timeLastUpdated: string,
  title: string,
  tokenId: string,
  tokenType: string,
  tokenUri: MediaType,
}
export type NFTList = {
  blockHash: string,
  ownedNfts: Array<NFTItem>,
  totalCount: number
}
export const getWalletNFT = async (account: string): Promise<NFTList> => await (await fetch(`/api/nft?address=${account}`)).json();
