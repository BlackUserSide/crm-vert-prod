import React from "react";
export type TRoutesWrapper = {
  routes: Array<TRoutesContext>;
};
export type TRoutesContext = {
  path: string;
  component: any;
  exact: boolean;
  routes: Array<TRoutesContext>;
};

export const RoutesContext = React.createContext<Partial<TRoutesWrapper>>({});
