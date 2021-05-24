import React, { FormEvent, useState } from "react";
import { Shain } from "../../../function/stringSha/ShaIn";

export const DescriptionCompositon: React.FC = () => {
  const [desc, setDesc] = useState<string>("");
  const changeHandler = (e: FormEvent<HTMLTextAreaElement>) => {
    const val = e.currentTarget.value;
    setDesc(val);
    Shain(val, 0);
  };
  return (
    <div className="desc-composition-main">
      <textarea id="" cols={60} rows={15} onChange={changeHandler}></textarea>
    </div>
  );
};
