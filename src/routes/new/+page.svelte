<script>
  // your script goes here
</script>

<svelte:head>
  <!-- head content -->
</svelte:head>

<main>
  <button>Create a new regular SVG</button>
  <button disabled>Create a new SVG animated sprite</button>
  <button disabled>Open an existing SVG</button>
</main>

<style>
  :global(body) {
    background-color: blueviolet;
    display: grid;
    min-height: 100vh;
    place-content: center;
  }
  main {
    background-color: gold;
    display: flex;
    flex-direction: column;
    padding: 1em;
  }
  button {
    background-color: transparent;
    border: none;
    font-size: 1.5em;
    text-align: left;
  }
  button:hover {
    background-color: orange;
    cursor: pointer;
  }
</style>
