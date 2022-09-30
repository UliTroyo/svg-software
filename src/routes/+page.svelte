<script lang="ts">
  import { toolState } from "$lib/toolState";
  import Canvas from "$lib/Canvas.svelte";
  import Toolbar from "$lib/Toolbar.svelte";
</script>

<svelte:head>
  <title>SVG Software</title>
</svelte:head>

<Toolbar />
<Canvas />
<output>{$toolState.value}</output>

<style>
  :global(*) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  :global(body) {
    background-color: blueviolet;
    display: grid;
    min-height: 100vh;
    place-content: center;
  }
  :global(#canvas) {
    background-color: gold;
    height: 90vmin;
    padding: 1em;
    width: 90vmin;
  }
  output {
    bottom: 0;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    padding: 0.5em;
    position: absolute;
  }
</style>
