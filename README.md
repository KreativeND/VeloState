# VeloState

VeloState is a lightweight, high-performance state management library for React. It provides a simple, minimal syntax for managing global state with support for async updates, history persistence, and caching.

## Features

- ⚡ **Fast** performance optimized
- 🔄 **Asynchronous** support
- 📦 **Cache** support for filtering & operations
- ⏳ **History persistence** for undo/redo
- 🧩 Supports **multiple stores** for scalable apps

## Installation

To install VeloState, run:

```bash
npm install velostate
```

## Usage

### Create a Store

```tsx
import { createState } from "velostate";

// Create a store with an initial state
const counterStore = createState({ count: 0 });
```

### Using the Store in a Component

```tsx
import { useStore } from "velostate";

function Counter() {
  const [state, setState] = useStore(counterStore);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => setState({ count: state.count + 1 })}>
        Increment
      </button>
    </div>
  );
}
```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Create a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).
