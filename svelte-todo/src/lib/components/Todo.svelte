<script lang="ts">
  import ColorPalette from "./ColorPalette.svelte";
  import trashIcon from "../../assets/icons/trash.png";
  import type { ITodo } from "../models/todoModel";
  import { todosStore } from "../stores/todosStore";

  export let singleTodo: ITodo;

  let className: string = "";

  function handleColorSelected(event: { detail: { color: string } }) {
    const selectedColor = event.detail.color;
    console.log(event);
    switch (selectedColor) {
      case "red":
        className = "red";
        // todosStore.update((prev) => {
        //   return prev;
        // });
        break;
      case "blue":
        className = "blue";
        break;
      case "green":
        className = "green";
        break;
      case "yellow":
        className = "yellow";
        break;
      default:
        className = "";
    }
  }

  function handleDeleteToDo(id: number) {
    todosStore.update((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  }

  function handleToDoCompletion(id: number) {
    todosStore.update((prev) => {
      const currentTodo = prev.find((el) => el.id === id);
      console.log(currentTodo);
      return [
        {
          ...currentTodo,
          completed: !currentTodo?.completed,
        },
        ...prev,
      ];
    });

    // const inputElement = event.target as HTMLInputElement;
    // const index = +inputElement.dataset.index!;

    // console.log(inputElement);
    // todosStore.update((prev: any) => {
    //   const checkedEl = prev[index];
    //   // burka elementa , koito izbiram
    //   console.log(checkedEl);
    //   return [{ ...checkedEl, completed: inputElement.checked }, ...prev];

    // return prev.map((todo, i) => {
    //   if (i === index) {
    //     console.log(todo);
    //     return { ...todo, completed: inputElement.checked };
    //   }
    //   return todo;
    // });
    // });
  }
</script>

<div
  class="single-todo"
  class:red={className === "red"}
  class:green={className === "green"}
  class:yellow={className === "yellow"}
  class:blue={className === "blue"}
>
  <div>
    <input
      bind:checked={singleTodo.completed}
      type="checkbox"
      on:change={() => handleToDoCompletion(singleTodo.id)}
    />
    <p class="todo-content">{singleTodo.title}</p>
    <ColorPalette on:colorSelected={handleColorSelected}></ColorPalette>

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
