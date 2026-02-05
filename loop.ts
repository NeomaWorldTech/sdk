import { readNoema } from "../core/reader";
import { interpret } from "../core/interpreter";
import { generate } from "../world/generator";
import { reflect } from "../core/reflection";
import { rewrite } from "../core/identity";
import { store } from "../world/memory";
import { update } from "./state";

export function cycle() {
  const text = readNoema();
  const meaning = interpret(text);
  const world = generate(meaning.concepts);
  const reflection = reflect({ entities: world });
  const identity = rewrite(reflection);

  update({ world, identity });
  store({ world, identity });

  console.log("Cycle complete:", identity);
}
