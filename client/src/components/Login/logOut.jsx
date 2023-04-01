import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogOutButton=()=> {
  const { isLoading, isAuthenticated, error, user, loginWithPopup, logout} = useAuth0();
  return <button onClick={() => logout()}>Log Out</button>;
}

