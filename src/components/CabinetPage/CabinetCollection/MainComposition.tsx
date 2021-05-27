import React, { useEffect, useState } from "react";
import { ClientComposition } from "./ClientComposition";
import { ControlClient } from "./ControlClient";
import { DescriptionCompositon } from "./DescriptionCompositon";
import { getClient } from "../../../api/client";
import { CardCollection } from "./CardCollection";
import { IMainClient } from "../../../types/ClientType";
import { restoreToken } from "../../../function/restoreToken";

export const MainComposition: React.FC = () => {
  const [dataClient, setDataClient] = useState<IMainClient>({
    id: 0,
    name: "",
    address: "",
    phone: "",
    status: 0,
    useId: 0,
  });
  useEffect(() => {
    getClient()
      .then((res) => {
        if (res) {
          switch (res.status) {
            case 200:
              setDataClient(res.data);
              return;
            case 401:
              restoreToken();
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="main-composition">
      {dataClient.id !== 0 ? (
        <>
          <div className="first-composition">
            <ClientComposition dataClient={dataClient} />
            <ControlClient id={dataClient.id} />
          </div>
          <div className="second-composition">
            <DescriptionCompositon id={dataClient.id} />
            <CardCollection id={dataClient.id} />
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};
