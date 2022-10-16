import React, { Fragment } from "react";
import MainNavigation from "./MainNavigation";
import Navlinks from "./Navlinks";
import pic from "../../assets/pic1.png";

const StartingContent = () => {
  <Fragment>
    <img src={pic} alt="pic" className="img" />
    <MainNavigation />
    <nav>
      <Navlinks />
    </nav>
  </Fragment>;
};

export default StartingContent;
