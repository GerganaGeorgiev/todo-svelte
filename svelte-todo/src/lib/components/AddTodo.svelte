<script lang="ts">
  import { todosStore } from "../stores/todosStore";

  function addTodo() {
    todosStore.update((prev) => {
      return [
        {
          userId: prev.length + 1,
          id: prev.length + 1,
          title: todoTitle,
          completed: false,
        },
        ...prev,
      ];
    });

    todoTitle = "";
  }

  function validateInput(text: string) {
    if (text.length === 0) {
      return;
    }
  }

  let todoTitle: string;
</script>

<div class="add-todo-card">
  <input
    on:input={() => validateInput(event?.target.value)}
    bind:value={todoTitle}
    type="text"
    placeholder="What needs to be done?"
  />
  {#if !todoTitle}
    <button on:click={addTodo} disabled>Add</button>
  {:else}
    <button on:click={addTodo}>Add</button>
  {/if}
</div>

<style>
  .add-todo-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    margin-bottom: 20px;
  }

  .add-todo-card input[type="text"] {
    width: 80%;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
    box-sizing: border-box;
  }

  .add-todo-card button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
</style>
