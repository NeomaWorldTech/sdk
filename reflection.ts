export function reflect(worldState: any) {
  return {
    coherence: Math.random(),
    novelty: Math.random(),
    memoryImpact: worldState.entities?.length || 0
  };
}
