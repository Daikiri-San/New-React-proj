import React, { Suspense } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import routes from "../routes";
import routesPaths from "../routesPaths";
// import Header from "./Header";

function MainContent() {
  return (
    <div className="main-content">
      <Suspense fallback={"<Spinner />"}>
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
