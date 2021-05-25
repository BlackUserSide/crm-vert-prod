import React, { FormEvent, useEffect, useState } from "react";
import { Shain } from "../../../function/stringSha/ShaIn";
import { ShaOut } from "../../../function/stringSha/ShaOut";
type TProps = {
  id: number;
};
export const DescriptionCompositon: React.FC<TProps> = ({ id }) => {
  const [desc, setDesc] = useState<string>("");
  const changeHandler = (e: FormEvent<HTMLTextAreaElement>) => {
    const val = e.currentTarget.value;
    setDesc(val);
    Shain(val, id, "desc");
  };
  useEffect(() => {
    if (desc === "") {
      const loc = localStorage.getItem(`${id}_desc`);
      if (loc !== null) {
        let res = ShaOut(loc);
        setDesc(res);
      }
    }
  }, [desc, id]);
  return (
    <div className="desc-composition-main">
      <textarea
        id=""
        cols={60}
        rows={15}
        value={desc}
        onChange={changeHandler}
      ></textarea>
    </div>
  );
};
