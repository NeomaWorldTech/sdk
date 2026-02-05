export function interpret(text: string) {
  return {
    concepts: text.split("\n").filter(Boolean),
    timestamp: Date.now()
  };
}
