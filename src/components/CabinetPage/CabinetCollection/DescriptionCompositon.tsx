import React, { FormEvent, useEffect, useState } from "react";
import { Shain } from "../../../function/stringSha/ShaIn";
import { ShaOut } from "../../../function/stringSha/ShaOut";

export const DescriptionCompositon: React.FC = () => {
  const [desc, setDesc] = useState<string>("");
  const changeHandler = (e: FormEvent<HTMLTextAreaElement>) => {
    const val = e.currentTarget.value;
    setDesc(val);
    Shain(val, 0, "desc");
  };
  useEffect(() => {
    if (desc === "") {
      const loc = localStorage.getItem(`${0}_desc`);
      if (loc !== null) {
        let res = ShaOut(loc);
        setDesc(res);
      } else {
        const token = localStorage.getItem("token");
        localStorage.clear();
        if (token) {
          localStorage.setItem("token", token);
        }
      }
    }
  }, [desc]);
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
