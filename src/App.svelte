<script lang="ts">
  import { type Dataset } from "./lib/api";

  let datasets: Dataset[] = $state([]);
</script>

<main>
  <h1>Vite + Svelte</h1>

  {#each datasets as dataset}
    <div>
      <p>{dataset.name}</p>
    </div>
  {/each}
</main>
