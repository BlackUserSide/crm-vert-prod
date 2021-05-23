import React, { useContext } from "react";
import { RouteWithSubRoutes } from "./RouteWithSubRoutes";
import { Switch } from "react-router-dom";

import { RoutesContext } from "./RoutesContext";
export const MainRoutes = () => {
  const { routes } = useContext(RoutesContext);
  //console.log(process.env);

  return (
    <Switch>
      {routes
        ? routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)
        : ""}
    </Switch>
  );
};
