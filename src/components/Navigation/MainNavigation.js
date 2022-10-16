import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";
import Navlinks from "./Navlinks";
import pic from "../../assets/pic1.png";
import "./MainNavigation.css";

const MainNavigation = (props) => {
  return (
    <Fragment>
      <MainHeader>
        {/* <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button> */}
        <h1 className="main-navigation__title">
          <Link to="/">Smart Scheduler</Link>
        </h1>

        <nav className="main-navigation__header-nav">
          <Navlinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
