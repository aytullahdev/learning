import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import Dropdown from "./Dropdown";
import Search from "./Search";

const Navbar = () => {
  const { user, setUser } = useContext(ThemeContext);
  const [toggleNav, setToggleNav] = useState(false);
  const toggle = () => {
    if (toggleNav == false) {
      setToggleNav(true);
    } else {
      setToggleNav(false);
    }
  };
  return (
    <div className="py-2 grid lg:flex lg:justify-between grid-cols-1 lg:grid-cols-2 gap-10 mb-2">
      <Link to="/">
        <div>
          <p className="text-4xl text-center  lg:text-left font-bold">
            Lear<span className=" text-five">ner</span>
          </p>
        </div>
      </Link>
      <div className="d-block absolute right-5 top-5 lg:hidden">
        <button onClick={() => toggle()}>
          {!toggleNav && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
          {toggleNav && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        className={`${
          toggleNav ? "left-0" : "-left-full"
        } bg-white shadow-md transition-all delay-150 duration-300 ease-in-out lg:shadow-none rounded p-5 lg:p-0 lg:bg-white absolute  top-0 space-y-5 lg:space-y-0 z-50 h-full lg:relative lg:h-auto lg:flex  lg:d-block space-x-10 flex-col gap-2 lg:gap-0 lg:flex-row justify-end items-center text-sm lg:text-xl`}
      >
        <Search />
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/catagories/all">Courses</Link>
        </div>
        <div>
          <Link to="/About">About Us</Link>
        </div>

        {user && user.isAdmin && (
          <div>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        )}
        {user && <Dropdown />}
        {!user && (
          <div>
            <Link to="/login">
              <span className="bg-five text-[white] p-2 rounded">Login</span>
            </Link>
          </div>
        )}
        {/* {user && (
          <div className="flex space-x-2 justify-center items-center">
            <div>
              <Link to="/profile">
                <span className="bg-four text-[black] p-2 rounded">
                  Profile
                </span>
              </Link>
            </div>
            <div>
              <button
                className=" rounded text-lg p-2 bg-[#d6f2cfb0] text-white"
                onClick={() => {
                  setUser(null);
                  localStorage.clear("user");
                }}
              >
                Logout
              </button>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
