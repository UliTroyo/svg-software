<script lang="ts">
  import { toolState } from "$lib/toolState";
  import { tools } from "$lib/tools";
</script>

<div id="toolbar" data-shadow>
  {#each tools as tool}
    <button on:click={() => toolState.send(tool.toUpperCase())}>{tool}</button>
  {/each}
</div>

<!-- 
  @component
  **Toolbar**: The toolbar from which one selects tools.
-->
<style>
  button {
    padding: 0.3em 0.5em;
  }
  :global(#toolbar) {
    background-color: gold;
    border: 1px solid orange;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    height: 95vh;
    margin: 0.5em;
    padding: 0.5em;
    position: absolute;
    z-index: 2;
  }
</style>
