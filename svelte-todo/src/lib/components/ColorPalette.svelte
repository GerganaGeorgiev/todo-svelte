<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { derived } from "svelte/store";
  import { todosStore } from "../stores/todosStore";

  export let isFilterContext: boolean = false;

  const dispatch = createEventDispatcher();

  const redTodosStore = derived(todosStore, ($todos) =>
    $todos.some((todo) => todo.color === "red")
  );

  const greenTodosStore = derived(todosStore, ($todos) =>
    $todos.some((todo) => todo.color === "green")
  );

  const blueTodosStore = derived(todosStore, ($todos) =>
    $todos.some((todo) => todo.color === "blue")
  );

  const yellowTodosStore = derived(todosStore, ($todos) =>
    $todos.some((todo) => todo.color === "yellow")
  );

  function handleColorButtonClick(color: string) {
    dispatch("colorSelected", { color });
  }
</script>

<span class="color-palette">
  {#if isFilterContext}
    {#if $redTodosStore}
      <button
        class="color-palette-btn red"
        on:click={() => handleColorButtonClick("red")}
      ></button>
    {/if}

    {#if $greenTodosStore}
      <button
        class="color-palette-btn green"
        on:click={() => handleColorButtonClick("green")}
      ></button>
    {/if}

    {#if $blueTodosStore}
      <button
        class="color-palette-btn blue"
        on:click={() => handleColorButtonClick("blue")}
      ></button>
    {/if}

    {#if $yellowTodosStore}
      <button
        class="color-palette-btn yellow"
        on:click={() => handleColorButtonClick("yellow")}
      ></button>
    {/if}
  {:else}
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
  {/if}
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

  .color-palette-btn.red {
    background-color: #ffc9c9;
  }

  .color-palette-btn.green {
    background-color: #b2f2bb;
  }

  .color-palette-btn.blue {
    background-color: #a5d8ff;
  }

  .color-palette-btn.yellow {
    background-color: #ffec99;
  }
</style>
