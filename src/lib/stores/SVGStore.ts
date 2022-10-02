import { writable } from "svelte/store";
import { browser } from "$app/environment";

// TODO: still very unsure about the API

const id = "some_id";

//---------------------------------------------------
//                Brittany Postma
//---------------------------------------------------

const defaultData = {};

function SVGStore(id: string, initial = defaultData) {
  const persisted = localStorage.getItem(id);
  const svgDoc = persisted ? JSON.parse(persisted) : initial;

  const store = writable(svgDoc, function subscription() {
    const unsubscribe = store.subscribe((value) => {
      localStorage.setItem(id, JSON.stringify(value));
    });
    return unsubscribe;
  });
  return store;
}

export const store = SVGStore("data", defaultData);

//---------------------------------------------------
//           Svelte Society / WebJeda
//---------------------------------------------------

export const svgDocument = writable(
  browser && (localStorage.getItem(id) || "new svg"),
  function start() {
    console.log(`This SVG has the id ${id}`);
  }
);

svgDocument.subscribe(function subscription(svgDoc) {
  svgDoc && browser && localStorage.setItem(id, svgDoc);
});
