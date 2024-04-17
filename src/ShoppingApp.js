import React, { useState } from 'react'
export default function ShoppingApp2() {
    const[Data,setData]=useState('')
    const[AddData,setAdddata]=useState([])
    const handleChange=((e)=>{
        setData(e.target.value)
    })
    const handleSubmit=((e)=>{
        e.preventDefault()
        setAdddata([...AddData,Data])
        setData("")
    })
  return (
    <div>
        <h1>Shopping App</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Type item name:</label>
        <input onChange={handleChange} value={Data} id='name'></input>
        <button>Add Item</button>
        </form>
        <h3>Your Shopping Cart:{AddData.length===0?"Empity":""}</h3>
        <ul>{AddData.map((item,index)=>{
            return <li key={index}>{item}</li>
        })}
        </ul>

      
    </div>
  )
}
