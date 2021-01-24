import './App.css';
import React from "react";
import PendingTask from "./components/PendingTask";
import InProgress from "./components/InProgress";
import Completed from "./components/Completed";

function App() {
  //kanban board
  return (
    <div className="component-app">
      <div>
        <PendingTask className="pending-task"/>
      </div>
      <div>
        <InProgress className="in-progress"/>
      </div>
      <div>
        <Completed className="completed"/>
      </div>
    </div>
  );
}

export default App;
