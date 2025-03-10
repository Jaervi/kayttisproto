import React from "react";
import "./SettingsScreen.css";
import Menu from "../Menu/Menu";
import MenuItem from "../MenuItem/MenuItem";

function SettingsScreen() {
  return (
    <div className="settings-container">
      <div className="settings-background">
        <div className="settings-header">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2318c707ad652091920d1a0a7367862be3ea22846934b6d65572ebc432fa1cb9?placeholderIfAbsent=true"
            className="settings-icon"
            alt="Settings icon"
          />
          <div className="settings-title">Settings</div>
        </div>

        <button className="setup-button">Set Up Tracking Device</button>

        <Menu title="Your devices">
          <MenuItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c67611caf76aa5e55b73cae67dc75bb4017dc19807d8365c993e379f1f6dbc8b?placeholderIfAbsent=true"
            title="Oura Ring 4"
            description="Connected"
          />
          <MenuItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/c49d79f4cdfeb9dd74bc4a59f175300ccdbc69d66cfb4b119fee3e3ec43490c8?placeholderIfAbsent=true"
            title="Polar Ignite 3"
          />
        </Menu>

        <Menu title="Default alarm sound">
          <MenuItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1e8fdfbb7f3a9961ea776b019a0a0816248615dad33fa456efc12bbe109e65ac?placeholderIfAbsent=true"
            title="Alarm 1"
            description="Selected"
          />
          <MenuItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2f3cbab9e36a200511b1de09eaaf4f5bb30919b619017ea5230a8e46ab90dab1?placeholderIfAbsent=true"
            title="Alarm 2"
          />
          <MenuItem
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/2f3cbab9e36a200511b1de09eaaf4f5bb30919b619017ea5230a8e46ab90dab1?placeholderIfAbsent=true"
            title="Alarm 3"
            className="menu-item-overlap"
          />
        </Menu>
      </div>
    </div>
  );
}

export default SettingsScreen;
