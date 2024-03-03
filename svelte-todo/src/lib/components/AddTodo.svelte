<script lang="ts">
  import { todosStore } from "../stores/todosStore";
  import { v4 as uuidv4 } from "uuid";

  function addTodo() {
    todosStore.update((prev) => {
      return [
        {
          userId: prev.length + 1,
          id: uuidv4(),
          title: todoTitle,
          completed: false,
        },
        ...prev,
      ];
    });

    todoTitle = "";
  }

  function validateInput(text: string) {
    if (text.length === 0) return;
  }

  let todoTitle: string;
</script>

<div class="add-todo-card">
  <input
    on:input={() => validateInput(event?.target.value)}
    bind:value={todoTitle}
    type="text"
    placeholder="What needs to be done?"
    class="input-todo"
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
    margin-top: 90px;
    margin-bottom: 10px;
    box-sizing: border-box;
    box-shadow: inset #abacaf 0 0 0 2px;
    border: 0;
    background: rgba(0, 0, 0, 0);
    appearance: none;
    width: 100%;
    position: relative;
    border-radius: 3px;
    padding: 9px 12px;
    line-height: 1.4;
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 400;
    height: 40px;
    transition: all 0.2s ease;
  }

  input[type="text"]:hover {
    box-shadow:
      0 0 0 0 #fff inset,
      #1de9b6 0 0 0 2px;
  }

  :focus {
    background: #fff;
    outline: 0;
    box-shadow:
      0 0 0 0 #fff inset,
      #1de9b6 0 0 0 3px;
  }

  .add-todo-card button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;

    display: inline-block;
    outline: 0;
    appearance: none;
    padding: 0px 12px;
    border: 0px solid transparent;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    background-color: rgb(9, 128, 76);
    box-shadow: rgb(19 170 82 / 40%) 0px 2px 3px;
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 400;
    height: 36px;
    transition: all 150ms ease-in-out 0s;
  }
  .add-todo-card button:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(17, 97, 73);
    box-shadow:
      rgb(19 170 82 / 40%) 0px 2px 3px,
      rgb(195 231 202) 0px 0px 0px 3px;
  }
</style>
