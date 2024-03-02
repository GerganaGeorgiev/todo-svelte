<script lang="ts">
  import { onDestroy } from "svelte";
  import type { ITodo } from "../models/todoModel";
  import {
    blueTodosStore,
    greenTodosStore,
    redTodosStore,
    resolvedTodosStore,
    todosStore,
    unresolvedTodosStore,
    yellowTodosStore,
  } from "../stores/todosStore";
  import FilterTodos from "./FilterTodos.svelte";
  import Todo from "./Todo.svelte";
  import type { Filter, StoreSubscription } from "../models/types";

  let todos: ITodo[];

  let initialDataSubscription: StoreSubscription;
  let derivedStoreSubscription: StoreSubscription;

  initialDataSubscription = todosStore.subscribe((value: ITodo[]) => {
    todos = value;
  });

  function handleFilterSelected(event: { detail: { filter: Filter } }) {
    const selectedFilter = event.detail.filter;

    if (derivedStoreSubscription) {
      derivedStoreSubscription();
    }

    if (selectedFilter == "resolved") {
      derivedStoreSubscription = resolvedTodosStore.subscribe(
        (value: ITodo[]) => {
          todos = value;
        }
      );
    } else if (selectedFilter === "unresolved") {
      derivedStoreSubscription = unresolvedTodosStore.subscribe(
        (value: ITodo[]) => {
          todos = value;
        }
      );
    } else if (selectedFilter === "none") {
      derivedStoreSubscription = todosStore.subscribe((value: ITodo[]) => {
        todos = value;
      });
    } else if (selectedFilter === "red") {
      derivedStoreSubscription = redTodosStore.subscribe((value: ITodo[]) => {
        todos = value;
      });
    } else if (selectedFilter === "blue") {
      derivedStoreSubscription = blueTodosStore.subscribe((value: ITodo[]) => {
        todos = value;
      });
    } else if (selectedFilter === "yellow") {
      derivedStoreSubscription = yellowTodosStore.subscribe(
        (value: ITodo[]) => {
          todos = value;
        }
      );
    } else if (selectedFilter === "green") {
      derivedStoreSubscription = greenTodosStore.subscribe((value: ITodo[]) => {
        todos = value;
      });
    }
  }

  onDestroy(() => {
    initialDataSubscription.unsubscribe();
    derivedStoreSubscription.unsubscribe();
  });
</script>

<div class="todos">
  <FilterTodos on:filterSelected={handleFilterSelected}></FilterTodos>
  {#each todos as todo (todo.id)}
    <Todo singleTodo={todo}></Todo>
  {/each}
</div>
