import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">Logo</Link>
        <ul className="right hide-on-med-and-down">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/monster">Monsters</Link></li>
          <li><Link to="/about">About Us</Link></li>
        </ul>
      </div>
    </nav>
  )

}