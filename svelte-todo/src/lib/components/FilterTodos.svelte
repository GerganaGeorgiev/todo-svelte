<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ColorPalette from "./ColorPalette.svelte";
  import type { Filter } from "../models/types";

  const dispatch = createEventDispatcher();

  function handleColorSelected(event: { detail: { color: string } }) {
    const selectedColor = event.detail.color;
    dispatch("filterSelected", { filter: selectedColor });
  }

  function handleFilterButtonClick(filter: Filter) {
    dispatch("filterSelected", { filter });
  }
</script>

<div class="filter-card">
  <h3 class="filter-title">Filter by:</h3>
  <div class="filter-buttons">
    <span
      ><button on:click={() => handleFilterButtonClick("resolved")}
        >Resolved</button
      ></span
    >
    <span
      ><button on:click={() => handleFilterButtonClick("unresolved")}
        >Unresolved</button
      ></span
    >
    <ColorPalette on:colorSelected={handleColorSelected}></ColorPalette>
  </div>
  <button
    on:click={() => handleFilterButtonClick("none")}
    class="clear-filter-btn">Clear filter</button
  >
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
