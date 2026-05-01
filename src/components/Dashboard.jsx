 import React, {useState} from 'react'
import { BrowserRouter as Router,Routes,Route} from "react-router-dom"


function Dashboard(){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [role, setRole] = useState("user")
    const product =[
        {id:201, name:"Luxury-Plazza", price:100000},
        {id:202, name:"White House", price:20000},
        {id:203, name:"Modern-View", price:1500}, 
    ]

    const userRole=(e)=>{
        setRole(e.target.value)
    }

    return (
        <div>
            <h1>Dashboard</h1>
            {!isLoggedIn ?(
                <h1>welcome! Please Login </h1>
            ) : (
                <>
                    {role === "tenants" && <h2>Welcome to Customer dashboard</h2>}
                    {role === "admin" && <h2>Welcome to admin dashboard</h2>}
                    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "LOGOUT" : "LOGIN"}</button>
                </>
            )}
            <select onChange={userRole} value={role}>
                <option value="tenants">Tenants</option>
                <option value="admin">Admin</option>
            </select>
            <button onClick={() => setRole}> Role </button>

            
        </div>
    )
}

export default Dashboard