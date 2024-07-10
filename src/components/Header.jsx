import React, { useState, useEffect } from 'react';
import logo from '../images/watch1.png';
import { Link } from 'react-scroll';
import './Header.css';

function Header() {
  const [nav, setNav] = useState(false);


  return (
    <nav className={nav ? "nav active" : "nav"}>
      <div className="card">
        <Link to='main' className='logo' smooth={true} duration={2000}>
          <img src={logo} alt='Logo' className='card-image' />
        </Link>
        <p className='details'>Grab up to 20% discount on selected Wrist Watch</p>
        <button className='card-button'>Shop Now</button>
      </div>
    </nav>
  );
}

export default Header;
