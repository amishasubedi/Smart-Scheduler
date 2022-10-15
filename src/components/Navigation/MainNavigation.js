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
        <p>Smart Scheduler</p>
      </h1>
      <h3 className="main-navigation__signup">
        <p>Sign In</p>
      </h3>


      {/* <nav>
        <Navlinks />
      </nav> */}
    </MainHeader>
  );
};

export default MainNavigation;
