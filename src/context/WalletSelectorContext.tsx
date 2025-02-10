'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import { Wallet } from '@/components/wallet-selector/WalletSelector';
import { networkId as defaultNetwork, contractId } from '@/config';

export interface WalletContextValue {
  wallet: Wallet | null;
  accountId: string | null;
  isSignedIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  getBalance: (accountId: string, format?: boolean) => Promise<string>;
  isInitializing: boolean;
}

const WalletSelectorContext = createContext<WalletContextValue | null>(null);

export const WalletSelectorProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [accountId, setAccountId] = useState<string | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // Initialize the Wallet instance
    const initWallet = async () => {
      try {
        const walletInstance = new Wallet({
          networkId: defaultNetwork,
          createAccessKeyFor: contractId,
        });
        const signedAccountId = await walletInstance.startUp((account) => {
          setAccountId(account);
          setIsSignedIn(!!account);
        });

        setWallet(walletInstance);
        setAccountId(signedAccountId);
        setIsSignedIn(!!signedAccountId);
      } catch (err) {
        console.error('Failed to initialize Wallet:', err);
      } finally {
        setIsInitializing(false);
      }
    };

    initWallet();
  }, []);

  const contextValue = useMemo(() => {
    return {
      wallet,
      accountId,
      isSignedIn,
      signIn: wallet?.signIn ?? (async () => {}),
      signOut: wallet?.signOut ?? (async () => {}),
      getBalance: wallet?.getBalance ?? (async () => '0'),
      isInitializing,
    };
  }, [wallet, accountId, isSignedIn, isInitializing]);

  return (
    <WalletSelectorContext.Provider value={contextValue}>
      {children}
    </WalletSelectorContext.Provider>
  );
};

export const useWalletSelector = () => {
  const context = useContext(WalletSelectorContext);
  if (!context) {
    throw new Error(
      'useWalletSelector must be used within a WalletSelectorProvider',
    );
  }
  return context;
};
