import "./App.css";
import {  useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [users, setUsers] = useState([{ id: 1, name: "Prodosh Mitter", roll: "565" }]);
 

  const handleStudenInfoSubmit = (e) => {
    e.preventDefault();
    const student = { name: name, roll: roll };
    console.log(student);
    // post data to server
    fetch("http://localhost:4000/testing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(student),
    })
      .then((res) => res.json())
      .then((data) =>  {
        console.log(data);
        const tempUsers = [...users, data];
        setUsers(tempUsers);
      });
  };
  return (
    <div className="App">
      
      <hr />
      <h1>Student information</h1>
      <form action="" onSubmit={handleStudenInfoSubmit}>
        <label htmlFor="name">
          Name{" "}
          <input
            type="text"
            name="name"
            onBlur={(e) => setName(e.target.value)}
          />
        </label>
        <label htmlFor="roll">
          Roll number
          <input
            type="text"
            name="roll"
            onBlur={(e) => setRoll(e.target.value)}
          />
        </label>
        <button type="submit">Submit info</button>
      </form>
      <div className="">{
           users.map(user => {
             return (
               <p>{user.name}</p>
             )
           })
      }</div>
    </div>
  );
}

export default App;
