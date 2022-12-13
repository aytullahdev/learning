import { Link, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import PageNotFound from "./errorhandle/PageNotFound";
import Crashcourses from "./home/Crashcourses";
import Statussection from "./home/Statussection";
import Login from "./User/Login";
import "react-toastify/dist/ReactToastify.css";
import Registration from "./User/Registration";
import useUserstate from "./hooks/useUserstate";
import Profile from "./User/Profile";
import React, { useContext, useState } from "react";
import SecureUser from "./User/SecureUser";


export const ThemeContext = React.createContext();

function App() {
  const [user,setUser] =  useState(null);
  
  return (
    <ThemeContext.Provider value={{user,setUser}}>
    <div className="App mx-10">
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
                  <button className=" rounded text-lg p-2 bg-[#d6f2cfb0] text-white" onClick={()=>{setUser(null)}}>
                     Logout
                  </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Crashcourses />
              <Statussection />
            </>
          }
        />
        <Route path="/profile" element={<SecureUser ><Profile /></SecureUser> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
