import './App.css'

import React from "react";
import "./App.css";
import SettingsScreen from "./temp/components/SettingsScreen/SettingsScreen";
import Home from "./temp/components/Home.jsx"
import AlarmSetPage from "./temp/components/AlarmSetPage.jsx";

function App() {
  return (
    <div className="app">
      <Home/>
      <SettingsScreen />
      <AlarmSetPage/>
    </div>
  );
}

export default App
