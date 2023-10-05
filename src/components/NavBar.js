import React, { useState } from "react";
import { NavLink ,useNavigate} from 'react-router-dom';
import useAuth from "../hooks/useAuth";

export default function NavBar() {
  const [toggle, setToggle] = useState(false)

  const navigate = useNavigate()
  const { setAuth } = useAuth() 
  
  const handleToggle = () => {
    setToggle(prevToggle => !prevToggle)
    toggle ? navigate('/login') : setAuth({})
  }
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
          <button onClick={handleToggle}>{toggle ? "LogIn" : "LogOut"}</button>
          <NavLink to='/signup'>Register</NavLink>
        </ul>
      </nav>
    </div>
  );
}
