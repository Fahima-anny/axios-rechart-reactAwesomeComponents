import { useState } from "react";
import Link from "../Link/Link";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";


const Navbar = () => {

const routes = [
    { "id": 1, "path": "/home", "name": "Home" },
    { "id": 2, "path": "/about", "name": "About" },
    { "id": 3, "path": "/services", "name": "Services" },
    { "id": 4, "path": "/contact", "name": "Contact" },
    { "id": 5, "path": "/blog", "name": "Blog" }
  ]

  const [open,setOpen] = useState(false) ;
  

    return (
        <div>
          
<nav className="bg-pink-100 p-5">
<button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                <h1>{
                    open?
                     <IoCloseSharp></IoCloseSharp>
                    : <GiHamburgerMenu ></GiHamburgerMenu>
                }</h1>
            
            </button>
    <ul className={`md:flex ${ open ? 'top-12' : '-top-72' } duration-500 gap-10 absolute md:static bg-pink-100 shadow-gray-600 shadow-md md:shadow-none font-semibold`}>
    {
    routes.map( route => <Link
    route={route}
    key={route.id}
    ></Link> )
}
    </ul>
</nav>
        </div>
    );
};

export default Navbar;