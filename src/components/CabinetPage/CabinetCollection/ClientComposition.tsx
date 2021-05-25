import React, { useState } from "react";
import copy from "../../../image/copy.svg";
import { IMainClient } from "../../../types/ClientType";
import { PopSecondMessage } from "../../../ui/popSecondMessage/PopSecondMessage";
type TProps = {
  dataClient: IMainClient;
};
export const ClientComposition: React.FC<TProps> = ({ dataClient }) => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [className, setClassName] = useState<string>("");
  const copyHandler = (phone: string) => {
    setPopUp(true);
    navigator.clipboard.writeText(phone);
    setTimeout(() => {
      setClassName("non-active-pop-message");
    }, 1000);
    setTimeout(() => {
      setPopUp(false);
      setClassName("");
    }, 2000);
  };

  console.log(popUp);

  return (
    <div className="client-composition">
      <h2 className="h2">{dataClient.name}</h2>
      <div className="number-props">
        <p>
          Номер: <span>{dataClient.phone}</span>{" "}
        </p>
        <img
          src={copy}
          alt=""
          onClick={() => {
            copyHandler(dataClient.phone);
          }}
        />
      </div>
      <div className="address-wrapper">
        <p>
          Адресс : <span>{dataClient.address}</span>
        </p>
      </div>
      {popUp ? (
        <PopSecondMessage message="Номер скопирован" className={className} />
      ) : (
        ""
      )}
    </div>
  );
};
