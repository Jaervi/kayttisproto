import "./App.css";

import React from "react";
import "./App.css";
import SettingsScreen from "./temp/components/SettingsScreen/SettingsScreen";
import Home from "./temp/components/Home.jsx";
import AlarmSetPage from "./temp/components/AlarmSetPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<SettingsScreen />} />
          <Route path="/alarm" element={<AlarmSetPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
