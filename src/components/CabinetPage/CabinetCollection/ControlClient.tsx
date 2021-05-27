import React from "react";
import { changeDesc, changeCard, changeStatus } from "../../../api/client";
import { ShaOut } from "../../../function/stringSha/ShaOut";
type TProps = {
  id: number;
};
export const ControlClient: React.FC<TProps> = ({ id }) => {
  const putHandler = (data: number) => {
    switch (data) {
      case 1:
        changeStatus(2, id)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location.reload();
        return;
      case 2:
        console.log(id);

        changeStatus(3, id)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location.reload();
        return;
      case 3:
        changeStatus(4, id)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
        window.location.reload();
        return;
      case 4:
        const desc = localStorage.getItem(`${id}_desc`);
        if (desc !== null) {
          const data = {
            id: id,
            desc: ShaOut(desc),
          };

          changeDesc(data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }
        const numberCard = localStorage.getItem(`${id}_card`);
        const ddmm = localStorage.getItem(`${id}_mmyy`);
        const code = localStorage.getItem(`${id}_cvv`);
        if (numberCard !== null && ddmm !== null && code !== null) {
          const dataCard = numberCard + "," + ddmm + "," + code;
          const data = {
            id: id,
            card: ShaOut(dataCard),
          };

          changeCard(data)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
        }
        changeStatus(5, id)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
    }
  };
  return (
    <div className="controll-panel-client">
      <h3 className="h3">Контрольная панель</h3>
      <div className="collection-control-btn">
        <span
          onClick={() => {
            putHandler(1);
          }}
        >
          Недозвон
        </span>
        <span
          onClick={() => {
            putHandler(2);
          }}
        >
          Закрыт
        </span>
        <span
          onClick={() => {
            putHandler(3);
          }}
        >
          Неудача
        </span>
        <span
          onClick={() => {
            putHandler(4);
          }}
        >
          Передать
        </span>
      </div>
    </div>
  );
};
