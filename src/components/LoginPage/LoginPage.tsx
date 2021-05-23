import React, { FormEvent, useEffect, useState } from "react";
import "./login.sass";
import bgImage from "../../image/bgLogin.jpg";
import vievIco from "../../image/view.svg";
import { loginUser } from "../../api/users";
import { Preloader } from "../../ui/preloader/Preloader";
import { useHistory } from "react-router";
import { checkToken } from "../../function/tokenLocalStorage";
export interface ILoginData {
  login: string;
  password: string;
}
export const LoginPage: React.FC = () => {
  const [showPass, setShowPass] = useState<boolean>(false);
  const [data, setData] = useState<ILoginData>({
    login: "",
    password: "",
  });
  const [preloader, setPreloader] = useState<boolean>(false);
  const [message, setMeassage] = useState<string>("");
  const history = useHistory();
  const changeShowHandler = () => {
    if (showPass) {
      setShowPass(false);
      return;
    }
    setShowPass(true);
    return;
  };
  useEffect(() => {
    const checkTocken = checkToken();
    if (checkTocken) {
      history.push("/cabinet");
    }
  }, [history]);
  const changeHandler = (e: FormEvent<HTMLInputElement>) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser(data)
      .then((res) => {
        setPreloader(true);
        if (res) {
          switch (res.status) {
            case 200:
              const token = res.data.token;
              localStorage.setItem("token", token);
              window.location.href = "/cabinet";
              return;
            case 422:
              setPreloader(false);
              setMeassage("Неправильный логин или пароль");
              return;
            case 500:
              setPreloader(false);
              setMeassage("Критическая ошибка сервера или клиента");
              return;
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="login-page-wrapper">
      <div className="picture-wrapp">
        <img src={bgImage} alt="" />
      </div>
      <div className="login-form">
        {preloader ? (
          <Preloader />
        ) : (
          <form className="form-main-login" onSubmit={submitHandler}>
            <div className="top-line">
              <h1 className="h1">Вход</h1>
              {message !== "" ? (
                <p className="err-message-login">{message}</p>
              ) : (
                ""
              )}
            </div>
            <div className="input-wrapper">
              <input
                type="text"
                onChange={changeHandler}
                name="login"
                placeholder="Логин"
                required
              />
            </div>
            <div className="input-wrapper">
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="Пароль"
                onChange={changeHandler}
                required
              />
              <img
                src={vievIco}
                className="show-pass-ico"
                alt="Show password"
                onClick={changeShowHandler}
              />
            </div>
            <button type="submit">Войти</button>
          </form>
        )}
      </div>
    </div>
  );
};
