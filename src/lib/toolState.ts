import { createMachine, interpret } from "xstate";
import { tools } from "$lib/tools";

/*
I didn't want to write it by hand, but this just takes
a list of available tools and writes transitions for
each, where an event with the name of another existing
tool puts you in that next tool state. So:
rectangle -> send('PATH') -> path
*/

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
