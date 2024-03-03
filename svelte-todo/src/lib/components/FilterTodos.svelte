<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import ColorPalette from "./ColorPalette.svelte";
  import type { Filter, TodoColors } from "../models/types";

  const dispatch = createEventDispatcher();

  function handleColorSelected(event: { detail: { color: TodoColors } }) {
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
      ><button
        class="filter-button"
        on:click={() => handleFilterButtonClick("resolved")}>Resolved</button
      ></span
    >
    <span
      ><button
        class="filter-button"
        on:click={() => handleFilterButtonClick("unresolved")}
        >Unresolved</button
      ></span
    >
    <ColorPalette on:colorSelected={handleColorSelected} isFilterContext={true}
    ></ColorPalette>
  </div>
  <button
    on:click={() => handleFilterButtonClick("none")}
    class="clear-filter-btn filter-button">Clear filter</button
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

  .filter-button {
    display: inline-block;
    outline: 0;
    appearance: none;
    padding: 0px 12px;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    background-color: rgb(249, 251, 250);
    border: 1px solid rgb(137, 151, 155);
    box-shadow: rgb(6 22 33 / 30%) 0px 1px 2px;
    color: rgb(61, 79, 88);
    font-size: 14px;
    font-weight: 400;
    height: 36px;
    transition: all 150ms ease-in-out 0s;
  }
  .filter-button:hover {
    color: rgb(61, 79, 88);
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(93, 108, 116);
    box-shadow:
      rgb(0 0 0 / 30%) 0px 4px 4px,
      rgb(231 238 236) 0px 0px 0px 3px;
  }
</style>
