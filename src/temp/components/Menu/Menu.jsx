import React from "react";
import "./Menu.css";

function Menu({ title, children }) {
  return (
    <div className="menu">
      <div className="menu-header">{title}</div>
      <div className="menu-separator">
        <div className="menu-rule" />
      </div>
      <div className="menu-section">{children}</div>
    </div>
  );
}

export default Menu;
