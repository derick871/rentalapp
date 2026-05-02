 import {useState} from 'react'

function Dashboard() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [role, setRole] = useState("user")
    const houses =[
        {id:201, name:"Luxury-Plazza", price:100000},
        {id:202, name:"White House", price:20000},
        {id:203, name:"Modern-View", price:1500}, 
    ]

    const userRole=(e)=>{
        setRole(e.target.value)
    }

    return (
        <div className="bg-slate-50 text-slate-500 flex m-10 p-4 md:p-2">
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
            <select onChange={userRole} value={role} className="bg-slate-300 p-1 m-2 rounded-md">
                <option value="tenants">Tenants</option>
                <option value="admin">Admin</option>
            </select>
                <div id="statsContainer" class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p class="text-slate-500 text-sm font-medium">Total Revenue</p>
            <h2 id="totalRevenue" class="text-2xl font-bold text-emerald-600">Ksh 0</h2>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p class="text-slate-500 text-sm font-medium">Available Units</p>
            <h2 id="unitsAvailable" class="text-2xl font-bold text-slate-800">0</h2>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p class="text-slate-500 text-sm font-medium">Active Tenants</p>
            <h2 id="activeTenants" class="text-2xl font-bold text-blue-600">0</h2>
        </div>
    </div>
            
        </div>
    )
}

export default Dashboard