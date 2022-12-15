import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    // <div className='nav-container'>
      <nav className='nav-container'>
        <h1 className='navLogo'>Ankit Sharma</h1>
        <ul className='navcontent'>
          <Link to='/'><li className='navItem'>Home</li></Link>
          <Link to='/About'><li className='navItem'>About</li></Link>
          <Link to='/Services'><li className='navItem'>Services</li></Link>
          <Link to='/Portfolio'><li className='navItem'>Portfolio</li></Link>
          <Link to='/Contact'><li className='navItem'>Contact</li></Link>
        </ul>
      </nav>
    // </div>
  )
}

export default Navbar