<script lang="ts">
  import { height, width } from "$lib/model/DocumentSetup";
</script>

<g id="guides">
  <g class="horizontal">
    {#each { length: width + 1 } as _, i}
      <line
        x1="0"
        x2={width * 10}
        y1={i * 10}
        y2={i * 10}
        class={i % (width / 2) == 0 ? "separator" : ""}
      />
    {/each}
  </g>
  <g class="vertical">
    {#each { length: height + 1 } as _, i}
      <line
        x1={i * 10}
        x2={i * 10}
        y1="0"
        y2={height * 10}
        class={i % (height / 2) == 0 ? "separator" : ""}
      />
    {/each}
  </g>
</g>

<style>
  line {
    opacity: 0.3;
    stroke: purple;
    stroke-width: 0.05px;
  }
  .separator {
    stroke-width: 0.15px;
  }
</style>
