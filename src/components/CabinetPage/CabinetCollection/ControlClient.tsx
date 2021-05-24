import React from "react";

export const ControlClient: React.FC = () => {
  return (
    <div className="controll-panel-client">
      <h3 className="h3">Контрольная панель</h3>
      <div className="collection-control-btn">
        <span>Недозвон</span>
        <span>Закрыт</span>
        <span>Неудача</span>
        <span>Передать</span>
      </div>
    </div>
  );
};
