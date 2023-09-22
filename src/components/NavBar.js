import React from "react";
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav">
      <div className="logo">Wonde</div>
      <nav>
        <ul>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/posts'>Blogs</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/admin'>Admin</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signup'>Register</NavLink>
        </ul>
      </nav>
    </div>
  );
}
