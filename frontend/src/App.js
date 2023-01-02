import { Link, Route, Routes } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import PageNotFound from "./errorhandle/PageNotFound";
import Catagories from "./home/Catagories";
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
import Banner from "./home/Banner";
import Navbar from "./home/Navbar";
import "./App.css";
import Footer from "./home/Footer";
import CourseDetails from "./card/CourseDetails";
import axios from "axios";
import SingleCatagory from "./home/SingleCatagory";
import Updatecourse from "./admin/Updatecourse";
import EnrolCourses from "./User/EnrolCourses";
import About from "./home/About";
import ContactUs from "./home/ContactUs";

axios.interceptors.response.use(
  (res) => res,
  (err) => {
    toast.error(err.response.data.message);
  }
);

export const ThemeContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);
  return (
    <ThemeContext.Provider value={{ user, setUser }}>
      <div className="App mx-2 lg:mx-10">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner lim={5} />
                <Catagories />
                <Crashcourses lim={6} />
                <Statussection />
                <ReviewSlider />
                <ContactUs />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/profile"
            element={
              <SecureUser>
                <Profile />
              </SecureUser>
            }
          />
          <Route path="/enrollcourses" element={<EnrolCourses />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route
            path="/upload"
            element={
              <SecureUser>
                <Contentupload />
              </SecureUser>
            }
          />
          <Route path="/course/:courseID" element={<CourseDetails />} />
          <Route path="/catagories/:catagory" element={<SingleCatagory />} />
          <Route path="/update/:id" element={<Updatecourse />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
      </div>
      <Footer />
    </ThemeContext.Provider>
  );
}

export default App;
