import React, { Fragment } from "react";
import StartingContent from "../components/Navigation/StartingContent";
import Login from "../components/Login/Login";

const Homepage = () => {
  return (
    <Fragment>
      <StartingContent />;
      <Login />
    </Fragment>
  );
};

export default Homepage;
