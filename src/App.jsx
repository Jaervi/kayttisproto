import "./App.css";

import React from "react";
import "./App.css";
import SettingsScreen from "./temp/components/SettingsScreen/SettingsScreen";
import Home from "./temp/components/Home.jsx";
import Info from "./temp/components/Info.jsx";
import AlarmSetPage from "./temp/components/AlarmSetPage.jsx";
import { AlarmSetPage2 } from "./temp/components/AlarmSetPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [alarms, setAlarms] = useState([
    { id: 0, start: "6:00", end: "7:00" },
    { id: 1, start: "7:00", end: "7:30" },
    { id: 2, start: "7:00", end: "8:15" },
    { id: 3, start: "8:00", end: "8:30" },
  ]);

  return (
    <div className="app">
      <Router basename="/kayttisproto">
        <Routes>
          <Route path="/" element={<Home alarms={alarms} />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/info" element={<Info />} />
          <Route
            path="/alarm"
            element={<AlarmSetPage alarms={alarms} setAlarms={setAlarms} />}
          />
          <Route
            path="/alarm2"
            element={<AlarmSetPage2 alarms={alarms} setAlarms={setAlarms} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
