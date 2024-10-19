import React, { useState } from 'react';
import logo from './logo.svg';
import './navbar.scss';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <header>
        <div className="navbar container">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <div className={`items ${isActive ? 'active' : ''}`}>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/about">ABOUT</NavLink>
            <NavLink to="/menu">MENU</NavLink>
            <NavLink to="/products">PRODUCTS</NavLink>
            <NavLink to="/news">NEWS</NavLink>
            <NavLink to="/locations">LOCATIONS</NavLink>
          </div>

          <div className="menu-icon" onClick={toggleMenu}>
            <span className={`open-icon ${isActive ? 'active' : ''}`}>☰</span>
            <span className={`close-icon ${isActive ? 'active' : ''}`}>✖</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
