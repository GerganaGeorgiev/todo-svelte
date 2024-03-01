<script lang="ts">
  import { todosStore } from "../stores/todosStore";

  function removeAll() {
    todosStore.set([]);
  }

  function markAsResolved() {
    todosStore.update((prev) => {
      return prev.map((todo) => {
        return { ...todo, completed: true };
      });
    });
  }

  function markAsUnresolved() {
    todosStore.update((prev) => {
      return prev.map((todo) => {
        return { ...todo, completed: false };
      });
    });
  }
</script>

<div class="side-bar">
  <button on:click={markAsResolved}> Mark all as resolved </button>
  <button on:click={markAsUnresolved}> Mark all as unresolved </button>
  <button on:click={removeAll}> Remove all todos </button>
</div>

<style>
  .side-bar {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f8f8f8;
    margin-top: 100px;
    margin-left: 20px;
    /* width: 200px; */
    /* flex-shrink: 0; */
  }

  .side-bar button {
    margin-bottom: 10px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #efae12;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .side-bar button:hover {
    background-color: #43ace9;
  }
</style>
