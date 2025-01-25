import { writable } from "svelte/store";
import type { Writable } from "svelte/store";
import { type NetworkId } from "@near-wallet-selector/core";
import { WalletAPI } from "../lib/wallet";

export interface WalletState {
  accountId: string | null;
  wallet: WalletAPI | null;
}

const createWalletStore = () => {
  const { subscribe, set, update }: Writable<WalletState> = writable({
    accountId: null,
    wallet: null,
  });

  const init = async (network: NetworkId, contractId: string) => {
    const wallet = new WalletAPI(network, contractId);
    const accountId = await wallet.init();

    wallet.subscribeToStateChanges((newAccountId) => {
      update((state) => ({
        ...state,
        accountId: newAccountId,
      }));
    });

    set({ accountId, wallet });
  };

  const signIn = () => {
    update((state) => {
      state.wallet?.showModal();
      return state;
    });
  };

  const signOut = async () => {
    update((state) => {
      if (state.wallet) {
        state.wallet.signOut().then(() => {
          set({ accountId: null, wallet: state.wallet });
        });
      }
      return state;
    });
  };

  const subscribeToStateChanges = (callback: (accountId: string | null) => void) => {
    update((state) => {
      state.wallet?.subscribeToStateChanges((newAccountId) => {
        set({ ...state, accountId: newAccountId });
        callback(newAccountId);
      });
      return state;
    });
  };

  return { subscribe, init, signIn, signOut, subscribeToStateChanges };
};

export const walletStore = createWalletStore();
