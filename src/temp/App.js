import React from "react";
import "./App.css";
import SettingsScreen from "./components/SettingsScreen/SettingsScreen";
import Home from "./components/Home.jsx"
import AlarmSetPage from "./components/AlarmSetPage.jsx";

function App() {
  return (
    <div className="app">
      <SettingsScreen />
      <Home/>
      <AlarmSetPage/>
    </div>
  );
}

export default App;
