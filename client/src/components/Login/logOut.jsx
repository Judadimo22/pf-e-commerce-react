import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from './log.module.css';
import { AiOutlineUserDelete } from "react-icons/ai";


export const LogOutButton=()=> {
  const { isLoading, isAuthenticated, error, user, loginWithPopup, logout} = useAuth0();
  return <button className={style.buttonAuth} onClick={() => logout()}><AiOutlineUserDelete/></button>;
}