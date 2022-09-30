<script lang="ts">
  import { height, width } from "$lib/model/DocumentSetup";
  import Guides from "$lib/Guides.svelte";
  let guides = true; // TODO: place elsewhere
</script>

<div id="canvas">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={height * 10}
    width={width * 10}
    viewBox="0 0 {height * 10} {width * 10}"
  >
    <Guides />
  </svg>
</div>

<!-- 
  @component
  **Canvas**: The work area that houses the SVG we're drawing.
-->
<style>
  svg {
    height: 100%;
    shape-rendering: geometricPrecision;
    width: 100%;
  }
</style>
