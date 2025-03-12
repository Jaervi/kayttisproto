"use client";
import React from "react";
import AlarmItem from "../components/AlarmItem";
import SettingsIcon from "../components/icons/SettingsIcon";
import SunIcon from "../components/icons/SunIcon";
import "../styles/globals.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home( {alarms}) {


  const getTimeRange = (time) => {
    return `${time.start} - ${time.end}`
  } 

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
        {alarms.map(x => <AlarmItem id = {x.id} timeRange = {getTimeRange(x)} isActive={true}/>)}
      </div>
    </div>
  );
}
