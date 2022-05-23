import React,{ useState } from 'react'
import '../navBar/Navbar.css'
import {GiMountains} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import Cart from '../cart/Cart.js'




function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    <div className="Navbar">
        <GiMountains className="nav-logo" />
        <div className={`nav-items ${isOpen && "open"}`}>
          <Link to="/"><a>Home</a></Link>
          <Link to="/categoria/bicicletas"><a>Bicicletas</a></Link>
          <Link to="/categoria/indumentaria"><a>Indumentaria</a></Link>
        
            
        </div>
        <div>
          <Cart/>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="bar"></div>
        </div>
    </div>
    
    </>
  )
}

export default NavBar