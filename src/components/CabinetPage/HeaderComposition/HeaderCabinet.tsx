import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getDataUser } from "../../../api/users";
import logOut from "../../../image/exit.svg";
import setting from "../../../image/settings.svg";
import { PopSetPassword } from "../../../ui/popSetPassword/PopSetPassword";
interface IDataUser {
  name: string;
  lastName: string;
}

export const HeaderCabinet: React.FC = () => {
  let history = useHistory();
  const [dataUser, setDataUser] = useState<IDataUser>({
    name: "",
    lastName: "",
  });
  const [pop, setPop] = useState<boolean>(false);
  const [hideSetting, setHideSetting] =
    useState<boolean | undefined>(undefined);
  useEffect(() => {
    getDataUser()
      .then((res) => {
        setDataUser(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const logOutWrapper = () => {
    localStorage.clear();
    history.push("/");
  };
  const hideHandler = () => {
    if (hideSetting) {
      setHideSetting(false);
      return;
    }
    setHideSetting(true);
  };

  return (
    <div className="header-cabinet">
      <div className="users-data-wrapper">
        <div className="container-name-user">
          <h3
            className="h3"
            onClick={hideHandler}
          >{`${dataUser.name} ${dataUser.lastName}`}</h3>
          <div
            className={`hide-settings-user  ${
              hideSetting
                ? "active-hide"
                : hideSetting === false
                ? "hide-op"
                : ""
            }`}
          >
            <img src={setting} alt="" />
            <span onClick={() => setPop(true)}>Настройка</span>
          </div>
        </div>

        <img src={logOut} alt="log-out" onClick={logOutWrapper} />
      </div>
      {pop ? <PopSetPassword setPop={setPop} /> : ""}
    </div>
  );
};
