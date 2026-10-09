import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="bg-black">
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
                <Link
                 to='/contact'
                className=" hidden cursor-pointer rounded-md bg-green-500 px-6 py-3 font-semibold text-black lg:block">Join Now</Link>
                <button className="cursor-pointer text-2xl text-white lg:hidden">
                   ☰
                </button>
            </div>
          
        </nav>
    );
}

export default Navbar;