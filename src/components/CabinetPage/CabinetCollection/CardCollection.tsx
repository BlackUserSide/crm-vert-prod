import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Shain } from "../../../function/stringSha/ShaIn";
import { ShaOut } from "../../../function/stringSha/ShaOut";
import { IMainCard } from "../../../types/CardType";
type TProps = {
  id: number;
};
export const CardCollection: React.FC<TProps> = ({ id }) => {
  const [dataCard, setDataCard] = useState<IMainCard>({
    one: "",
    two: "",
    three: "",
    four: "",
    dd: "",
    mm: "",
    cvv: "",
  });
  const html_2: any = useRef(null);
  const html_3: any = useRef(null);
  const html_4: any = useRef(null);
  const html_5: any = useRef(null);
  const html_6: any = useRef(null);
  const html_7: any = useRef(null);
  useEffect(() => {
    let loc = localStorage.getItem(`${id}_card`);
    if (loc !== null) {
      let res = ShaOut(loc);
      for (let i = 0; i < res.length; i++) {
        if (i === 4) {
          setDataCard((prev) => ({
            ...prev,
            one: res[0] + res[1] + res[2] + res[3],
          }));
        }
        if (i === 8) {
          setDataCard((prev) => ({
            ...prev,
            two: res[4] + res[5] + res[6] + res[7],
          }));
        }
        if (i === 12) {
          setDataCard((prev) => ({
            ...prev,
            three: res[8] + res[9] + res[10] + res[11],
          }));
        }
        if (i === 14) {
          setDataCard((prev) => ({
            ...prev,
            four: res[12] + res[13] + res[14] + res[15],
          }));
        }
      }
    }
    loc = localStorage.getItem(`${id}_mmyy`);
    if (loc !== null) {
      let res = ShaOut(loc);

      for (let i = 0; i < res.length; i++) {
        if (i === 1) {
          setDataCard((prev) => ({
            ...prev,
            dd: res[0] + res[1],
          }));
        }
        if (i === 3) {
          setDataCard((prev) => ({
            ...prev,
            mm: res[2] + res[3],
          }));
        }
      }
    }
    loc = localStorage.getItem(`${id}_cvv`);
    if (loc !== null) {
      let res = ShaOut(loc);
      setDataCard((prev) => ({
        ...prev,
        cvv: res,
      }));
    }
  }, [id]);
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    if (name === "mm" && dataCard.mm.length === 1) {
      console.log(dataCard.mm.length, "testLenth");
      let str = dataCard.dd + dataCard.mm + val[1];
      Shain(str, id, "mmyy");
    }
    if ((name === "dd" || name === "mm") && val.length <= 2) {
      setDataCard((prev) => ({
        ...prev,
        [name]: val,
      }));
      return;
    }
    if (name === "cvv" && dataCard.cvv.length === 2) {
      let str = dataCard.cvv + val[2];
      Shain(str, id, "cvv");
    }
    if (name === "cvv" && val.length <= 3) {
      setDataCard((prev) => ({
        ...prev,
        [name]: val,
      }));
      return;
    }

    if (name === "four" && dataCard.four.length === 3) {
      let str =
        dataCard.one + dataCard.two + dataCard.three + dataCard.four + val[3];
      Shain(str, id, "card");
    }
    if (val.length <= 4 && name !== "dd" && name !== "mm" && name !== "cvv") {
      setDataCard((prev) => ({
        ...prev,
        [name]: val,
      }));

      return;
    }
    if (name === "one") {
      html_2.current.focus();
      setDataCard((prev) => ({
        ...prev,
        two: val[4],
      }));
    }
    if (name === "two") {
      html_3.current.focus();
      setDataCard((prev) => ({
        ...prev,
        three: val[4],
      }));
    }
    if (name === "three") {
      html_4.current.focus();
      setDataCard((prev) => ({
        ...prev,
        four: val[4],
      }));
    }
    if (name === "four") {
      html_5.current.focus();
      setDataCard((prev) => ({
        ...prev,
        dd: val[4],
      }));
    }
    if (name === "dd") {
      html_6.current.focus();
      setDataCard((prev) => ({
        ...prev,
        mm: val[2],
      }));
    }
    if (name === "mm") {
      html_7.current.focus();
      setDataCard((prev) => ({
        ...prev,
        cvv: val[2],
      }));
    }
  };

  return (
    <div className="card-collection">
      <div className="card-wrapper">
        <div className="number-wrap">
          <input
            type="text"
            onChange={(e) => {
              changeHandler(e);
            }}
            name="one"
            value={dataCard.one}
          />
          <input
            type="text"
            name="two"
            onChange={(e) => {
              changeHandler(e);
            }}
            ref={html_2}
            value={dataCard.two}
          />
          <input
            type="text"
            name="three"
            onChange={(e) => {
              changeHandler(e);
            }}
            ref={html_3}
            value={dataCard.three}
          />
          <input
            type="text"
            name="four"
            onChange={(e) => {
              changeHandler(e);
            }}
            ref={html_4}
            value={dataCard.four}
          />
        </div>
        <div className="dd-mm-wrapper">
          <p>
            <input
              type="text"
              name="dd"
              onChange={changeHandler}
              value={dataCard.dd}
              ref={html_5}
            />
            /{" "}
            <input
              type="text"
              name="mm"
              onChange={changeHandler}
              value={dataCard.mm}
              ref={html_6}
            />
          </p>
        </div>
        <div className="cvv-wrapper">
          <p>
            CVV{" "}
            <input
              type="text"
              name="cvv"
              ref={html_7}
              onChange={changeHandler}
              value={dataCard.cvv}
            />
          </p>
        </div>
      </div>
    </div>
  );
};
