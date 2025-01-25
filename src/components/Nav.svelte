<script lang="ts">
  import { Link } from "svelte-routing";
  import Logo from "./Logo.svelte";
  import { walletStore } from "../stores/walletStore";

  let accountId: string | null;
  let isDropdownOpen = false;

  $: walletStore.subscribe(($walletStore) => {
    accountId = $walletStore.accountId;
  });

  const handleSignIn = () => {
    walletStore.signIn();
  };

  const handleSignOut = () => {
    walletStore.signOut();
    closeDropdown();
  };

  const toggleDropdown = () => {
    isDropdownOpen = !isDropdownOpen;
  };

  const closeDropdown = () => {
    isDropdownOpen = false;
  };
</script>

<nav class="bg-white dark:bg-gray-800 shadow w-full mx-auto">
  <div class="mx-auto max-w-7xl px-2 py-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex shrink-0 items-center">
        <Link class="text-black dark:text-white hover:text-black dark:hover:text-white" to="/">
          <Logo />
        </Link>
      </div>

      <!-- Navigation Menu -->
      <div class="flex ml-auto items-center">
        {#if accountId}
          <!-- Profile Dropdown -->
          <div class="relative">
            <button
              type="button"
              class="flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              on:click={toggleDropdown}
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="size-8 rounded-full"
                src="favicon.png"
                alt="Profile"
              />
            </button>

            {#if isDropdownOpen}
              <!-- Dropdown -->
              <div
                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-2 ring-1 ring-black/5 focus:outline-hidden shadow-lg"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
              >
                <p class="block px-4 py-2 text-sm text-gray-700">{accountId}</p>
                <button
                  on:click={handleSignOut}
                  class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 bg-transparent border-none rounded-none transition-colors"
                  role="menuitem"
                >
                  Sign Out
                </button>
              </div>
            {/if}
          </div>
        {:else}
          <button
            on:click={handleSignIn}
            class="ml-4 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-colors"
          >
            Connect Wallet
          </button>
        {/if}
      </div>
    </div>
  </div>

  <div
    role="button"
    on:click={closeDropdown}
    on:keydown={(e) => e.key === 'Enter' && closeDropdown()}
    class="fixed inset-0 z-0 bg-transparent outline-none cursor-default focus-within:outline-none focus-within:ring-0 hover:border-none"
    style="display: {isDropdownOpen ? 'block' : 'none'};"
    aria-label="Close dropdown"
    tabindex="0"
  ></div>
</nav>
