<script lang="ts">
  import SideBar from "./lib/components/SideBar.svelte";
  import Todos from "./lib/components/Todos.svelte";
  import AddTodo from "./lib/components/AddTodo.svelte";

  //   onMount(async () => {
  //     toDos = await getTodos();
  //   });

  //   const getTodos = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await res.json();
  //     return data;
  //   };

  // getTodos();

  function filterByColor(color: string) {}
  function showResolved() {}
  function showUnresolved() {}
</script>

<main>
  <h1 class="title">Task organizer app - always know what ToDo!</h1>
  <div class="container">
    <!-- 
        {#await toDos}
        <p>Loading...</p>
        {:then data} -->
    <div class="todos-container">
      <AddTodo></AddTodo>

      <Todos></Todos>

      <!-- {/await} -->
    </div>
    <SideBar></SideBar>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    text-align: center;
    margin: auto;
  }

  .container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    margin-top: 20px;
  }

  .container > div {
    margin-right: 20px;
  }

  .todos-container {
    min-width: 700px;
  }
</style>
