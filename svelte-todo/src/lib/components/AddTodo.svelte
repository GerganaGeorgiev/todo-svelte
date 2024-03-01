<script lang="ts">
  import { todosStore } from "../stores/todosStore";

  function addTodo(
    event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
  ) {
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify({
        title: event.target,
        completed: false,
        userId: window.crypto.randomUUID(),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));

    todosStore.update((prev) => {
      return [
        {
          userId: prev.length + 1,
          id: prev.length + 20,
          title: toDoTitle,
          completed: false,
        },
        ...prev,
      ];
    });
  }

  function validateInput(text: string) {
    if (text.length === 0) {
      return;
    }
  }

  let toDoTitle: string;
</script>

<div class="add-todo-card">
  <input
    on:input={() => validateInput(event?.target.value)}
    bind:value={toDoTitle}
    type="text"
    placeholder="What needs to be done?"
  />
  {#if !toDoTitle}
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
