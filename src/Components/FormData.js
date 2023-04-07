import { useState } from 'react'

function FormData({userAdd}) {
    const [name,setName]=useState('')
    const[email,setEmail]=useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        userAdd({name,email})
    }
  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" onChange={(e)=>setName(e.target.value)} />
        <br />
        <label htmlFor="email">Email:</label>
        <input id="email" type="text" onChange={(e)=>setEmail(e.target.value)} />
        <br />
        <button>Add user</button>
    </form>
  )
}

export default FormData