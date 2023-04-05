import React from "react";
import style from "./NavBar.module.css";
//import {BsBagCheckFill} from "react-icons/bs"
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/login";
import { LogOutButton } from "../Login/logOut";

const NavBar = () => {
  const { isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated, user);
  return (
    <div className={style.containerNavBar}>
      <div className={style.containerTitle}>
        <h2>Tu tienda favorita</h2>
      </div>
      <div className={style.containerSearch}>
        <div>
          {isAuthenticated ? (
            <>
              <a href="/Profile"><button>MyProfile</button></a>
              <a href="/home"><button>HOME</button></a>
            <a href="/about"><button>ABOUT</button></a>
            <a href="/contact"><button>CONTACT</button></a>
              <LogOutButton />
            </>
          ) : (<>
            <a href="/home"><button>HOME</button></a>
            <a href="/about"><button>ABOUT</button></a>
            <a href="/contact"><button>CONTACT</button></a>
            <LoginButton />
          </>
          )}
        </div>
        {/*<h2 className={style.logoCarritoCompras}><BsBagCheckFill/></h2>*/}
      </div>
    </div>
  );
};

export default NavBar;
