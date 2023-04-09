import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./log.module.css";
import { AiOutlineUser } from "react-icons/ai";


export const LoginButton = () => {
  const { isLoading, isAuthenticated, error, user, loginWithPopup, logout } =
    useAuth0();
  console.log(isAuthenticated, user);
  return (
    <button className={style.buttonAuth} onClick={() => loginWithPopup()}>
      Login
    </button>
  );
};


/*import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./log.module.css";

const LoginButton = () => {
  const { isLoading, isAuthenticated, error, user, loginWithPopup, logout } =
    useAuth0();
  console.log(isAuthenticated, user);
  return (
    <button className={style.buttonAuth} onClick={() => loginWithPopup()}>
      Login
    </button>
  );
};
export default LoginButton*/