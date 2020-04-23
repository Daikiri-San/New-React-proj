import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import routes from "../routes";
import routesPaths from "../routesPaths";
import Loader from "./Loader";

function MainContent() {
  return (
    <div className="main-content">
      <Suspense fallback={<Loader />}>
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}

          <Redirect to={routesPaths.strings} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default MainContent;
