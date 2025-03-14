import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const AlarmItem = ({ timeRange }) => {
  const [isActive, setIsActive] = useState(false);
  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <div
      className="alarm-item"
      style={{
        backgroundColor: isActive ? "" : "#232323",
        borderColor: isActive ? "#abffae" : "gray",
        borderStyle: "solid",
      }}
    >
      <div className="alarm-time" style={{ color: isActive ? "white" : "" }}>
        {timeRange}
      </div>
      <ToggleSwitch isActive={isActive} handleToggle={handleToggle} />
    </div>
  );
};

export default AlarmItem;
