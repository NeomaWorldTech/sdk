export let state: any = {};

export function update(newState: any) {
  state = { ...state, ...newState };
}
