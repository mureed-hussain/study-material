import React from "react";
import "./App.css";

function App() {
  const students = ["Mureed", "Hussain", "Umar", "Aamir"];
  students.map((data) => {
    console.log(data);
  });
  return (
    <div className="App">
      {students.map((data) => (
        <h1>{data}</h1>
      ))}
    </div>
  );
}

export default App;
