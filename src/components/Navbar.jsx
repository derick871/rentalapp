import { Link } from "react-router-dom"
function Navbar({isLoggedIn}){
    return(
        <>
        <nav className =" bg-slate-500 font-bold p-4 text-white justify-evenly">
            <ul className="flex gap-10 hover:amber-500">

                
                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>

                <li>
                  <Link to="/about">About</Link>
                </li>
                
                
                <li>
                  <Link to="/register">Register</Link>
                </li>
                <button className="bg-slate-700 rounded p-2">{isLoggedIn ? "LogOut" : "LogIn"}</button>
            </ul>
            
            
        </nav>
       </>

    )
}
export default Navbar
