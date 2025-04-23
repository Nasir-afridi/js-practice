import React, { useState } from 'react';

const button = () => {
    const [first, setFirst] = useState('OFF')
    function setValue() {
        if(first === 'ON'){
        setFirst('OFF')
    }else{
        setFirst('ON')
    }
    }
    
  return (
    <div className='ON'>
        <h3>This is the ON and OFF button</h3>
        <button onClick={setValue}>{first}</button>
    </div>
  )
}

export default button;