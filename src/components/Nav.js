import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <ul className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="services">Services</NavLink>
      <NavLink to="cart">Cart</NavLink>
    </ul>
  );
}

export default Nav;
