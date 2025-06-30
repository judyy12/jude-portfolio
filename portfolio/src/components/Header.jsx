import logo from "../assets/logo.png";
import { Home } from "../pages/Home";
import React from "react";
import { Link, NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <div className="bar border-b-3 top-0 left-0">
      <ul>
        <li className="gap-15">
          <NavLink to='/'
            className={({ isActive }) =>
              isActive
                ? 'font-bold' 
                : 'hover:font-bold'
            }end >
              <a>Home</a>
          </NavLink>
          <NavLink to='/projects'
            className={({ isActive }) =>
              isActive
                ? 'font-bold' 
                : 'hover:font-bold'
            }end >
              <a>Projects</a>
          </NavLink>
          <a> <img className="h-10 border-2 rounded-full" src={logo}/> </a>
          <NavLink to='/about'
            className={({ isActive }) =>
              isActive
                ? 'font-bold' 
                : 'hover:font-bold'
            }end >
              <a>About</a>
          </NavLink>
          <NavLink to='/contacts'
            className={({ isActive }) =>
              isActive
                ? 'font-bold' 
                : 'hover:font-bold'
            }end >
              <a>Contacts</a>
          </NavLink>
        </li>
      </ul>
    </div>
    )
}