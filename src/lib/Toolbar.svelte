<div id="toolbar">
  <button>Tool</button>
  <button>Tool</button>
  <button>Tool</button>
  <button>Tool</button>
</div>

<style>
  button {
    padding: 0.3em 0.5em;
  }
  :global(#toolbar) {
    background-color: gold;
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    height: 95vh;
    margin: 0.5em;
    padding: 0.5em;
    position: absolute;
  }
</style>
