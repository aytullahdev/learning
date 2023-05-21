import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import Dropdown from "./Dropdown";
import Search from "./Search";

const Navbar = () => {
  const { user, setUser } = useContext(ThemeContext);
  return (
    <div className="py-2 grid lg:flex lg:justify-between grid-cols-1 lg:grid-cols-2 gap-10 mb-2">
      <Link to="/">
        <div>
          <p className="text-4xl text-center  lg:text-left font-bold">
            Lear<span className=" text-five">ner</span>
          </p>
        </div>
      </Link>

      <div className="flex  space-x-10 flex-col gap-2 lg:gap-0 lg:flex-row justify-end items-center text-sm lg:text-xl">
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
