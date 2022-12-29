import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import { toast } from "react-toastify";
import useUserstate from "../hooks/useUserstate";
import { ThemeContext } from "../App";
const Login = () => {
  const {user,setUser} = useContext(ThemeContext);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  useEffect(()=>{
    if(user){
        navigate('/') 
    }
    
    
  },[user])
  const { email, password } = userData;
  const setData = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = () => {
    if (!email || !password) {
      toast.error("Please provide all data!");
      return;
    }
    toast.promise( fetch("http://localhost:5556/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
       // console.log(data);
       if(data.message){
         toast.warning(data.message);
       }
       if(data._id){
         toast.success("Login Successful");
         //setUser(data);
          localStorage.setItem('user',JSON.stringify(data));
          setUser(data)
         
       }
      })
      .catch((err) => console.log(err)),{
        pending: "Login process..",
      });
  };
  return (
    <div className="mx-auto  py-10 bg-white w-[250px] ">
      <h1 className="text-4xl font-semibold py-10">Login</h1>
      <div className="flex space-y-2 flex-col">
        <label className="text-xl">Email</label>
        <input
          onChange={setData}
          value={email}
          name="email"
          className="border border-four rounded px-2 py-2"
          type="text"
        ></input>
      </div>
      <div className="flex space-y-2 flex-col">
        <label className="text-xl">Password</label>
        <input
          onChange={setData}
          value={password}
          name="password"
          className="border border-four rounded px-2 py-2"
          type="password"
        ></input>
      </div>
      <div className="py-5 flex justify-center">
        <button
          onClick={() => {
            handleSubmit();
          }}
          className="bg-five text-[white] text-xl rounded px-10 py-2"
        >
          Login
        </button>
      </div>
      <div>
         <p className=" text-[#074c74] text-md hover:underline"><Link to="/register">Create a account?</Link></p>
      </div>
    </div>
  );
};

export default Login;
