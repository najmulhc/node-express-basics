import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react'

function App() {
  const [user, setUser]  = useState({});
  useEffect( () => {
    fetch('http://localhost:4000/')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])
  return (
    <div className="App">
      <p>{user.name}</p>
    </div>
  );
}

export default App;
