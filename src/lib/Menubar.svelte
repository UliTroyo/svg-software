<script lang="ts">
  function fileMenu(event: Event) {
    console.log(event.target);
  }
</script>

<div id="menubar">
  <button on:click={fileMenu}>File</button>
</div>

<style>
  #menubar {
    background-color: black;
  }
</style>
