import {useState} from 'react'
export default function Formdemo() {
  let initalData={
    firstName:""
    ,lastName:""
  }
    const[Data,setData]=useState(initalData)
  //   function getInputData(e) {
  //     var { name, value } = e.target
  //     setData((old) => {
  //         return {
  //             ...old,
  //             [name]: value
  //         }
  //     })
  // } 
  let handleChange=(e) => {
    var { name, value } = e.target
    setData((old) => {
        return {
            ...old,
            [name]: value
        }
    })
}
 
  return (
    <div>
        FirstName:<br/>
        <input type='text' value={Data.firstName} name='firstName' onChange={handleChange}/>
        <br/>
        LastName:<br/>
        <input type='text' value={Data.lastName} name='lastName' onChange={handleChange}/>
        <br/>
        {/* Logical operator */}
        {(Data.firstName.length>0||Data.lastName.length>0 ) && <span>Hello {Data.firstName} {Data.lastName}</span> }  
    </div>
  )
}


// import {useState} from 'react'
// export default function Formdemo() {
//     const[Data,setData]=useState({firstName:"",lastName:""})
    
//     const handlefirstName=(e) => {
//         setData({...Data,firstName:e.target.value})
//     }
//     const handlelastName=(e) => {
//         setData({...Data,lastName:e.target.value})
//     }
//   return (
//     <div>
//         FirstName:<br/>
//         <input type='text' value={Data.firstName} onChange={handlefirstName}/>
//         <br/>
//         LastName:<br/>
//         <input type='text' value={Data.lastName} onChange={handlelastName}/>
//         <br/>
//         {/* Logical operator */}
//         {(Data.firstName.length>0||Data.lastName.length>0 ) && <span>Hello {Data.firstName} {Data.lastName}</span> }  
//     </div>
//   )
// }







// import {useState} from 'react'
// export default function Formdemo() {
//     const[firstName,setFirstName]=useState("")
//     const[lastName,setLastName]=useState("")
//     const handlefirstName=(e) => {
//         setFirstName(e.target.value)
//     }
//     const handlelastName=(e) => {
//         setLastName(e.target.value)
//     }
//   return (
//     <div>
//         FirstName:<br/>
//         <input type='text' value={firstName} onChange={handlefirstName}/>
//         <br/>
//         LastName:<br/>
//         <input type='text' value={lastName} onChange={handlelastName}/>
//         <br/>
//         {/* Logical operator */}
//         {(firstName.length>0||lastName.length>0 ) && <span>Hello {firstName} {lastName}</span> }  
//     </div>
//   )
// }
