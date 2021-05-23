import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { io } from "socket.io-client";
import "./cabinet.sass";
import { HeaderCabinet } from "./HeaderComposition/HeaderCabinet";
export const CabinetWrapper: React.FC = () => {
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      localStorage.clear();
      history.push("/");
    }
  }, [history]);
  useEffect(() => {
    const token: string | null = localStorage.getItem("token");
    if (token) {
      io("http://192.168.0.104:8000", { query: { id: `${token}` } });
    }
    return () => {
      console.log("conneted");
    };
  }, []);
  return (
    <div className="cabinet-wrapper">
      <HeaderCabinet />
    </div>
  );
};
