const memory: any[] = [];

export function store(snapshot: any) {
  memory.push(snapshot);
}

export function recall() {
  return memory;
}
