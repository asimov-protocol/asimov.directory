<script lang="ts">
  import { Link } from "svelte-routing";
  import { onMount } from "svelte";
  import { type DatasetList } from "../lib/api";
  import API from "../lib/api";

  let content: DatasetList = $state({
    pagination: { page: 0, per_page: 24, total: 0 },
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

<div class="flex flex-col gap-y-8">
  <h1 class="text-4xl font-semibold tracking-tight text-pretty text-gray-900 dark:text-white sm:text-5xl lg:text-balance text-left">Datasets</h1>
  <p class="text-lg/8 text-gray-600 dark:text-gray-200 text-left">A robust collection of high-quality, tamper-proof datasets designed for LLM-agnostic AI training, empowering developers to enhance model performance and reliability.</p>

  <div class="p-6 bg-white dark:bg-gray-800 shadow-md rounded-md">
    <div class="overflow-x-auto">
      <table class="table-auto w-full text-left">
        <thead>
          <tr class="border-b border-gray-200">
            <th class="px-4 py-2">Name</th>
            <th class="px-4 py-2">Creator</th>
            <th class="px-4 py-2">Description</th>
            <th class="px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {#each content.datasets as dataset}
            <tr class="hover:bg-gray-50 dark:hover:bg-gray-900 divide-y divide-gray-200 transition-colors">
              <td class="px-4 py-2 font-semibold">
                <Link class="text-sky-500 hover:text-sky-700 transition-colors" to={`/dataset/${dataset.id}`}>{dataset.name}</Link>
              </td>
              <td class="px-4 py-2">
                {dataset.creator || "N/A"}
              </td>
              <td class="px-4 py-2">{dataset.short_description}</td>
              <td class="px-4 py-2">
                {new Date(dataset.created_at).toLocaleString()}
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    {#if max_page > 1}
    <!-- Pagination -->
    <div class="mt-4 flex justify-end items-center gap-x-4 border-t border-gray-200 pt-4">
      <button
        class="px-4 py-2 bg-white rounded-md hover:not-disabled:bg-gray-300 hover:not-disabled:border hover:border-gray-300 disabled:text-gray-300 disabled:border-none disabled:cursor-not-allowed focus-within:outline-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:not-disabled:bg-gray-600 dark:hover:not-disabled:border-gray-600 dark:disable:text-gray-600 dark:disable:border-none"
        onclick={prev_page}
        disabled={show_page <= 1}
      >
        Previous
      </button>

      <div class="text-sm">
        Page {show_page} of {max_page}
      </div>

      <button
        class="px-4 py-2 bg-white rounded-md hover:not-disabled:bg-gray-300 hover:not-disabled:border hover:border-gray-300 disabled:text-gray-300 disabled:border-none disabled:cursor-not-allowed focus-within:outline-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:hover:not-disabled:bg-gray-600 dark:hover:not-disabled:border-gray-600 dark:disable:text-gray-600 dark:disable:border-none"
        onclick={next_page}
        disabled={show_page >= max_page}
      >
        Next
      </button>
    </div>
    {/if}
  </div>
</div>
