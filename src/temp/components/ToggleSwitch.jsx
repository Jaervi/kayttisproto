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
      <div className="switch-handle" />
    </div>
  );
};

export default ToggleSwitch;
