import { writable, derived } from "svelte/store";
import type { ITodo } from "../models/todoModel";

let storeData: ITodo[] = [];

export const todosStore = writable(storeData, (set) => {
  fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res) => res.json())
    .then((data) => set(data));
});

export const resolvedTodosStore = derived(todosStore, ($todos) => {
  return $todos.filter((todo) => todo.completed);
});

export const unresolvedTodosStore = derived(todosStore, ($todos) => {
  return $todos.filter((todo) => !todo.completed);
});

export const redTodosStore = derived(todosStore, ($todos) => {
  return $todos.filter((todo) => todo.color === "red");
});

export const blueTodosStore = derived(todosStore, ($todos) => {
  return $todos.filter((todo) => todo.color === "blue");
});

export const greenTodosStore = derived(todosStore, ($todos) => {
  return $todos.filter((todo) => todo.color === "green");
});

export const yellowTodosStore = derived(todosStore, ($todos) => {
  return $todos.filter((todo) => todo.color === "yellow");
});
