<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { resolvedTodos, unresolvedTodos } from "../stores/todosStore";
  import ColorPalette from "./ColorPalette.svelte";

  function handleColorSelected(event: { detail: { color: string } }) {
    const selectedColor = event.detail.color;
  }
  const dispatch = createEventDispatcher();

  function handleFilterButtonClick(value: string) {
    dispatch("filterSelected", { value });
    console.log("clicked");
  }

  function clearFilter() {}
</script>

<div class="filter-card">
  <h3 class="filter-title">Filter by:</h3>
  <div class="filter-buttons">
    <span
      ><button on:click={() => handleFilterButtonClick("resolved)")}
        >Resolved</button
      ></span
    >
    <span
      ><button on:click={() => handleFilterButtonClick("unresolved)")}
        >Unresolved</button
      ></span
    >
    <ColorPalette on:colorSelected={handleColorSelected}></ColorPalette>
  </div>
  <button on:click={clearFilter} class="clear-filter-btn">Clear filter</button>
</div>

<style>
  .filter-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px;
    margin-bottom: 20px;
  }

  .filter-title {
    margin-bottom: 10px;
  }

  .filter-buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
    gap: 8px;
  }

  .clear-filter-btn {
    align-self: flex-end;
  }
</style>
