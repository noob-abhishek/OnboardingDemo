import React, { useState } from 'react';
import second from '../../images/second.png';
import './Navbar.css';
import { Link } from 'react-router-dom';
import {RiMenu3Line, RiCloseLine } from 'react-icons/ri';
const Navbar = () => {

  const [Toggle,setToggle] = useState(false);
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
        <div className='toggle-btn'>
        {Toggle
?<RiCloseLine color='#000' size={27} onClick ={() => setToggle(false)}  /> //meri  value true hai, toggling to false.
: <RiMenu3Line color='#000' size={27} onClick ={() => setToggle(true)} /> // meri value false hai, toggling to true.
}
{Toggle && (
    <div className='toggle-box  scale-up-center '> 
   
            <Link to='/' className='link'><li className="nav-item">Home</li></Link>
           <li className="nav-item">Services</li>
           <Link to='/blog' className='link'>  <li className="nav-item"> Blogs </li> </Link>
           <li className="nav-item">Contact</li>
           <Link to='/about' className='link'><li className="nav-item">About</li></Link>
          
    </div>
  )}
 </div>
  

    </div>
  )
}

export default Navbar