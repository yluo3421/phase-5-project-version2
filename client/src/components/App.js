import "../App.css";
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import HomePage from "./HomePage";
import YourEvents from "./YourEvents";
import NavComponent from "./NavComponent";
import Login from "./Login";

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

  return (
    <div>
      <NavComponent user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/personal-events">
          <YourEvents />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
