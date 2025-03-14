const ToggleSwitch = ({ isActive, handleToggle }) => {
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
