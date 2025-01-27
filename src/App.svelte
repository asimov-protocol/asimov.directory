<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import Nav from "./components/Nav.svelte";
  import Home from "./routes/Home.svelte";
  import Dataset from "./routes/Dataset.svelte";

  export let url = "";
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
