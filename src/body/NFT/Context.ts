import { createContext } from 'react';

const NFTContext = createContext({ account: [], setAccount: () => { } });

export type NFTType = {
  account: Array<string>,
  setAccount: () => void
}
export default NFTContext;
