import React from "react";
import Link from "./Link";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <div className="navigation-menu-left-items">
        <Link />
        <Link />
        <Link />
      </div>
      <div className="navigation-menu-right-items">
        <Link />
      </div>
    </div>
  );
};

export default NavigationMenu;
