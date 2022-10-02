<script lang="ts">
  import { toolState } from "$lib/toolState";
  import Canvas from "$lib/Canvas.svelte";
  import Menubar from "$lib/Menubar.svelte";
  import Toolbar from "$lib/Toolbar.svelte";
</script>

<svelte:head>
  <title>SVG Software</title>
</svelte:head>

<main>
  <Menubar />
  <Toolbar />
  <Canvas />
  <output>Current tool: {$toolState.value}</output>
</main>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(body) {
    background-color: blue;
    min-height: 100vh;
  }
  output {
    bottom: 0;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    padding: 0.5em;
    position: absolute;
  }
  :global([data-shadow]) {
    filter: drop-shadow(3px 3px 5px #0004);
  }
</style>
