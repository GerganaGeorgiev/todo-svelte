import { writable, readable, derived } from "svelte/store";
import type { ITodo } from "../models/todoModel";

let storeData: ITodo[] = [];

export const todosStore = writable(storeData, (set) => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => set(data));
});

export const resolvedTodos = derived(todosStore, ($todos) => {
  return $todos.filter((todo) => todo.completed);
});

export const unresolvedTodos = derived(todosStore, ($todos) => {
  return $todos.filter((todo) => !todo.completed);
});
