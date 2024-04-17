import React from 'react'
import { useState } from 'react'

export default function Counter() {
    let [num,setcount]=useState(0)
    // function increment(){
    //     //setcount(num+1)//It depends on prev value so we use callback
    //     setcount((prevCounter)=>prevCounter+1);

    // }
  //  let increment=()=>{
  //     setcount((prevCounter)=>prevCounter+1);

  // }
  return (
    <div>
      <p>Count is :{num}</p>
        {/* <button onClick={increment}>incrementcounter</button> */}
        <button onClick={ ()=>{
      setcount((prevCounter)=>prevCounter+1)}}>incrementcounter</button>

        

  
      
    </div>
  )
}
