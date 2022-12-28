import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

const Navbar = () => {
  const { user, setUser } = useContext(ThemeContext);
  return (
    <div className="py-2 grid grid-cols-2 gap-10">
      <div>
        <p className="text-4xl font-bold">
          Lear<span className=" text-five">ner</span>
        </p>
      </div>
      <div className="flex  space-x-10 flex-row justify-end items-center text-xl">
        <div>
          <Link to="/">Home</Link>
        </div>
        {user && user.isAdmin && (
          <div>
            <Link to="/upload">Upload</Link>
          </div>
        )}
        {!user && (
          <div>
            <Link to="/login">
              <span className="bg-five text-[white] p-2 rounded">Login</span>
            </Link>
          </div>
        )}
        {user && (
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
        )}
      </div>
    </div>
  );
};

export default Navbar;
