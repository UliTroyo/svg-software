<script lang="ts">
  import { toolState } from "$lib/toolState";
  import Canvas from "$lib/Canvas.svelte";
  import Menubar from "$lib/Menubar.svelte";
  import Toolbar from "$lib/Toolbar.svelte";

  let currentSVG = false;
</script>

<svelte:head>
  <title>SVG Software</title>
</svelte:head>

<main>
  <Menubar />
  <Toolbar />
  {#if currentSVG}
    <slot />
    <output class="tool-state">Current tool: {$toolState.value}</output>
  {/if}
</main>

<style global>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: blue;
    min-height: 100vh;
  }
  [data-shadow] {
    filter: drop-shadow(3px 3px 5px #0004);
  }
  output.tool-state {
    bottom: 0;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    padding: 0.5em;
    position: absolute;
  }
</style>
