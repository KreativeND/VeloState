// src/useStore.ts
import { useState, useEffect } from "react";
import { Store } from "./store";

// Custom hook to use the state from the store
export function useVeloState<T>(
  store: Store<T>
): [T, (partial: Partial<T>) => void] {
  const [state, setState] = useState(store.get()); // Get the initial state

  useEffect(() => {
    // Subscribe to state updates from the store
    const unsubscribe = store.subscribe((newState: T) => {
      setState(newState);
    });

    // Cleanup function to unsubscribe when the component unmounts
    return unsubscribe;
  }, [store]);

  // A function to update the state
  const set = (partial: Partial<T>) => store.set(partial);

  return [state, set]; // Return the state and set function
}
