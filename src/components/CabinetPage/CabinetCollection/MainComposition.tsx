import React, { useEffect } from "react";
import { ClientComposition } from "./ClientComposition";
import { ControlClient } from "./ControlClient";
import { DescriptionCompositon } from "./DescriptionCompositon";
import { getClient } from "../../../api/client";
import { CardCollection } from "./CardCollection";

export const MainComposition: React.FC = () => {
  useEffect(() => {
    getClient()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-composition">
      <div className="first-composition">
        <ClientComposition />
        <ControlClient />
      </div>
      <div className="second-composition">
        <DescriptionCompositon />
        <CardCollection />
      </div>
    </div>
  );
};
