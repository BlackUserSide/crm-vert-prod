import React, { FormEvent, useState } from "react";
import { cahangePass } from "../../api/users";
import vievIco from "../../image/view.svg";
import { Preloader } from "../preloader/Preloader";
interface IDataActive {
  first: boolean;
  second: boolean;
}
interface IDataChangePass {
  password: string;
  setPassword: string;
}
type TProps = {
  setPop: any;
};
export const PopSetPassword: React.FC<TProps> = ({ setPop }) => {
  const [active, setActive] = useState<IDataActive>({
    first: false,
    second: false,
  });
  const [message, setMessage] = useState<string>("");
  const [dataLogin, setDataLogin] = useState<IDataChangePass>({
    password: "",
    setPassword: "",
  });
  const [changed, setChanged] = useState<boolean>(false);
  const [preloader, setPreloader] = useState<boolean>(false);
  const activeHandler = (data: number) => {
    if (data === 0) {
      if (active.first) {
        setActive((prev) => ({
          ...prev,
          first: false,
        }));
        return;
      } else {
        setActive((prev) => ({
          ...prev,
          first: true,
        }));
      }
      if (active.second) {
        setActive((prev) => ({
          ...prev,
          second: false,
        }));
        return;
      }
      setActive((prev) => ({
        ...prev,
        second: true,
      }));
      return;
    }
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    setPreloader(true);
    e.preventDefault();
    if (dataLogin.password === dataLogin.setPassword) {
      if (dataLogin.password !== "" && dataLogin.setPassword !== "") {
        cahangePass(dataLogin.password)
          .then((res) => {
            if (res) {
              switch (res.status) {
                case 200:
                  setTimeout(() => {
                    setPreloader(false);
                  }, 1200);
                  setChanged(true);
                  setMessage("Пароль успешно изменен");
                  setTimeout(() => {
                    setPop(false);
                  }, 4000);
                  return;
                case 500:
                  return;
              }
            }
          })
          .catch((err) => console.log(err));
      } else {
        setMessage("Пароли не могу быть пустыми");
      }
    } else {
      setMessage("Пароли не совпадают");
    }
  };
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const val = e.currentTarget.value;
    setDataLogin((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  return (
    <div className="pop-set-password">
      <div className="bg-lock" onClick={() => setPop(false)}></div>
      <form
        className="main-form-pop-password"
        onSubmit={(e) => submitHandler(e)}
      >
        {preloader ? (
          <div className="preloader-wrapper">
            <Preloader />
          </div>
        ) : (
          <>
            {changed ? (
              <p className="change-message">{message}</p>
            ) : (
              <>
                <div className="err-wrapper">
                  {message !== "" ? <p>{message}</p> : ""}
                </div>
                <div className="input-element">
                  <input
                    type={active.first ? "text" : "password"}
                    name="password"
                    onChange={changeHandler}
                    value={dataLogin.password}
                    placeholder="Введите пароль"
                  />
                  <img src={vievIco} alt="" onClick={() => activeHandler(0)} />
                </div>
                <div className="input-element">
                  <input
                    type={active.second ? "text" : "password"}
                    name="setPassword"
                    onChange={changeHandler}
                    value={dataLogin.setPassword}
                    placeholder="Повторите пароль"
                  />
                  <img src={vievIco} alt="" onClick={() => activeHandler(1)} />
                </div>
                <button type="submit">Сменить пароль</button>
                <button type="button" onClick={() => setPop(false)}>
                  Выйти
                </button>
              </>
            )}
          </>
        )}
      </form>
    </div>
  );
};
