import React from 'react'

const Houses=[
  { "id": 1, "name": "Luxury Villa", "location": "Kisumu", "standard": "4 BR + Pool", "price": 90000, "image": "images/modern-custom-suburban-home-exterior.jpg" },
  { "id": 2, "name": "Modern Apartment", "location": "Nairobi", "standard": "4 BR + Pool", "price": 100000, "image": "images/Oandremoura.jpg" },
  { "id": 3, "name": "Modern Apartment", "location": "Nairobi", "standard": "3 BR", "price": 50000, "image": "images/building4.jpeg" },
  { "id": 4, "name": "Modern Apartment", "location": "Nairobi", "standard": "3 BR", "price": 50000, "image": "images/pexels-seydanur-yildiz-333883408-14855607.jpg" },
  { "id": 5, "name": "Modern Apartment", "location": "Nakuru", "standard": "4 BR", "price": 120000, "image": "images/pexels-peri-2149976252-37187723.jpg" },
  { "id": 6, "name": "Spring Park", "location": "Nairobi", "standard": "3 BR", "price": 150000, "image": "images/pexels-oandremoura-9864028.jpg" },
  { "id": 7, "name": "Kasablanka", "location": "Nairobi", "standard": "4 BR", "price": 130000, "image": "images/pexels-najafozturk-31599748.jpg" },
  { "id": 8, "name": "Baraka 040", "location": "Kakamega", "standard": "3 BR", "price": 90000, "image": "images/pexels-mibernaa-28957807.jpg" },
  { "id": 9, "name": "Elgon Villa", "location": "Nairobi", "standard": "3 BR", "price": 80000, "image": "images/pexels-julian-largo-622163228-32163467.jpg" },
];

function House() {
  const [Houses, setHouses] = useState(initialhouses);
  const [formData, setFormData] = useState({ id: '',name: '',location: ''standard: '' price: '' });
  const [isEditing, setIsEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

    const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price, !formData.location || !formData.standard) return;

    if (isEditing) {
      sethouses(houses.map(b => b.id === isEditing ? { ...b, ...formData } : b));
      setIsEditing(null);
    } else {
      sethouses([...houses, { id: Date.now(), ...formData }]);
    }
    setFormData({ name: '', price: '' });
  };

   const startEdit = (house) => {
    setIsEditing(house.id);
    setFormData({ name: house.name, price: house.price });
  };

  const openDeleteModal = (id) => {
    setHouseToDelete(id);
    setShowModal(true);
  };

 const deleteHouse = () => {
    setHouses(house.filter(house => house.id !== houseToDelete));
    setShowModal(false);
  };
  return (
    <div>
        <h1>Welcome to SpotHouse</h1>
        <p>Discover the best spots in town with SpotHouse! 
            Whether you're looking for a cozy café, a trendy restaurant, 
            or a hidden gem, SpotHouse has got you covered. Our platform allows you to explore
             and share your favorite spots with friends and fellow spot enthusiasts. Join our
              community today and start discovering the best places around you!
        </p>
        <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Library</h2>

        {/* --- Input Form --- */}
        <form onSubmit={handleSave} className="bg-white p-6 rounded-lg shadow-md mb-10 flex flex-wrap gap-4 items-end justify-center">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">House Name</label>
            <input 
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="e.g. The Hobbit"
              value={formData.name} 
              onChange={(e) => setFormData({...formData, name: e.target.value})} 
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">Price (ksh)</label>
            <input 
              className="border border-gray-300 p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
              type="number"
              placeholder="0.00"
              value={formData.price} 
              onChange={(e) => setFormData({...formData, price: e.target.value})} 
            />
          </div>
          <button type="submit" className={`px-6 py-2 rounded font-bold text-white transition-colors ${isEditing ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-600 hover:bg-green-700'}`}>
            {isEditing ? "Update" : "Add House"}
          </button>
        </form>

        {/* --- Card Grid --- */}
        <div className="grid bg-slate-500 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {houses.map(house => (
            <div key={house.id} className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-shadow border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800">{house.name}</h3>
              <p className="text-gray-500 mt-2 font-medium text-lg">ksh{house.price}</p>
              <div className="mt-4 flex gap-3 border-t pt-4">
                <button onClick={() => startEdit(house)} className="text-orange-500 hover:text-orange-700 font-semibold flex-1">Edit</button>
                <button onClick={() => openDeleteModal(house.id)} className="text-red-500 hover:text-red-700 font-semibold flex-1">Delete</button>
              </div>
            </div>
          ))}
        </div>
              {/* --- Confirmation Modal --- */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-8 rounded-2xl max-w-sm w-full text-center shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Are you sure?</h3>
            <p className="text-gray-600 mb-6">Deleting this book will remove it forever.</p>
            <div className="flex gap-4">
              <button onClick={() => setShowModal(false)} className="flex-1 px-4 py-2 bg-gray-200 rounded-lg font-bold hover:bg-gray-300">Cancel</button>
              <button onClick={deleteBook} className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700">Delete</button>
            </div>
          </div>
        </div>
      )}
     </div>
     
        
      </div>

  )
}

export default home