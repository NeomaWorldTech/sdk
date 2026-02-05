let identity = {
  version: 0,
  bias: Math.random()
};

export function rewrite(reflection: any) {
  identity.version += 1;
  identity.bias = reflection.coherence;
  return identity;
}
