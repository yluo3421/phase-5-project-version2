import "../App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./HomePage";
import YourEvents from "./YourEvents";
import NavComponent from "./NavComponent";
import Login from "./Login";

import PathFinding from "../AstarVisualizer/PathFinding";

import PathfindingVisualizer from "../PathfindingVisualizer/PathfindingVisualizer";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  // console.log(user)
  

  return (
    <div>
      <NavComponent user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <HomePage user = {user}/>
        </Route>
        <Route exact path="/visualizer">
          <PathfindingVisualizer user = {user}/>
        </Route>
        <Route exact path="/personal-events">
          <YourEvents user = {user} />
        </Route>
        <Route exact path="/pathfinding">
          <PathFinding user={user} />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
