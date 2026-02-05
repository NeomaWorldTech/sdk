import { Entity } from "./entities";

export function generate(concepts: string[]): Entity[] {
  return concepts.map((c, i) => ({
    id: `entity-${i}`,
    meaning: c
  }));
}
