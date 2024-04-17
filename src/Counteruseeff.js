import React, { useState,useEffect } from 'react'

export default function Counteruseeff() {
    const [num,setnum]=useState(1)

    const handleClick=() => {
        setnum((prevCounter)=>prevCounter+1)
    };
    useEffect(()=>{
        document.title=num; 
    },[num]);

  return (
    <>
    <h2>Counter is:{num}</h2>
    <button onClick={handleClick}>Increment</button>
      
    </>
  )
}
