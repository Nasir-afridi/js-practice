import React, { useState } from 'react';
import Button from './button';
import Counter from './counter';
import './App.css'

function App() {
  function submit(q) {
   q.preventDefault();
    console.log('first');
  }
  return (
    <>
      <Counter></Counter>
      <Button></Button>
      <form onSubmit={(q)=>{
        submit(q)
      }}><input type="text" />
      <button type="submit">submit</button></form>
      
    </>
  )
}

export default App;

