import React from "react";
import ToggleSwitch from "./ToggleSwitch";

const AlarmItem = ({ timeRange, isActive }) => {
  return (
    <div className="alarm-item">
      <div className="alarm-time">{timeRange}</div>
      <ToggleSwitch isActive={isActive} />
    </div>
  );
};

export default AlarmItem;
