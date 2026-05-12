import { useState } from 'react';
import { Link } from 'react-router-dom';

function House() {
  
  
  // Moved the array inside the component
  const initialHouses = [
    { id: 1, name: "Luxury Villa", location: "Kisumu", standard: "4 BR + Pool", price: 90000, image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=500" },
    { id: 2, name: "Modern Apartment", location: "Nairobi", standard: "4 BR + Pool", price: 100000, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=500" },
    { id: 3, name: "Modern Apartment", location: "Nairobi", standard: "3 BR", price: 50000, image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=500" },
    { id: 4, name: "Modern Apartment", location: "Nairobi", standard: "3 BR", price: 50000, image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=500" },
    { id: 5, name: "Modern Apartment", location: "Nakuru", standard: "4 BR", price: 120000, image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=500" },
    { id: 6, name: "Spring Park", location: "Nairobi", standard: "3 BR", price: 150000, image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=500" },
    { id: 7, name: "Kasablanka", location: "Nairobi", standard: "4 BR", price: 130000, image: "https://images.unsplash.com/photo-1513584684031-43d1a4271c3f?q=80&w=500" },
    { id: 8, name: "Baraka 040", location: "Kakamega", standard: "3 BR", price: 90000, image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=500" },
    { id: 9, name: "Elgon Villa", location: "Nairobi", standard: "3 BR", price: 80000, image: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=500" },
  ];
    // --- DATA & STATE MANAGEMENT ---
  const [houses, setHouses] = useState(initialHouses); 
  const [formData, setFormData] = useState({ name: '', location: '', standard: '', price: '' });
  const [isEditing, setIsEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [houseToDelete, setHouseToDelete] = useState(null);


  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.location || !formData.standard) {
      alert("Please fill in all fields");
      return;
    }

    if (isEditing) {
      setHouses(houses.map(h => h.id === isEditing ? { ...h, ...formData } : h));
      setIsEditing(null);
    } else {
      setHouses([...houses, { 
        id: Date.now(), 
        ...formData, 
        image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=500" 
      }]);
    }
    setFormData({ name: '', location: '', standard: '', price: '' });
  };

  const startEdit = (house) => {
    setIsEditing(house.id);
    setFormData({ 
      name: house.name, 
      location: house.location, 
      standard: house.standard, 
      price: house.price 
    });
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  };

  const openDeleteModal = (id) => {
    setHouseToDelete(id);
    setShowModal(true);
  };

  const deleteHouse = () => {
    setHouses(houses.filter(h => h.id !== houseToDelete));
    setShowModal(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-black text-slate-900 tracking-tight">Spot<span className="text-amber-600">House</span></h1>
          <p className="text-slate-500 mt-4 text-lg">Your gateway to premium living spaces.</p>
        </header>

        {/* FORM SECTION */}
        <form onSubmit={handleSave} className="bg-white p-6 rounded-2xl shadow-xl mb-16 grid grid-cols-1 md:grid-cols-5 gap-4 items-end border border-slate-100">
          <div className="md:col-span-1 flex flex-col">
            <label className="text-xs font-bold uppercase text-slate-400 mb-2">Property Name</label>
            <input className="bg-slate-50 ring-1 ring-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
              placeholder="e.g. Skyline Heights" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase text-slate-400 mb-2">Location</label>
            <input className="bg-slate-50 ring-1 ring-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              value={formData.location} 
              onChange={(e) => setFormData({...formData, location: e.target.value})} 
              placeholder="City/Town" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase text-slate-400 mb-2">Standard</label>
            <input className="bg-slate-50 ring-1 ring-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              value={formData.standard} 
              onChange={(e) => setFormData({...formData, standard: e.target.value})} 
              placeholder="e.g. 3 BR" 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-bold uppercase text-slate-400 mb-2">Price (Ksh)</label>
            <input className="bg-slate-50 ring-1 ring-slate-200 p-2.5 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
              type="number" 
              value={formData.price} 
              onChange={(e) => setFormData({...formData, price: e.target.value})} 
              placeholder="Amount" 
            />
          </div>
          <button type="submit" className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-all active:scale-95 ${isEditing ? 'bg-amber-500 hover:bg-amber-600' : 'bg-slate-600 hover:bg-slate-700'}`}>
            {isEditing ? "Update Listing" : "Create Listing"}
          </button>
        </form>

        {/* DYNAMIC GRID RENDERING */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {houses.map((house) => (
            <div key={house.id} className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={house.image} alt={house.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-black text-blue-600 shadow-sm uppercase">
                  Featured
                </div>
              </div>
              <div className="p-6 flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-slate-800">{house.name}</h3>
                  <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-md text-xs">{house.location}</span>
                </div>
                <div className="flex items-center text-slate-400 text-sm gap-4 mt-4">
                  <span> {house.standard}</span>
                  <span> Near Center</span>
                </div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-2xl font-black text-slate-900">Ksh {Number(house.price).toLocaleString()}</span>
                  <span className="text-slate-400 text-sm font-medium">/month</span>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 flex gap-3">
                <button onClick={() => startEdit(house)} className="flex-1 py-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-amber-100 hover:text-amber-600 transition-all">Edit</button>
                <button onClick={() => openDeleteModal(house.id)} className="flex-1 py-2.5 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-red-100 hover:text-red-600 transition-all">Delete</button>
              </div>
            </div>
          ))}

        </div>
        <button>
          <Link to="/about" className="mt-12 inline-block bg-slate-700 hover:bg-amber-500 text-white px-10 py-4 rounded-md font-bold transition-all active:scale-95 shadow-lg">
            Learn More
          </Link>
        </button>

        {/* DELETE MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white p-8 rounded-3xl max-w-sm w-full text-center shadow-2xl border border-slate-100 animate-in fade-in zoom-in duration-200">
              <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"></div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Remove Listing?</h3>
              <p className="text-slate-500 mb-8">This will permanently remove the property from your dashboard.</p>
              <div className="flex gap-4">
                <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-3 bg-slate-100 text-slate-600 rounded-xl font-bold hover:bg-slate-200 transition-all">Cancel</button>
                <button onClick={deleteHouse} className="flex-1 px-4 py-3 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 shadow-lg shadow-red-200 transition-all">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default House;