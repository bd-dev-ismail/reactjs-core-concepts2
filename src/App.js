import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
      <ExtranlUsers></ExtranlUsers>
    </div>
  );
}
function ExtranlUsers(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []);
  return (
    <div>
      <h2>Extranl Users</h2>
      <p>{users.length}</p>
      {
        users.map((user) => <User name={user.name} email={user.email}></User> )
      }
    </div>
  );
}
function User(props){
  return (
    <div style={{border: '2px solid red', margin: '20px', }}>
      <h3>Name: {props.name}</h3>
      <p>Email: {props.email}</p>
    </div>
  )
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
