<script lang="ts">
  import { height, width } from "$lib/model/DocumentSetup";
  import Guides from "$lib/Guides.svelte";
  let guides = true; // TODO: place elsewhere

  /*
  TODO: create state machine for special actions
  taken on keydown. When <space>, cursor should
  switch to grab; on mousedown, cursor should
  switch to grabbing and canvas should move. On
  release of <space>, regular operation resumes.
  */
</script>

<div id="canvas">
  <div class="work-area">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      data-shadow
      height={height * 10}
      width={width * 10}
      viewBox="0 0 {height * 10} {width * 10}"
    >
      <Guides />
    </svg>
  </div>
</div>

<!-- 
  @component
  **Canvas**: The work area that houses the SVG we're drawing.
-->
<style>
  svg {
    background-color: gold;
    border: 1px solid blue;
    height: 80vmin;
    shape-rendering: geometricPrecision;
    width: 80vmin;
  }
  #canvas {
    background-color: blueviolet;
    display: grid;
    height: 100vh;
    overflow: hidden;
    place-content: center;
    width: 100vw;
  }
  .work-area {
    --cursor: grab;
    --left: 0px;
    --top: 0px;
    cursor: var(--cursor);
    translate: var(--left) var(--top);
  }
</style>
