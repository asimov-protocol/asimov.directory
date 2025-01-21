<script lang="ts">
  import { onMount } from "svelte";
  import { type DatasetList } from "./lib/api";
  import API from "./lib/api";

  let content: DatasetList = $state({
    pagination: { page: 0, per_page: 3, total: 0 },
    datasets: [],
  });
  let page = $derived(content.pagination.page);
  let show_page = $derived(content.pagination.page + 1);
  let max_page = $derived(
    Math.ceil(content.pagination.total / content.pagination.per_page),
  );

  const fetch_page = (page: number) => {
    API.getDatasets(page, content.pagination.per_page)
      .then((data) => {
        content = data;
      })
      .catch((error) => {
        console.error("Error fetching datasets:", { error, page });
      });
  };

  const next_page = () => fetch_page(page + 1);
  const prev_page = () => fetch_page(page - 1);
  onMount(() => fetch_page(page));
</script>

<main>
  <div class="flex flex-col gap-y-8">
    <h1>Datasets</h1>
    {#each content.datasets as dataset}
      <div class="flex flex-row flex-nowrap gap-x-8 whitespace-nowrap">
        <div class="flex flex-col items-start">
          <span class="font-bold">{dataset.name}</span>
          {#if dataset.creator}
            <span class=""> by {dataset.creator}</span>
          {/if}
        </div>
        <span
          >{dataset.short_description || dataset.long_description || ""}</span
        >
      </div>
    {/each}
    {#if max_page > 1}
      <div
        class="w-min mx-auto flex flex-row flex-nowrap items-center gap-x-10"
      >
        <button
          disabled={show_page <= 1}
          onclick={prev_page}
          class="disabled:text-gray-300"
        >
          &lt;
        </button>
        <span class="whitespace-nowrap">
          Page {show_page} of {max_page}
        </span>
        <button
          disabled={show_page >= max_page}
          onclick={next_page}
          class="disabled:text-gray-300"
        >
          &gt;
        </button>
      </div>
    {/if}
  </div>
</main>
