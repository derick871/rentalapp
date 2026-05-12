import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar  from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Accounts from './components/Accounts';
import Settings from './components/Settings';
import './App.css'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />}> 
        <Route path="accounts" element={<Accounts />} />
        <Route path="settings" element={<Settings />} />
        </Route> 
      </Routes>
    </Router>
    
    
  )
}

export default App
