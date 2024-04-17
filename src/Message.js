import React from 'react'
import { useState } from 'react'
export default function Message() {
  // Outer function {inner function} is known as closer
    // let [mess,setmess]=useState("click me")
  //   function handlechange(){
  //    let today=new Date();

  //   setmess(today.toLocaleString());
  //  }
  //Arrow function
  let [mess,setmess]=useState("Show date time")

//  let handlechange=()=>{
//     let today=new Date();

//    setmess(today.toLocaleString());
//   }
    
  return (
    <>
    {/* <button onClick={handlechange}>{mess}</button> */}
    <button onClick={()=>{
    let today=new Date();

   setmess(today.toLocaleString());
  }}>{mess}</button>

      
    </>
  )
}
