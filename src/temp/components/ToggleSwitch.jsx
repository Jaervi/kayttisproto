import React, { useState } from "react";

const ToggleSwitch = ({ isActive: initialState = false }) => {
  const [isActive, setIsActive] = useState(initialState);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`toggle-switch ${isActive ? "active" : "inactive"}`}
      onClick={handleToggle}
    >
      <div className={`switch-handle ${isActive ? "active" : "inactive"}`} />
    </div>
  );
};

export default ToggleSwitch;
