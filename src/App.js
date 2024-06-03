import { create } from "zustand";
import "./App.css";
import Card from "./Card";

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
  hexagonalPopulation: () => set((state) => ({ bears: state.bears + 6 })),
  removeAllBears: () => set({ bears: 0 }),
}));

function App() {
  const { bears } = useStore();
  const increasePopulation = useStore((state) => state.increasePopulation);
  const decreasePopulation = useStore((state) => state.decreasePopulation);
  const hexagonalPopulation = useStore((state) => state.hexagonalPopulation);
  const removeAllBears = useStore((state) => state.removeAllBears);

  return (
    <div className="App">
      <h1>곰 {bears} 마리</h1>
      <button onClick={increasePopulation}>a Bear</button>
      <button onClick={decreasePopulation}>Go Home</button>
      <button onClick={hexagonalPopulation}>Hexagonal</button>
      <button onClick={removeAllBears}>Hibernation</button>
      <Card />
    </div>
  );
}

export default App;
