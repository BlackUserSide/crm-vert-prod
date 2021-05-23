import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { getDataUser } from "../../../api/users";
import logOut from "../../../image/exit.svg";
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
  return (
    <div className="header-cabinet">
      <div className="users-data-wrapper">
        <h3 className="h3">{`${dataUser.name} ${dataUser.lastName}`}</h3>
        <img src={logOut} alt="log-out" onClick={logOutWrapper} />
      </div>
    </div>
  );
};
