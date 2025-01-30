'use client';

import Link from "next/link";
import Image from "next/image";
import Logo from "./Logo";
import { useWalletSelector } from "@/context/WalletSelectorContext";
import { useState } from "react";

const Nav = () => {
  const { accountId, isSignedIn, signIn, signOut, isInitializing } = useWalletSelector();
  const [dropdownToggle, setDropdownToggle] = useState(false);

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (err) {
      console.error("Failed to sign in:", err);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (err) {
      console.error("Failed to sign out:", err);
    }
  };

  const toggleDropdown = () => {
    setDropdownToggle(!dropdownToggle);
  };

  return (
    <nav className="bg-background text-sStone-200 shadow w-full mx-auto">
      <div className="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex shrink-0 items-center w-full">
            <Link className="" href="/">
              <Logo />
            </Link>

            {!isInitializing && (
              <div className="flex ml-auto items-center">
                {isSignedIn ? (
                  <div className="relative">
                    <button
                      type="button"
                      className="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      id="user-menu-button"
                      aria-expanded={dropdownToggle}
                      aria-haspopup="true"
                      onClick={toggleDropdown}
                    >
                      <span className="sr-only">Open user menu</span>
                      <Image
                        className="size-8 rounded-full"
                        src="/logo.png"
                        alt="Profile"
                        width={32}
                        height={32}
                      />
                    </button>

                    {dropdownToggle && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-2 ring-1 ring-black/5 focus:outline-hidden shadow-lg"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="user-menu-button"
                      >
                        <p className="block px-4 py-2 text-sm text-gray-700">{accountId}</p>
                        <button
                          onClick={handleSignOut}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 bg-transparent border-none rounded-none transition-colors"
                          role="menuitem"
                        >
                          Sign Out
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={handleSignIn}
                    className="ml-4 px-4 py-2 text-sm font-medium text-white bg-oOrange-500 rounded-lg shadow transition-colors cursor-pointer hover:bg-oOrange-600"
                  >
                    Connect Wallet
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
