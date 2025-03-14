import React from "react";
import "./SettingsScreen.css";
import Menu from "../Menu/Menu";
import "../Menu/Menu.css";
import MenuItem from "../MenuItem/MenuItem";
import { useNavigate } from "react-router-dom";

export const Alarms = ({ style = "" }) => {
  const alarmOnIcon =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1e8fdfbb7f3a9961ea776b019a0a0816248615dad33fa456efc12bbe109e65ac?placeholderIfAbsent=true";
  const alarmOffIcon =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/2f3cbab9e36a200511b1de09eaaf4f5bb30919b619017ea5230a8e46ab90dab1?placeholderIfAbsent=true";

  return (
    <Menu title="Alarm sound" className={style}>
      <MenuItem
        icons={[alarmOnIcon, alarmOffIcon]}
        title="Alarm 1"
        description="Selected"
        alarm={true}
        sound="/kayttisproto/Alarm 1.mp3"
      />
      <MenuItem
        icons={[alarmOffIcon, alarmOnIcon]}
        title="Alarm 2"
        alarm={true}
      />
      <MenuItem
        icons={[alarmOffIcon, alarmOnIcon]}
        title="Alarm 3"
        alarm={true}
      />
    </Menu>
  );
};

function SettingsScreen() {
  const navigate = useNavigate();
  const connectedIcon =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c67611caf76aa5e55b73cae67dc75bb4017dc19807d8365c993e379f1f6dbc8b?placeholderIfAbsent=true";
  const disconnectedIcon =
    "https://cdn.builder.io/api/v1/image/assets/TEMP/c49d79f4cdfeb9dd74bc4a59f175300ccdbc69d66cfb4b119fee3e3ec43490c8?placeholderIfAbsent=true";
  return (
    <div className="settings-container">
      <div className="settings-background">
        <div className="settings-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2318c707ad652091920d1a0a7367862be3ea22846934b6d65572ebc432fa1cb9?placeholderIfAbsent=true"
            className="settings-icon"
            alt="Settings icon"
            onClick={() => navigate("/")}
          />
          <div className="settings-title">Settings</div>
        </div>

        <button className="setup-button">Set Up Tracking Device</button>

        <Menu title="Your devices">
          <MenuItem
            icons={[disconnectedIcon, connectedIcon]}
            title="Oura Ring 4"
          />
          <MenuItem
            icons={[disconnectedIcon, connectedIcon]}
            title="Polar Ignite 3"
          />
        </Menu>

        <Alarms style={"menu"} />
      </div>
    </div>
  );
}

export default SettingsScreen;
