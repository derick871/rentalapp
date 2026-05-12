import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  // --- AUTHENTICATION & ROLE STATE ---
  // isLoggedIn: Controls whether the user sees the dashboard or the welcome screen
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // role: Determines the heading text ("Admin" vs "Tenants")
  const [role, setRole] = useState("tenants");
  
  // Static data array representing property records
  const houses = [
    { id: 201, name: "Luxury-Plaza", price: 100000 },
    { id: 202, name: "White House", price: 20000 },
    { id: 203, name: "Modern-View", price: 15000 },
  ];

  // --- DERIVED STATE / CALCULATED VALUES ---
  const totalRevenue = houses.reduce((acc, house) => acc + house.price, 0);

  return (
    
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 font-sans">
      <div>
        <nav className='font-bold text-slate-800 mb-4 flex gap-4'>
          <Link to="settings">Settings</Link>
          <Link to="accounts">Accounts</Link>
          
        </nav>
        <Outlet/>
      </div>
      <div className="max-w-6xl mx-auto">
        
        {/* Navigation Bar */}
        <nav className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap justify-between items-center mb-8 gap-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-slate-600 rounded-xl flex items-center justify-center text-white font-bold">SH</div>
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">Spot<span className="text-amber-600">House</span></h1>
          </div>

          <div className="flex items-center gap-4">
            {/* Role Selector: Updates the 'role' state on change */}
            <select 
              onChange={(e) => setRole(e.target.value)} 
              value={role} 
              className="bg-slate-50 border border-slate-200 text-slate-600 text-sm p-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            >
              <option value="tenants">Tenant View</option>
              <option value="admin">Admin View</option>
            </select>

            {/* Login Toggle: Flips the boolean state of isLoggedIn */}
            <button 
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className={`px-6 py-2 rounded-lg font-semibold text-sm transition-all shadow-sm ${
                isLoggedIn 
                ? "bg-rose-50 text-rose-600 hover:bg-rose-100" 
                : "bg-slate-600 text-white hover:bg-amber-500"
              }`}
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </nav>

        {/* --- CONDITIONAL RENDERING (TERNARY OPERATOR) --- */}
        {!isLoggedIn ? (
          /* View 1: Shown when isLoggedIn is false */
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-slate-300">
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back!</h2>
            <p className="text-slate-500 mb-6">Please log in to manage your properties and view insights.</p>
            <button 
              onClick={() => setIsLoggedIn(true)}
              className="bg-slate-800 text-white px-8 py-3 rounded-xl hover:bg-amber-600 hover:scale-105 transition-transform"
            >
              Access Dashboard
            </button>
          </div>
        ) : (
          /* View 2: Shown when isLoggedIn is true (The actual Dashboard) */
          <>
            {/* Header Message - Example of "Inline Logic" using ternary for the title */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800">
                {role === "admin" ? "Admin Manage Properties" : "Tenants Overview"}
              </h2>
              <p className="text-slate-500">Welcome to SportHouse to explore houses.</p>
            </div>

            {/* Stats Grid - Displaying calculated values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Total Revenue</p>
                <h2 className="text-3xl font-black text-emerald-600">
                   Ksh {totalRevenue.toLocaleString()}
                </h2>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Available Units</p>
                {/* Dynamically counts the items in our data array */}
                <h2 className="text-3xl font-black text-slate-800">{houses.length}</h2>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <p className="text-slate-400 text-xs uppercase tracking-wider font-bold mb-1">Active Tenants</p>
                <h2 className="text-3xl font-black text-indigo-600">3</h2>
              </div>
            </div>

            {/* Property List Preview - Mapping over the houses array to create list items */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-6 border-b border-slate-100">
                    <h3 className="font-bold text-slate-800">Recent Listings</h3>
                </div>
                <div className="divide-y divide-slate-100">
                    {houses.map(house => (
                        <div key={house.id} className="p-4 flex justify-between items-center hover:bg-slate-50 transition-colors">
                            <span className="font-medium text-slate-700">{house.name}</span>
                            <span className="text-slate-500 font-mono bg-slate-100 px-3 py-1 rounded-full text-sm">
                                Ksh {house.price.toLocaleString()}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Dashboard;