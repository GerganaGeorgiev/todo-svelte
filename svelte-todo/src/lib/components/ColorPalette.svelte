<script lang="ts">
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function handleColorButtonClick(color: string) {
    dispatch("colorSelected", { color });
  }
</script>

<span class="color-palette">
  <button
    class="color-palette-btn red"
    on:click={() => handleColorButtonClick("red")}
  ></button>
  <button
    class="color-palette-btn green"
    on:click={() => handleColorButtonClick("green")}
  ></button>
  <button
    class="color-palette-btn blue"
    on:click={() => handleColorButtonClick("blue")}
  ></button>
  <button
    class="color-palette-btn yellow"
    on:click={() => handleColorButtonClick("yellow")}
  ></button>
</span>

<style>
  .color-palette {
    padding-right: 16px;
  }
  .color-palette-btn {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 5px;
    border: none;
    cursor: pointer;
  }

  .color-palette-btn:nth-child(1) {
    background-color: #ffc9c9;
  }

  .color-palette-btn:nth-child(2) {
    background-color: #b2f2bb;
  }

  .color-palette-btn:nth-child(3) {
    background-color: #a5d8ff;
  }

  .color-palette-btn:nth-child(4) {
    background-color: #ffec99;
  }
</style>
