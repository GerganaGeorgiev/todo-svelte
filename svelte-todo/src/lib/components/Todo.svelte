<script lang="ts">
  import ColorPalette from "./ColorPalette.svelte";
  import trashIcon from "../../assets/icons/trash.png";
  import type { ITodo } from "../models/todoModel";
  import { todosStore } from "../stores/todosStore";
  import type { TodoColors } from "../models/types";

  export let singleTodo: ITodo;

  function handleColorSelected(event: { detail: { color: TodoColors } }) {
    const selectedColor = event.detail.color;

    singleTodo = { ...singleTodo, color: selectedColor };
    todosStore.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === singleTodo.id) {
          return { ...todo, color: selectedColor };
        }
        return todo;
      });
    });
  }

  function handleDeleteToDo(id: number) {
    todosStore.update((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  }

  function handleToDoCompletion(id: number) {
    todosStore.update((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: todo.completed };
        } else {
          return todo;
        }
      });
    });
  }
</script>

<div
  class="single-todo"
  class:red={singleTodo?.color === "red"}
  class:green={singleTodo?.color === "green"}
  class:yellow={singleTodo?.color === "yellow"}
  class:blue={singleTodo?.color === "blue"}
>
  <div>
    <input
      bind:checked={singleTodo.completed}
      type="checkbox"
      on:change={() => {
        handleToDoCompletion(singleTodo.id);
      }}
    />
    <p class="todo-content">{singleTodo.title}</p>
    <ColorPalette on:colorSelected={handleColorSelected} isFilterContext={false}
    ></ColorPalette>

    <span class="delete-btn-span"
      ><button
        class="delete-btn"
        on:click={() => handleDeleteToDo(singleTodo.id)}
        ><img class="trash-icon" src={trashIcon} alt="delete" /></button
      ></span
    >
  </div>
</div>

<style>
  .single-todo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  .single-todo div {
    display: flex;
    align-items: center;
    flex-grow: 1;
  }

  .single-todo input[type="checkbox"] {
    margin-right: 10px;
    margin-left: 10px;
  }

  .todo-content {
    flex-grow: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .delete-btn-span {
    text-align: right;
  }

  .delete-btn {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
  }

  .trash-icon {
    height: 20px;
    width: 20px;
    cursor: pointer;
  }

  .red {
    background-color: #ff8787;
  }
  .green {
    background-color: #69db7c;
  }
  .yellow {
    background-color: #ffd43b;
  }
  .blue {
    background-color: #4dabf7;
  }
</style>
