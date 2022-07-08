import  React from "react";
import "./App.css";

import CreateTimer from "./components/CreateTimer/CreateTimer.jsx";
import TimerList from "./components/TimerList.jsx"

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>tracker</h1>
        <CreateTimer  />
        <TimerList />
      </div>
    </div>
  );
}

export default App;
