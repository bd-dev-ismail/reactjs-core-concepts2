import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter(){
  //Using State - something want to change
  const [count, setCount] = useState(55);
  const incraseCount = () => setCount(count + 1);
  const decraseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incraseCount}>Increase++</button>
      <button onClick={decraseCount}>Decrase--</button>
    </div>
  )
}
export default App;
