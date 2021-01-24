import './App.css';
import React from "react";
import PendingTask from "./components/PendingTask";
import InProgress from "./components/InProgress";
import Completed from "./components/Completed";

function App() {
  return (
    <div>
      <div>
        <PendingTask/>
      </div>
      <div>
        <InProgress/>
      </div>
      <div>
        <Completed/>
      </div>
    </div>
  );
}

export default App;
