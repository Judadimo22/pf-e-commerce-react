import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./NavBar.module.css";
//import {BsBagCheckFill} from "react-icons/bs"
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from "../Login/login";
import { LogOutButton } from "../Login/logOut";
import { CACHIMBA } from "../../redux/actions";
import { useState } from "react";
import { createUser } from "../../redux/actions/index";
import axios from "axios";

const NavBar = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, logout } = useAuth0();
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    if (user && isAuthenticated) {
      axios.get("https://backend-pf-uh1o.onrender.com/users").then((element) => {
        const userDb = element.data.find(
          (element) => element.email === user.email
        );
        if (!userDb) {
          const newUser = {
            name: user.given_name,
            lastname: user.family_name,
            email: user.email,
          };

          console.log(newUser);
          dispatch(createUser(newUser));
        } else {
          setInfoUser(userDb);
          return false;
        }
      });
    }
  }, [user]);

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
              <a href="/home">
                <button>HOME</button>
              </a>
              <a href="/about">
                <button>ABOUT</button>
              </a>
              <a href="/contact">
                <button>CONTACT</button>
              </a>
              <a href="/Profile">
                <button>MyProfile</button>
              </a>
              <LogOutButton />
            </>
          ) : (
            <>
              <a href="/home">
                <button>HOME</button>
              </a>
              <a href="/about">
                <button>ABOUT</button>
              </a>
              <a href="/contact">
                <button>CONTACT</button>
              </a>
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

/*import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Login/login";
import {
  RiArrowDownSLine,
  RiLogoutCircleRLine,
  RiProfileLine,
} from "react-icons/ri";
import { MdOutlineFavorite } from "react-icons/md";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/index";
import Style from "./NavBar.module.css";

function NavBar() {
  const dispatch = useDispatch();
  const { isAuthenticated, user, logout } = useAuth0();
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    if (user && isAuthenticated) {
      axios.get("/users").then((element) => {
        const userDb = element.data.find(
          (element) => element.email === user.email
        );
        if (!userDb) {
          const newUser = {
            name: user.name,
            lastname: user.family_name,
            email: user.email,
          };
          dispatch(createUser(newUser));
        } else {
          setInfoUser(userDb);
          return false;
        }
      });
    }
  }, [user]);

  return (
    <React.Fragment>
      <div className="flex flex-col lg:flex-row lg:justify-between bg-white w-full fixed py-3 md:p-3 z-20">
        <div className="flex relative justify-center items-center lg:[margin-right:12%] lg:ml-10 ">
          <section
            className={Style.p_menu1 + "block absolute left-0 top-1 md:hidden"}
          >
            <nav id="navbar" role="navigation">
              <input className={Style.toggle1} id="toggle1" type="checkbox" />
              <label className={Style.hamburger1} htmlFor="toggle1">
                <div className={Style.top}></div>
                <div className={Style.meat}></div>
                <div className={Style.bottom}></div>
              </label>

              <nav className={Style.menu1}>
                <Link className={Style.link1} to="/home">
                  HOME
                </Link>
                <Link className={Style.link1} to="/about">
                  ABOUT
                </Link>
                <Link className={Style.link1} to="/contact">
                  CONTACT
                </Link>
              </nav>
            </nav>
          </section>
          <div className="flex items-center justify-end mr-2 lg:mr-8">

            {isAuthenticated && user ? (
              <>
                {" "}
                <nav className="z-20 block md:hidden absolute right-4">
                  <Menu
                    menuButton={
                      <MenuButton className="flex bg-primary items-center gap-x-2 hover:bg-[#0d6efd]  rounded-lg transition-colors pl-3 pr-5">
                        <img
                          src={user.picture}
                          alt={user.given_name}
                          className="w-8 h-8 object-cover rounded-full"
                        />
                        <RiArrowDownSLine />
                      </MenuButton>
                    }
                    align="end"
                    arrow
                    arrowClassName="bg-secondary-100"
                    transition
                    menuClassName="bg-secondary-100 p-4"
                  >
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to="/profile"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <img
                          src={user.picture}
                          alt={user.given_name}
                          className="w-8 h-8 object-cover rounded-full"
                        />
                        <div className="flex flex-col text-sm">
                          <span className="text-sm">{user.given_name} </span>
                          <span className="text-xs text-gray-500">
                            {user.email}
                          </span>
                        </div>
                      </Link>
                    </MenuItem>
                    <hr className="my-4 border-gray-500" />
                    <MenuItem className="p-0 hover:bg-transparent">
                      {infoUser.roll == "superAdmin" ||
                      infoUser.roll == "Admin" ? (
                        <Link
                          to="/dashboard"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                        >
                          <RiProfileLine /> Admin
                        </Link>
                      ) : (
                        <Link
                          to="/profile"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                        >
                          <RiProfileLine /> My Profile
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to="/profile/favorites"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <MdOutlineFavorite /> Favorites
                      </Link>
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to="#"
                        onClick={() =>
                          logout({ returnTo: window.location.origin })
                        }
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <RiLogoutCircleRLine /> Log Out
                      </Link>
                    </MenuItem>
                  </Menu>
                </nav>
              </>
            ) : (
              <div className="z-20 block md:hidden absolute right-4">
                <LoginButton />
              </div>
            )}
          </div>
        </div>
        <div className="hidden md:flex justify-between lg:w-4/5 text-[20px] text-black items-center [padding-left:5%] lg:px-0">
          <div className="flex justify-around lg:justify-start w-4/5">
            <Link
              className="[margin-right:calc(30%-100px)] lg:mr-10"
              to="/home"
            >
              HOME
            </Link>
            <Link
              className="[margin-right:calc(30%-100px)] lg:mr-10"
              to="/about"
            >
              ABOUT
            </Link>
            <Link
              className="[margin-right:calc(30%-100px)] lg:mr-10"
              to="/contact"
            >
              CONTACT
            </Link>
          </div>
          <div className="flex items-center justify-end mr-2 lg:mr-8">
            {infoUser.roll == "superAdmin" ||
            infoUser.roll == "Admin" ? null : (
              <Link to="/profile/favorites">
                <MdFavoriteBorder className="text-3xl mr-4" />
              </Link>
            )}

            {isAuthenticated && user ? (
              <>
                {" "}
                <nav>
                  <Menu
                    menuButton={
                      <MenuButton className="flex bg-primary items-center gap-x-2 hover:bg-[#0d6efd]  rounded-lg transition-colors pl-3 pr-5">
                        <img
                          src={user.picture}
                          alt={user.given_name}
                          className="w-6 h-6 object-cover rounded-full"
                        />
                        <p className="flex">
                          Hi!
                          <span className="ml-1">
                            {user.given_name || user.name}
                          </span>
                        </p>
                        <RiArrowDownSLine />
                      </MenuButton>
                    }
                    align="end"
                    arrow
                    arrowClassName="bg-secondary-100"
                    transition
                    menuClassName="bg-secondary-100 p-4"
                  >
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to="/profile"
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <img
                          src={user.picture}
                          alt={user.given_name}
                          className="w-8 h-8 object-cover rounded-full"
                        />
                        <div className="flex flex-col text-sm">
                          <span className="text-sm">{user.given_name} </span>
                          <span className="text-xs text-gray-500">
                            {user.email}
                          </span>
                        </div>
                      </Link>
                    </MenuItem>
                    <hr className="my-4 border-gray-500" />
                    <MenuItem className="p-0 hover:bg-transparent">
                      {infoUser.roll == "superAdmin" ||
                      infoUser.roll == "Admin" ? (
                        <Link
                          to="/dashboard"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                        >
                          <RiProfileLine /> Admin
                        </Link>
                      ) : (
                        <Link
                          to="/profile"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                        >
                          <RiProfileLine /> My Profile
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                      {infoUser.roll == "superAdmin" ||
                      infoUser.roll == "Admin" ? null : (
                        <Link
                          to="/profile/favorites"
                          className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                        >
                          <MdOutlineFavorite /> Favorites
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem className="p-0 hover:bg-transparent">
                      <Link
                        to="#"
                        onClick={() =>
                          logout({ returnTo: window.location.origin })
                        }
                        className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
                      >
                        <RiLogoutCircleRLine /> Log Out
                      </Link>
                    </MenuItem>
                  </Menu>
                </nav>
              </>
            ) : (
              <LoginButton />
            )}
          </div>
        </div>
      </div>
      <Outlet />
    </React.Fragment>
  );
}

export default NavBar;*/
