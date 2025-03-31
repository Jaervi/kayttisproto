import React, { useEffect, useRef, useState } from "react";
import "./MenuItem.css";

function MenuItem({
  title,
  className = "",
  alarm = false,
  sound,
  status,
  setStatus,
  isFile = false,
}) {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isFile) {
      audioRef.current = new Audio(URL.createObjectURL(sound));
    } else {
      audioRef.current = new Audio(sound);
    }
    audioRef.current.volume = 0.1;
    audioRef.current.onended = () => setPlay(false);

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    };
  }, [sound]);

  const isActive = status.title === title;
  const localIcon = isActive ? status.icon : status.alticon;
  const localdesc = isActive ? status.description : "";

  const changeDesc = (event) => {
    event.preventDefault();
    if (!play && !isActive) {
      audioRef.current.play();
      setPlay(true);
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setPlay(false);
    }
    setStatus(title);
  };

  return (
    <div className={`menu-item ${className}`} onClick={changeDesc}>
      <img src={localIcon} className="menu-item-icon" alt={`${title} icon`} />
      <div className="menu-item-body">
        <div className="menu-item-title">{title}</div>
        {localdesc && (
          <div className="menu-item-description">{localdesc}</div>
        )}
      </div>
    </div>
  );
}

export default MenuItem;
