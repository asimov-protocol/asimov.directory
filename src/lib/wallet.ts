import { setupWalletSelector, type NetworkId, type WalletSelector } from "@near-wallet-selector/core";
import { setupModal, type WalletSelectorModal } from "@near-wallet-selector/modal-ui-js";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupBitgetWallet } from "@near-wallet-selector/bitget-wallet";
import { setupSender } from "@near-wallet-selector/sender";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupNearSnap } from "@near-wallet-selector/near-snap";
import { setupMathWallet } from "@near-wallet-selector/math-wallet";
// import { setupNightly } from "@near-wallet-selector/nightly";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
// import { setupOkxWallet } from "@near-wallet-selector/okx-wallet";
import { setupNarwallets } from "@near-wallet-selector/narwallets";
import { setupWelldoneWallet } from "@near-wallet-selector/welldone-wallet";
// import { setupLedger } from "@near-wallet-selector/ledger";
import { setupWalletConnect } from "@near-wallet-selector/wallet-connect";
import { setupNearFi } from "@near-wallet-selector/nearfi";
import { setupCoin98Wallet } from "@near-wallet-selector/coin98-wallet";
import { setupNeth } from "@near-wallet-selector/neth";
import { setupXDEFI } from "@near-wallet-selector/xdefi";
// import { setupRamperWallet } from "@near-wallet-selector/ramper-wallet";
// import { setupNearMobileWallet } from "@near-wallet-selector/near-mobile-wallet";
// import { setupMintbaseWallet } from "@near-wallet-selector/mintbase-wallet";
// import { setupBitteWallet } from "@near-wallet-selector/bitte-wallet";
// import { setupEthereumWallets } from "@near-wallet-selector/ethereum-wallets";

export class WalletAPI {
  private selector!: WalletSelector;
  private modal!: WalletSelectorModal;
  private network: NetworkId;
  private contractId: string;

  constructor(network: NetworkId, contractId: string) {
    this.network = network;
    this.contractId = contractId;
  }

  /**
   * Initializes the Wallet Selector and Modal
   */
  async init(): Promise<string | null> {
    this.selector = await setupWalletSelector({
      network: this.network,
      modules: [
        setupBitgetWallet(),
        setupMyNearWallet(),
        setupSender(),
        setupHereWallet(),
        setupMathWallet(),
        // setupNightly(),
        setupMeteorWallet(),
        setupNearSnap(),
        // setupOkxWallet(),
        setupNarwallets(),
        setupWelldoneWallet(),
        // setupLedger(),
        setupNearFi(),
        setupCoin98Wallet(),
        setupNeth(),
        setupXDEFI(),
        setupWalletConnect({
          projectId: "c4f79cc...",
          metadata: {
            name: "NEAR Wallet Selector",
            description: "Example dApp used by NEAR Wallet Selector",
            url: "https://github.com/near/wallet-selector",
            icons: ["https://avatars.githubusercontent.com/u/37784886"],
          },
        }),
        // setupNearMobileWallet(),
        // setupMintbaseWallet({
        //       networkId: 'mainnet',
        //       walletUrl: "https://wallet.mintbase.xyz",
        //       callbackUrl: "https://www.mywebsite.com",
        //       deprecated: false,
        // }),
        // setupBitteWallet({
        //     networkId: 'mainnet',
        //     walletUrl: "https://wallet.bitte.ai",
        //     callbackUrl: "https://www.mywebsite.com",
        //     deprecated: false,
        // }),
        // setupEthereumWallets({ wagmiConfig, web3Modal }),
      ],
    });

    this.modal = setupModal(this.selector, {
      contractId: this.contractId,
    });

    // Get the current signed-in account (if any)
    const state = this.selector.store.getState();
    return state.accounts[0]?.accountId || null;
  }

  /**
   * Displays the Wallet Selector modal for signing in
   */
  showModal(): void {
    if (!this.modal) {
      throw new Error("Modal is not initialized. Call init() first.");
    }
    this.modal.show();
  }

  /**
   * Logs out the currently connected wallet
   */
  async signOut(): Promise<void> {
    if (!this.selector) {
      throw new Error("Wallet Selector is not initialized. Call init() first.");
    }

    const wallet = await this.selector.wallet();
    await wallet.signOut();
  }

  /**
   * Subscribes to Wallet Selector state changes
   * @param callback - Function to handle state changes
   */
  subscribeToStateChanges(callback: (accountId: string | null) => void): void {
    if (!this.selector) {
      throw new Error("Wallet Selector is not initialized. Call init() first.");
    }

    this.selector.store.observable.subscribe((state: any) => {
      const accountId = state.accounts[0]?.accountId || null;
      callback(accountId);
    });
  }

  /**
   * Gets the current account ID
   */
  getAccountId(): string | null {
    const state = this.selector.store.getState();
    return state.accounts[0]?.accountId || null;
  }
}
