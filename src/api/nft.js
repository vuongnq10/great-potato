export const getWalletNFT = async account => {
  return await (await fetch(`/api/nft?address=${account}`)).json();
}
