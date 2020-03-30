import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Exercises from "../pages/Exercises";
import ExerciseNew from "../pages/ExerciseNew";
import NotFound from "../pages/NotFound";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/exercise" component={Exercises} />
          <Route exact path="/exercise/new" component={ExerciseNew} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
