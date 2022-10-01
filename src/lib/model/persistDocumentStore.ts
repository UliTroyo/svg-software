import { writable } from "svelte/store";

// Brittney Postma rocks!

export function persistDocumentStore(id: number, initial) {
  const persisted = localStorage.getItem(id);
  const document = persisted ? JSON.parse(persisted) : initial;

  const store = writable(document, function subscription() {
    const unsubscribe = store.subscribe((svg) => {
      localStorage.setItem(id, JSON.stringify(svg));
    });
    return unsubscribe;
  });
}
