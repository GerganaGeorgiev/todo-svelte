<script lang="ts">
  import { onDestroy } from "svelte";
  import type { ITodo } from "../models/todoModel";
  import {
    resolvedTodos,
    todosStore,
    unresolvedTodos,
  } from "../stores/todosStore";
  import FilterTodos from "./FilterTodos.svelte";
  import Todo from "./Todo.svelte";

  let todos: ITodo[];

  const unsubscribe = todosStore.subscribe((value: ITodo[]) => {
    todos = value;
  });

  function handleFilterSelected(event: { detail: { filter: string } }) {
    const selectedFilter = event.detail.filter;

    if (selectedFilter === "resolved") {
      return resolvedTodos.subscribe((value: ITodo[]) => {
        console.log(todos);
        todos = value;
      });
    } else if (selectedFilter === "unresolved") {
      return unresolvedTodos.subscribe((value: ITodo[]) => {
        todos = value;
      });
    }
  }

  onDestroy(unsubscribe);
</script>

<div class="todos">
  <FilterTodos on:filterSelected={handleFilterSelected}></FilterTodos>
  {#each todos as todo (todo.id)}
    <Todo singleTodo={todo}></Todo>
  {/each}
</div>
