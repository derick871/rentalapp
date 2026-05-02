import { Link } from "react-router-dom"
function Navbar(){
    return(
        <>
        <nav className =" bg-slate-500 font-bold p-4 text-center text-white justify-evenly">
            <ul className="flex gap-10 hover:amber-500">
              <div className="w-10 h-10 bg-slate-600 rounded-xl flex items-center justify-center text-white font-bold">SH</div>

                
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
            </ul>
            
            
        </nav>
       </>

    )
}
export default Navbar
