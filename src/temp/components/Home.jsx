"use client";
import React from "react";
import AlarmItem from "../components/AlarmItem";
import SettingsIcon from "../components/icons/SettingsIcon";
import SunIcon from "../components/icons/SunIcon";
import "../styles/globals.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">AI-Wake</h1>
        <div className="settings-button">
          <SettingsIcon />
        </div>
      </header>

      <button className="new-alarm-button" onClick={() => navigate("/alarm")}>
        <SunIcon />
        <span className="button-text">New Alarm</span>
      </button>

      <div className="alarm-list">
        <AlarmItem timeRange="6:00 - 7:00" isActive={true} />
        <AlarmItem timeRange="7:00 - 7:30" isActive={true} />
        <AlarmItem timeRange="7:30 - 8:15" isActive={true} />
        <AlarmItem timeRange="8:00 - 8:30" isActive={true} />
      </div>
    </div>
  );
}
