import React, { useState } from "react";
import copy from "../../../image/copy.svg";
import { PopSecondMessage } from "../../../ui/popSecondMessage/PopSecondMessage";
export const ClientComposition: React.FC = () => {
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
      <h2 className="h2">Малиев Камил Ефредович</h2>
      <div className="number-props">
        <p>
          Номер: <span>79153758349</span>{" "}
        </p>
        <img
          src={copy}
          alt=""
          onClick={() => {
            copyHandler("7915375834");
          }}
        />
      </div>
      <div className="address-wrapper">
        <p>
          Адресс : <span>Москва Алексеевский Кибальчича 2 1 4</span>
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
