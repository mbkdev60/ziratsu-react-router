import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "activeLink" : ""}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) => isActive ? "activeLink" : ""}
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? "activeLink" : ""}
        >
          Contact
        </NavLink>
      </nav>
    </div>
  );
}
