import React from "react";

type Tprops = {
  message: string;
  className: string;
};

export const PopSecondMessage: React.FC<Tprops> = ({ message, className }) => {
  return (
    <div className={`pop-second-message ${className} `}>
      <h3 className="h3">{message}</h3>
    </div>
  );
};
