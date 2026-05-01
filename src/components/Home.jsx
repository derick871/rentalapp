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

function About() {
  const [books, setBooks] = useState(initialBooks);
  const [formData, setFormData] = useState({ title: '', price: '' });
  const [isEditing, setIsEditing] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);


function home() {

  return (
    <div>
        <h1>Welcome to SpotHouse</h1>
        <p>Discover the best spots in town with SpotHouse! 
            Whether you're looking for a cozy café, a trendy restaurant, 
            or a hidden gem, SpotHouse has got you covered. Our platform allows you to explore
             and share your favorite spots with friends and fellow spot enthusiasts. Join our
              community today and start discovering the best places around you!
        </p>
    </div>
  )
}

export default home