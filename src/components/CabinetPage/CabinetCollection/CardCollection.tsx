import React, { FormEvent, useEffect, useRef, useState } from "react";
import { Shain } from "../../../function/stringSha/ShaIn";
import { ShaOut } from "../../../function/stringSha/ShaOut";
import { IMainCard } from "../../../types/CardType";

export const CardCollection: React.FC = () => {
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
    let loc = localStorage.getItem(`${0}_card`);
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
          console.log(1);

          setDataCard((prev) => ({
            ...prev,
            four: res[12] + res[13] + res[14] + res[15],
          }));
        }
      }
    }
  }, []);
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    console.log(dataCard.dd);

    if ((name === "dd" || name === "mm") && val.length <= 2) {
      setDataCard((prev) => ({
        ...prev,
        [name]: val,
      }));
      return;
    }
    if (name === "mm" && dataCard.mm.length === 2) {
      let str = dataCard.mm + dataCard.dd + val[2];
      Shain(str, 0, "mmyy");
    }
    if (name === "four" && dataCard.four.length === 3) {
      let str =
        dataCard.one + dataCard.two + dataCard.three + dataCard.four + val[3];
      Shain(str, 0, "card");
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
      html_5.current.focus();
      setDataCard((prev) => ({
        ...prev,
        dd: val[3],
      }));
    }
    if (name === "mm") {
      html_6.current.focus();
      setDataCard((prev) => ({
        ...prev,
        dd: val[3],
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
              ref={html_5}
            />
            /{" "}
            <input
              type="text"
              name="mm"
              onChange={changeHandler}
              ref={html_6}
            />
          </p>
        </div>
        <div className="cvv-wrapper">
          <p>
            CVV <input type="text" name="cvv" ref={html_7} />
          </p>
        </div>
      </div>
    </div>
  );
};
