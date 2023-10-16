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
            <Link to='/'><li className="nav-item">Home</li></Link>
           <li className="nav-item">Services</li>
           <Link to='/blog'>  <li className="nav-item"> Blogs  </li> </Link>
           <li className="nav-item">Contact</li>
           <li className="nav-item">About</li>
           </ul>
        </div>
    </div>
  )
}

export default Navbar