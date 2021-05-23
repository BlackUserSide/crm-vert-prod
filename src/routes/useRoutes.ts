import { CabinetWrapper } from "../components/CabinetPage/CabinetWrapper";
import { LoginPage } from "../components/LoginPage/LoginPage";
import { TRoutesWrapper } from "./RoutesContext";

export const useRoutes: TRoutesWrapper = {
  routes: [
    { path: "/", component: LoginPage, exact: true, routes: [] },
    { path: "/cabinet", exact: false, component: CabinetWrapper, routes: [] },
  ],
};
