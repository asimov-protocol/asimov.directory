import { NetworkId } from "@near-wallet-selector/core";

const evmWalletChains = {
  mainnet: {
    chainId: 397,
    name: 'Near Protocol',
    explorer: 'https://eth-explorer.near.org',
    rpc: 'https://eth-rpc.mainnet.near.org',
  },
  testnet: {
    chainId: 398,
    name: 'Near Testnet',
    explorer: 'https://eth-explorer-testnet.near.org',
    rpc: 'https://eth-rpc.testnet.near.org',
  },
};

export const networkId: NetworkId = (process.env.NEXT_PUBLIC_NETWORK_ID as NetworkId) || 'testnet';
export const EVMWalletChain = evmWalletChains[networkId];
export const contractId = process.env.NEXT_PUBLIC_CONTRACT_ID || 'test.testnet';
