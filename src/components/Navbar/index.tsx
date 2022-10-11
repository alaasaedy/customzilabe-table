import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => {
  return (
    <nav id='navbar'>
      <div className='nav-wrapper'>
        <ul id='menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/route2'>Page 2</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
