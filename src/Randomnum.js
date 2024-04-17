import React, {useState} from 'react'

export default function Randomnum() {
    const [Random,setRandom] = useState([]);
    const handleAddRandom=(e)=>{
 const randomnum=Math.floor(Math.random()*10+1)
 setRandom([...Random,randomnum])
    }
  return (
    <>
      <button onClick={handleAddRandom}>Add Random number</button>
      <ul>
        {Random.map((item,index)=>{ 
            return <li key={index}>{item}</li>
        })}
      </ul>  
    </>
  )
}











