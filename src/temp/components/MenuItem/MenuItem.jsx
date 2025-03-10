import React from "react";
import "./MenuItem.css";

function MenuItem({ icon, title, description, className = "" }) {
  return (
    <div className={`menu-item ${className}`}>
      <img src={icon} className="menu-item-icon" alt={`${title} icon`} />
      <div className="menu-item-body">
        <div className="menu-item-title">{title}</div>
        {description && (
          <div className="menu-item-description">{description}</div>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
