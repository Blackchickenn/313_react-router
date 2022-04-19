import React from 'react'
import { NavLink } from 'react-router-dom';



export default function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontSize: isActive ? '1.2rem' : 'none',
      textDecoration: isActive ? 'none' : 'underline',
      backGroundColor: isActive ? 'bisque' : 'none'
    }
  }

  return (
    <nav>
      <NavLink style={navLinkStyle} to='/'>Home</NavLink>
      <NavLink style={navLinkStyle} to='/about'>About</NavLink>
      <NavLink style={navLinkStyle} to='/products'>Products</NavLink>
      <NavLink style={navLinkStyle} to='/users'>Users</NavLink>
      <NavLink style={navLinkStyle} to='/profile'>Profile</NavLink>
    </nav>
  );
}



