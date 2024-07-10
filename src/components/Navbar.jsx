import React, { useState, useEffect } from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [nav, setNav] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to='main' className='logo' smooth={true} duration={2000}>
        <img src={logo} alt='Logo' />
      </Link>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' htmlFor='menu-btn'>
        <span className='nav-icon'></span>
      </label>
      <ul className='menu'>
        <li><Link to='header' smooth={true} duration={1000}> Products</Link></li>
        <li><Link to='features' smooth={true} duration={1000}>Contact us</Link></li>
        <li><Link to='offer' smooth={true} duration={1000}>About us</Link></li>
      </ul>
      <div className='nav-buttons'>
        <button className='signup-btn'>Account</button>
        <button className='cart-btn'>Cart</button>
      </div>

    </nav>


  );
}

export default Navbar;
