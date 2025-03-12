import React from "react";
import "./MenuItem.css";
import { useState } from "react";

function MenuItem({
  icons = [],
  title,
  description = "",
  className = "",
  alarm = false,
  sound,
}) {
  const [status, setStatus] = useState({ description, icon: icons[0] });
  const [play, setPlay] = useState(false);
  const audio = new Audio(sound);
  audio.volume = 0.1;
  audio.onended = () => setPlay(false);
  const toggleDescription = (event) => {
    event.preventDefault();
    const nextDescription =
      alarm && status.description === ""
        ? "Selected"
        : !alarm && status.description === ""
        ? "Connected"
        : "";
    setStatus({
      description: nextDescription,
      icon: status.icon === icons[0] ? icons[1] : icons[0],
    });
    if (!play) audio.play();
    setPlay(true);
  };

  return (
    <div className={`menu-item ${className}`} onClick={toggleDescription}>
      <img src={status.icon} className="menu-item-icon" alt={`${title} icon`} />
      <div className="menu-item-body">
        <div className="menu-item-title">{title}</div>
        {status.description && (
          <div className="menu-item-description">{status.description}</div>
        )}
      </div>
      <audio src={sound} id="audioPlayer"></audio>
    </div>
  );
}

export default MenuItem;
