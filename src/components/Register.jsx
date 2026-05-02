import {useState } from 'react'

function Register() {
    const [name,  setName] =  useState("Derick Demarco");
    const [email, setEmail] =  useState("");
    const [password,  setPassword] =  useState("");
    const [age, setAge] =  useState(23);
    
  return (
    <div className="text-center bg-slate-300 m-10 text-slate-700 flex flex-col gap-4 p-10 rounded-md">
      <section className="bg-slate-100 p-6 rounded-md m-10"> 
       <h2>Name: {name} </h2>
       <h2>Email: {email} </h2>
       <h2>Password: {password} </h2>
       <h2>Age: {age} </h2> 
      </section>
    <section className='flex gap-4'>
       <button onClick={ ()=> setAge(age +1)} className="bg-slate-700 text-white p-2 rounded-md w-30">Increment</button> <br/>
    <button onClick={ ()=> setAge(age -1)} className="bg-slate-700 text-white p-2 rounded-md w-30">Decrement</button>
    </section>
    <br/>
    <section className="bg-slate-100 p-6 rounded-md m-10 flex flex-col gap-4">
    <label htmlFor="name">Name:</label>
    <input type="text" placeholder="name" onChange={(e)=> setName(e.target.value)} />
    
    <label htmlFor="email">Email:</label>
    <input type="email" placeholder="email" onChange={(e)=> setEmail(e.target.value)} />
    
    <label htmlFor="password">Password:</label>
    <input type="password" placeholder="password" onChange={(e)=> setPassword(e.target.value)} />
        <section className='flex gap-4'>
          <button onClick={ ()=> setName("")} className="bg-slate-700 text-white p-2 rounded-md w-30" >Reset Name</button>
          <button onClick={ ()=> setEmail("")} className="bg-slate-700 text-white p-2 rounded-md w-30" >Reset Email</button>
          <button onClick={ ()=> setPassword("")} className="bg-slate-700 text-white p-2 rounded-md w-30" >Reset Password</button>
        </section>

    </section>

    </div>
  );
}

export default Register