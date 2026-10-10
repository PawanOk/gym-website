import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false)
    return(
        <nav className="relative bg-black">
            <div className="flex items-center justify-between px-10 py-5 lg:px-8">
                <h1 className="text-2xl font-bold text-white">FITNESS HUB</h1>
                <div className="lg:flex hidden gap-5 ">
                    <Link to='/' className="text-white hover:text-green-400">Home</Link>
                    <Link to='/about' className="text-white hover:text-green-400">About</Link>
                    <Link to='/programs' className="text-white hover:text-green-400">Programs</Link>
                    <Link to='/Trainerspage' className="text-white hover:text-green-400">Trainers</Link>
                    <Link to='/pricing' className="text-white hover:text-green-400">Pricing</Link>
                    <Link to='/contact' className="text-white hover:text-green-400">Contact</Link>
                </div>
                {/* Mobile Menu */}
                { menuOpen && (
                   <div className="absolute left-0 top-full z-50 flex w-full flex-col gap-4 bg-black p-6 lg:hidden">
                      <Link onClick={() => setMenuOpen(false)} to='/' className="text-white hover:text-green-400">Home</Link>
                      <Link onClick={() => setMenuOpen(false)} to='/about' className="text-white hover:text-green-400">About</Link>
                      <Link onClick={() => setMenuOpen(false)} to='/programs' className="text-white hover:text-green-400">Programs</Link>
                      <Link onClick={() => setMenuOpen(false)} to='/Trainerspage' className="text-white hover:text-green-400">Trainers</Link>
                      <Link onClick={() => setMenuOpen(false)} to='/pricing' className="text-white hover:text-green-400">Pricing</Link>
                      <Link onClick={() => setMenuOpen(false)} to='/contact' className="text-white hover:text-green-400">Contact</Link>
                   </div>
                )}
                  
                <Link
                 to='/contact'
                className=" hidden cursor-pointer rounded-md bg-green-500 px-6 py-3 font-semibold text-black lg:block">Join Now</Link>
                <button 
                 onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer text-2xl text-white lg:hidden">
                   ☰
                </button>
            </div>
          
        </nav>
    );
}

export default Navbar;