import React, { useState } from 'react';

const initialHouses = [
  { id: 1, name: "Luxury Villa", location: "Kisumu", standard: "4 BR + Pool", price: 90000, image: "images/modern-custom-suburban-home-exterior.jpg" },
  { id: 2, name: "Modern Apartment", location: "Nairobi", standard: "4 BR + Pool", price: 100000, image: "images/Oandremoura.jpg" },
  { id: 3, name: "Modern Apartment", location: "Nairobi", standard: "3 BR", price: 50000, image: "images/building4.jpeg" },
  { id: 4, name: "Modern Apartment", location: "Nairobi", standard: "3 BR", price: 50000, image: "images/pexels-seydanur-yildiz-333883408-14855607.jpg" },
  { id: 5, name: "Modern Apartment", location: "Nakuru", standard: "4 BR", price: 120000, image: "images/pexels-peri-2149976252-37187723.jpg" },
  { id: 6, name: "Spring Park", location: "Nairobi", standard: "3 BR", price: 150000, image: "images/pexels-oandremoura-9864028.jpg" },
  { id: 7, name: "Kasablanka", location: "Nairobi", standard: "4 BR", price: 130000, image: "images/pexels-najafozturk-31599748.jpg" },
  { id: 8, name: "Baraka 040", location: "Kakamega", standard: "3 BR", price: 90000, image: "images/pexels-mibernaa-28957807.jpg" },
  { id: 9, name: "Elgon Villa", location: "Nairobi", standard: "3 BR", price: 80000, image: "images/pexels-julian-largo-622163228-32163467.jpg" },
];

function House() {
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
      setHouses([...houses, { id: Date.now(), ...formData, image: "images/placeholder.jpg" }]);
    }
    setFormData({ name: '', location: '', standard: '', price: '',image: '' });
  };

  const startEdit = (house) => {
    setIsEditing(house.id);
    setFormData({ 
      name: house.name, 
      location: house.location, 
      standard: house.standard, 
      price: house.price 
    });
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
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-900">Welcome to SpotHouse</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Discover the best spots in town! Whether you're looking for a cozy villa or a trendy apartment, 
            SpotHouse has got you covered.
          </p>
        </header>

        {/* --- Input Form --- */}
        <form onSubmit={handleSave} className="bg-white p-6 rounded-xl shadow-lg mb-12 grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-700 mb-1">House Name</label>
            <input 
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-700 mb-1">Location</label>
            <input 
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              value={formData.location} 
              onChange={(e) => setFormData({...formData, location: e.target.value})} 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-700 mb-1">Standard</label>
            <input 
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. 3 BR"
              value={formData.standard} 
              onChange={(e) => setFormData({...formData, standard: e.target.value})} 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-bold text-gray-700 mb-1">Price (Ksh)</label>
            <input 
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              type="number"
              value={formData.price} 
              onChange={(e) => setFormData({...formData, price: e.target.value})} 
            />
          </div>
          <button type="submit" className={`w-full py-2 rounded-lg font-bold text-white transition-all ${isEditing ? 'bg-orange-500 hover:bg-orange-600' : 'bg-blue-600 hover:bg-blue-700'}`}>
            {isEditing ? "Update House" : "Add House"}
          </button>
        </form>

        {/* --- Card Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {houses.map(house => (
            <div key={house.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all border border-gray-100 flex flex-col">
              <div className="h-48 bg-gray-200">
                <img src={house.image} alt={house.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-5 flex-grow">
                <h3 className="text-xl font-bold text-gray-800">{house.name}</h3>
                <p className="text-blue-600 font-semibold">{house.location}</p>
                <p className="text-gray-500 text-sm mt-1">{house.standard}</p>
                <p className="text-2xl font-black text-gray-900 mt-4">Ksh {Number(house.price).toLocaleString()}</p>
              </div>
              <div className="p-5 flex gap-4 bg-gray-50 border-t">
                <button onClick={() => startEdit(house)} className="flex-1 py-2 bg-orange-100 text-orange-600 rounded-lg font-bold hover:bg-orange-200 transition-colors">Edit</button>
                <button onClick={() => openDeleteModal(house.id)} className="flex-1 py-2 bg-red-100 text-red-600 rounded-lg font-bold hover:bg-red-200 transition-colors">Delete</button>
              </div>
            </div>
          ))}
        </div>

        {/* --- Confirmation Modal --- */}
        {showModal && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl animate-in fade-in zoom-in duration-200">
              <div className="w-16 h-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">!</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Delete House?</h3>
              <p className="text-gray-600 mb-6">This action cannot be undone. This property will be permanently removed.</p>
              <div className="flex gap-4">
                <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-bold hover:bg-gray-200">Cancel</button>
                <button onClick={deleteHouse} className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700">Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default House;