import React, { useState } from 'react';


const counter = () => {
  const [a, setA] = useState(0);
    function increased() {
      setA(a+1)
    }
    function decreased() {
      setA(a-1)
    }
    function reset() {
        setA(0)
    }
    if(a < 0) {
      alert('Number less than zero are not allowed');
      setA(0);
    }
    return (
    <>
      <h3>Number is {a}</h3>
      <div className=''>
        <button className='buttons' onClick={increased}>Increased</button>
        <button className='buttons' onClick={decreased}>Decreased</button>
        <button className='buttons' onClick={reset}>Reset</button>
      </div>
      

    </>
  )
}

export default counter;