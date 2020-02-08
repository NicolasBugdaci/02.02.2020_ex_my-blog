import React from "react";
import Title from "./Title";
import Baseline from "./Baseline";

const Header = () => {
  return (
    <>
      <div className="header">
        <Title name="My Blog" />
        <Baseline text="An awesome baseline" />
      </div>
    </>
  );
};

export default Header;
