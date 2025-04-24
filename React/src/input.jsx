import { useState } from "react"
import React from 'react'

const input = () => {
    const [username, setUsername] = useState('')
    function submit(q) {
    q.preventDefault();
    console.log(username);
    setUsername('');
    }

  return (
    <div>
        <form onSubmit={submit}>
        <input type="text" value={username} onChange={(e)=>{
            setUsername(e.target.value);
        }}/>
        <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default input;