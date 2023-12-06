export const getWalletNFT = async account => await (await fetch(`/api/nft?address=${account}`)).json();
