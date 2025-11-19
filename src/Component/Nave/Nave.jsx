import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { SlUser } from "react-icons/sl";
import { VscHeart } from "react-icons/vsc";
import { SlHandbag } from "react-icons/sl";
import { AuthContext } from "../../Provaicer/AuthProvider";

const Nave = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const link = (
    <>
      <li>
        <NavLink to="/" className="font-bold">
          {" "}
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/shop" className="font-bold">
          {" "}
          Shop
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-[#1d232a]">
      <div className="container lg:w-[1440px] mx-auto">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {link}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl uppercase">Furniro</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{link}</ul>
          </div>
          <div className="lg:navbar-end flex gap-11">
            <div className="">
              {user ? (
                <>
                  <div className="">
                    <div>
                      <div className="navbar-start">
                        <div className="dropdown">
                          <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost btn-circle"
                          >
                            <Link to={"/profile"}>
                              <SlUser />
                            </Link>
                          </div>
                          <ul
                            tabIndex={0}
                            className=" lg:mr-36 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                          >
                            <li>
                              <NavLink to="/dashboard">Dashboard</NavLink>
                            </li>
                            <li>
                              <NavLink to="/profile">Profile</NavLink>
                            </li>
                            <li>
                              <button
                                onClick={handelLogOut}
                                className="btn mr-3"
                              >
                                LogOut
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p></p>
                  {/* <li className="mr-16">
            <NavLink to="/login"> Login</NavLink>
          </li> */}
                </>
              )}
            </div>
            <div className="flex">
              <Link to={"/favourite-product"}>
                <VscHeart />
              </Link>
            </div>
            <Link to={"/cart"} className="flex gap-[1px]">
              <SlHandbag />
              <p className="-mt-3">5</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nave;
