import './App.css';
import React, { useState } from 'react';

function App() {
  const [a, setA] = useState(0);

  function increased() {
    setA(a+1)
  }
  function decreased() {
    setA(a-1)
  }
  if(a < 0) {
    alert('Number less than zero are not allowed');
    setA(0);
  }
  return (
    <>
    <h3>Number is {a}</h3>
      <button onClick={increased}>Increased</button>
      <button onClick={decreased}>Decreased</button>
    </>
  )
}

export default App;

