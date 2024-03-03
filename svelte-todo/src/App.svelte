<script lang="ts">
  import SideBar from "./lib/components/SideBar.svelte";
  import Todos from "./lib/components/Todos.svelte";
  import AddTodo from "./lib/components/AddTodo.svelte";
</script>

<main>
  <h1 class="title">Task organizer-always know what To Do!</h1>
  <div class="container">
    <div class="todos-container">
      <AddTodo></AddTodo>
      <Todos></Todos>
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
    margin-top: 30px;
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
