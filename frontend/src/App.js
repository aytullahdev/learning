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
import React, { useContext, useEffect, useState } from "react";
import SecureUser from "./User/SecureUser";
import Contentupload from "./admin/Contentupload";
import ReviewSlider from "./home/ReviewSlider";
import Navbar from "./home/Navbar";
import './App.css'
import Footer from "./home/Footer";
import CourseDetails from "./card/CourseDetails";


export const ThemeContext = React.createContext();

function  App() {
  const [user,setUser] =  useState(null);
  useEffect(()=>{
    if(localStorage.getItem('user')){
    setUser(JSON.stringify( localStorage.getItem('user')));
    }
  })
  return (
    <ThemeContext.Provider value={{user,setUser}}>
    <div className="App mx-10">
      <Navbar/>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Crashcourses />
              <Statussection />
              <ReviewSlider/>
            </>
          }
        />
        <Route path="/profile" element={<SecureUser ><Profile /></SecureUser> }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/upload" element={<SecureUser><Contentupload/></SecureUser>}/>
        <Route path="/course/:courseID" element={<CourseDetails/>}/>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </div>
    <Footer/>
    </ThemeContext.Provider>
  );
}

export default App;
