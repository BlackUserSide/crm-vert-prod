import React, { useEffect, useState } from "react";

import "./main.sass";
import { MainRoutes } from "./routes/MainRouter";
import { RoutesContext } from "./routes/RoutesContext";
import { useRoutes } from "./routes/useRoutes";
import { PreloaderMain } from "./ui/PreloaderMain/PrealoderMain";
export const App: React.FC = () => {
  const [preloader, setPreloader] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setPreloader(false);
    }, 1800);
  });
  return (
    <div className="main-app-wrapper">
      {preloader ? (
        <PreloaderMain />
      ) : (
        <RoutesContext.Provider value={useRoutes}>
          <MainRoutes />
        </RoutesContext.Provider>
      )}
    </div>
  );
};
