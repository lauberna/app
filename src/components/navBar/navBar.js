import React,{ useState } from 'react'
import { Link } from 'react-router-dom'
import {CgMusicSpeaker} from 'react-icons/cg'

import Cart from '../cart/Cart.js'

import '../navBar/Navbar.css'

function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div className="Navbar">
        <Link to='/'>
          <CgMusicSpeaker className="nav-logo" />
        </Link>
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/categoria/auriculares"><>Auriculares</></Link>
            <Link to="/categoria/consolas"><>Consolas</></Link>
            <Link to="/categoria/parlantes"><>Parlantes</></Link>
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