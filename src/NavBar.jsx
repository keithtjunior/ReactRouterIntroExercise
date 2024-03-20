import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = ({ links }) => {
  return (
    <nav className="nav">
      {links.map(link => (
        <NavLink 
          key={link.id}
          to={`/${link.url}`} 
          className={({ isActive, isPending }) =>
            isActive
              ? "active"
              : isPending
              ? "pending"
              : ""
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;