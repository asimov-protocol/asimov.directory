<script lang="ts">
  import { onMount } from "svelte";
  import { Router, Route } from "svelte-routing";
  import Nav from "./components/Nav.svelte";
  import Home from "./routes/Home.svelte";
  import Dataset from "./routes/Dataset.svelte";
  import { walletStore } from "./stores/walletStore";

  export let url = "";

  onMount(async () => {
    await walletStore.init("testnet", "test.testnet");
  });
</script>

<Router url={url}>
  <Nav />

  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
    <Route path="/">
      <Home />
    </Route>
    <Route path="/dataset/:id" let:params>
      <Dataset id={params.id} />
    </Route>
  </main>
</Router>
