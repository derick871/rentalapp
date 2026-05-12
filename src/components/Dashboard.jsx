import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dashboard() {
  // --- AUTHENTICATION & ROLE STATE ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("tenants");
  
  const houses = [
    { id: 201, name: "Luxury-Plaza", price: 100000 },
    { id: 202, name: "White House", price: 20000 },
    { id: 203, name: "Modern-View", price: 15000 },
  ];

  const totalRevenue = houses.reduce((acc, house) => acc + house.price, 0);

  // --- AUTH HANDLERS ---
  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      
      {/* 
        STRICT PROTECTION LOGIC:
        If not logged in, show ONLY the login screen.
        If logged in, show the full Dashboard UI.
      */}
      {!isLoggedIn ? (
        /* --- LOGIN SCREEN (PUBLIC VIEW) --- */
        <div className="min-h-screen flex items-center justify-center p-6">
          <div className="max-w-md w-full text-center py-12 px-8 bg-white rounded-3xl shadow-xl border border-slate-200">
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-white font-bold text-2xl mx-auto mb-6">SH</div>
            <h2 className="text-3xl font-black text-slate-800 mb-2">Spot<span className="text-amber-600">House</span></h2>
            <p className="text-slate-500 mb-8">Management Portal</p>
            
            <div className="space-y-4">
               <p className="text-sm text-slate-400 italic">Please sign in to access the dashboard</p>
               <button 
                onClick={handleLogin}
                className="w-full bg-slate-800 text-white py-4 rounded-2xl font-bold hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-200 transition-all active:scale-95"
              >
                Sign In to Dashboard
              </button>
            </div>
          </div>
        </div>
      ) : (
        /* --- DASHBOARD (PROTECTED VIEW) --- */
        <div className="p-4 md:p-8 animate-in fade-in duration-500">
          
          <div className="max-w-6xl mx-auto">
            
            {/* Top Navigation Bar */}
            <nav className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex flex-wrap justify-between items-center mb-8 gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold text-xs">SH</div>
                  <h1 className="text-lg font-bold text-slate-800">SpotHouse</h1>
                </div>
                
                {/* Internal Links (Only accessible when logged in) */}
                <div className="hidden md:flex gap-4 text-sm font-bold text-slate-500">
                  <Link to="settings" className="hover:text-amber-600 transition">Settings</Link>
                  <Link to="accounts" className="hover:text-amber-600 transition">Accounts</Link>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <select 
                  onChange={(e) => setRole(e.target.value)} 
                  value={role} 
                  className="bg-slate-50 border border-slate-200 text-slate-600 text-sm p-2 rounded-lg outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                >
                  <option value="tenants">Tenant View</option>
                  <option value="admin">Admin View</option>
                </select>

                <button 
                  onClick={handleLogout}
                  className="px-6 py-2 rounded-lg font-bold text-sm bg-rose-50 text-rose-600 hover:bg-rose-100 transition-all"
                >
                  Logout
                </button>
              </div>
            </nav>

            {/* Main Content Area */}
            <main>
              {/* This is where nested routes (Settings/Accounts) will appear */}
              <Outlet/>

              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800">
                  {role === "admin" ? "Admin Manage Properties" : "Tenants Overview"}
                </h2>
                <p className="text-slate-500">Welcome to SportHouse to explore houses.</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <p className="text-slate-400 text-xs uppercase font-bold mb-1">Total Revenue</p>
                  <h2 className="text-3xl font-black text-emerald-600">Ksh {totalRevenue.toLocaleString()}</h2>
                </div>
                
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <p className="text-slate-400 text-xs uppercase font-bold mb-1">Available Units</p>
                  <h2 className="text-3xl font-black text-slate-800">{houses.length}</h2>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <p className="text-slate-400 text-xs uppercase font-bold mb-1">Active Tenants</p>
                  <h2 className="text-3xl font-black text-indigo-600">3</h2>
                </div>
              </div>

              {/* Property List */}
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
            </main>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;