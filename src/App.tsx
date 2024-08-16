import { createSignal } from 'solid-js';
import './App.css';

function App() {
   const [count, setCount] = createSignal(47);

   return <>Hello Vite {count}</>;
}

export default App;
