import React from "react";

import { NavLink } from "react-router-dom";
import "./Navlinks.css";

const Navlinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to="AddMeeting">xxx</NavLink>
      </li>

      <li>
        <NavLink to="/Sign in">Sign in</NavLink>
      </li>
    </ul>
  );
};

export default Navlinks;
