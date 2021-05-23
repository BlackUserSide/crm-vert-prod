import React from "react";
import { Route } from "react-router";

export const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      path={route.path}
      render={(props: any) => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
};
