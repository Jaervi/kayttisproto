import "./App.css";

import React from "react";
import "./App.css";
import SettingsScreen from "./temp/components/SettingsScreen/SettingsScreen";
import Home from "./temp/components/Home.jsx";
import AlarmSetPage from "./temp/components/AlarmSetPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [alarms, setAlarms] = useState([
    {id: 0, start: "6:00", end: "7:00", },
    {id: 1, start: "7:00", end: "7:30", },
    {id: 2, start: "7:00", end: "8:15", },
    {id: 3, start: "8:00", end: "8:30", },
  ])

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home alarms={alarms}/>} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/alarm" element={<AlarmSetPage alarms={alarms}/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
