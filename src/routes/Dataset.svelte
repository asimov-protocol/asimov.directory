<script lang="ts">
  import { onMount } from "svelte";
  import { type Dataset } from "../lib/api";
  import API from "../lib/api";

  let { id } = $props();

  let content: Dataset = $state({
    id: 0,
    name: "",
    creator: "",
    short_description: "",
    long_description: "",
    created_at: 0,
    updated_at: 0,
  });

  const fetch_dataset = (id: number) => {
    API.getDataset(id)
      .then((data) => {
        content = data;
      })
      .catch((error) => {
        console.error("Error fetching dataset:", { error, id });
      });
  };

  onMount(() => fetch_dataset(id));
</script>

<div class="flex flex-col gap-y-8 mt-8">
  <h1 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl lg:text-balance text-left">
    {content.name}
  </h1>
  <p class="text-lg/8 text-gray-600 dark:text-gray-200 text-left">
    {content.short_description || content.long_description || ""}
  </p>
  {#if content.creator}
    <p class="text-lg/8 text-gray-600 dark:text-gray-200 text-left"><span class="font-semibold">Author:</span> {content.creator}</p>
  {/if}
  <p class="text-lg/8 text-gray-600 dark:text-gray-200 text-left">
    <span class="font-semibold">Created at:</span> {new Date(content.created_at * 1000).toLocaleString()}
  </p>
</div>
