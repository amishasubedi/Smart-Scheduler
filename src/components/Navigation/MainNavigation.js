import React from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import Navlinks from "./Navlinks";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <p>When to meet</p>
      </h1>

      {/* <nav>
        <Navlinks />
      </nav> */}
    </MainHeader>
  );
};

export default MainNavigation;
