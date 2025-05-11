// src/store.ts

// Type definition for the Store
export type Store<T> = {
  get: () => T;
  set: (newState: Partial<T>) => void;
  subscribe: (listener: (newState: T) => void) => () => void;
};

// Create a new state store
export function createVeloState<T>(initialState: T): Store<T> {
  let state = initialState;
  let listeners: Function[] = [];

  // Get the current state
  function get() {
    return state;
  }

  // Set a new state and notify listeners
  function set(newState: Partial<T>) {
    state = { ...state, ...newState };
    listeners.forEach((listener) => listener(state));
  }

  // Subscribe a listener to the state
  function subscribe(listener: Function) {
    listeners.push(listener);
    // Return unsubscribe function
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }

  return { get, set, subscribe };
}
