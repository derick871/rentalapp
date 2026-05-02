import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import './App.css'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />  
      </Routes>
    </Router>
    
    
  )
}

export default App
