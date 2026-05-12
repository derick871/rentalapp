import { useState } from 'react';

function Register() {
  // Initialize state as an object to manage multiple related fields in one place
  const [formData, setFormData] = useState({
    name: "Derick Demarco",
    email: "derrick@gmail.com",
    password: "",
    age: 23
  });

  // Dynamic handler: uses the input's 'name' attribute to update the matching state key
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Spread operator (...prev) ensures we don't lose the other fields when updating one
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Functional update: uses the previous state to safely increment/decrement age
  const updateAge = (amount) => {
    setFormData(prev => ({ ...prev, age: prev.age + amount }));
  };

  // Specific field reset: uses bracket notation to target a dynamic key
  const resetField = (field) => {
    setFormData(prev => ({ ...prev, [field]: "" }));
  };

  return (
    <div className="min-h-screen bg-slate-200 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-300">
        
        {/* Profile Preview Header - UI reflects state in real-time */}
        <header className="bg-slate-800 p-6 text-white text-center">
          <h1 className="text-2xl font-bold">{formData.name || "New User"}</h1>
          <p className="text-slate-400 text-sm">{formData.email || "No email provided"}</p>
          <div className="mt-4 flex justify-center items-center gap-6">
            <div className="text-center">
              <span className="block text-xs uppercase tracking-widest text-slate-400">Age</span>
              <span className="text-xl font-semibold">{formData.age}</span>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-6">
          {/* Age Controls */}
          <section className="flex justify-between items-center bg-slate-50 p-4 rounded-lg border border-slate-100">
            <span className="font-medium text-slate-600">Adjust Age</span>
            <div className="flex gap-2">
              <button onClick={() => updateAge(-1)} className="px-4 py-1 bg-white border border-slate-300 rounded-md hover:bg-slate-100 transition-colors shadow-sm">-</button>
              <button onClick={() => updateAge(1)} className="px-4 py-1 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors shadow-sm">+</button>
            </div>
          </section>

          {/* Form Inputs - "Controlled Components" because their value is driven by React state */}
          <section className="space-y-4">
            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Full Name</label>
              <input 
                name="name" // Must match the key in formData
                type="text" 
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-800 outline-none transition-all"
                placeholder="Enter name"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Email Address</label>
              <input 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-800 outline-none transition-all"
                placeholder="example@mail.com"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs font-bold text-slate-500 uppercase ml-1">Password</label>
              <input 
                name="password"
                type="password" 
                value={formData.password}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-slate-800 outline-none transition-all"
                placeholder="......"
              />
            </div>
          </section>

          {/* Reset Actions */}
          <section className="grid grid-cols-3 gap-2 pt-4">
            <button onClick={() => resetField('name')} className="text-[10px] uppercase font-bold py-2 bg-slate-700 text-white rounded hover:bg-red-50 hover:text-red-600 transition-all">Clear Name</button>
            <button onClick={() => resetField('email')} className="text-[10px] uppercase font-bold py-2 bg-slate-700 text-white rounded hover:bg-red-50 hover:text-red-600 transition-all">Clear Email</button>
            <button onClick={() => resetField('password')} className="text-[10px] uppercase font-bold py-2 bg-slate-700 text-white rounded hover:bg-red-50 hover:text-red-600 transition-all">Clear Pass</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Register;