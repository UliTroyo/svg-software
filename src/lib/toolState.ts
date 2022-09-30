import { createMachine, interpret } from "xstate";
import { tools } from "$lib/tools";

function toolsIntoStates(toolNames: string[]) {
  let states = {};
  for (const tool of toolNames) {
    let transitions = {};
    for (const t of toolNames) {
      if (t != tool) {
        transitions = { ...transitions, [t.toUpperCase()]: t };
      }
    }
    states = { ...states, [tool]: { on: transitions } };
  }
  return states;
}

const toolMachine = createMachine({
  id: "tool",
  initial: "selection",
  states: toolsIntoStates(tools),
  predictableActionArguments: true,
});

export const toolState = interpret(toolMachine).start();
