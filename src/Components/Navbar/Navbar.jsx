import React from 'react';
import second from '../../images/second.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='nav'>
            <div className="logo">
            <img src={second} alt="smksm" className="logo" />
            </div>
        <div className="nav-items">
            <ul>
            <Link to='/' className='link'><li className="nav-item">Home</li></Link>
           <li className="nav-item">Services</li>
           <Link to='/blog' className='link'>  <li className="nav-item"> Blogs </li> </Link>
           <li className="nav-item">Contact</li>
           <Link to='/about' className='link'><li className="nav-item">About</li></Link>
           </ul>
        </div>
    </div>
  )
}

export default Navbar