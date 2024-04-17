import React, { useState } from 'react'
export default function ShoppingApp2() {
    const[Data,setData]=useState({name:"",price:0})
    const[AddData,setAdddata]=useState([])
    const handleChange=((e)=>{
        setData({...Data,name:e.target.value})
    })
    const handleChangeprice=((e)=>{
        setData({...Data,price:e.target.value})
    })
    const handleSubmit=((e)=>{
        e.preventDefault()
        setAdddata([...AddData,Data])
        setData({name:"",price:0})
    })
  return (
    <div>
        <h1>Shopping App</h1>
        <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Type item name:</label><br/>
        <input type='text' onChange={handleChange} value={Data.name} id='name'></input><br/>
        <label htmlFor='name'>Type item price:</label><br/>
        <input type='number' onChange={handleChangeprice} value={Data.price} id='name'></input><br/>
        <button>Add Item</button>
        </form>
        <table border="2">
         <thead><tr><th>Name</th><th>Price</th></tr></thead>
         <tbody>
            {AddData.map((item,index)=><tr>
                <td>{item.name}</td>
                <td>{item.price}</td>
            </tr>)
            }
         </tbody>
            </table>    
    </div>
  )
}