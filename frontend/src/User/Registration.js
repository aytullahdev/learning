import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThemeContext } from '../App';
const Registration = () => {
    const [userData, setUserData] = useState({
        email: "",
        password: "",
        name: "",
        cpwd: "",
      });
      const {user,setUser} = useContext(ThemeContext)
      const navigate = useNavigate();
      useEffect(()=>{
        if(user){
            navigate('/') 
        }
        
        
      },[user])
      const { cpwd , name, email, password } = userData;
      const setData = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };
      const handleSubmit = () => {
        if (!email || !password) {
          toast.error("Please provide all data!");
          return;
        }
        if(password.length<8){
            toast.warning("Password must be 8 character!");
            return;
        }
        if(password!=cpwd){
            toast.warning("Password doesn't match! ");
            return;
        }
        fetch("http://localhost:5556/api/users/", {
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
             toast.success("Account Created");
             localStorage.setItem('user',JSON.stringify(data));
             setUser(data);
           }
          })
          .catch((err) => console.log(err));
      };
      return (
        <div className="mx-auto  py-10 bg-white w-[250px] ">
          <h1 className="text-4xl font-semibold py-10">Registration</h1>
          <div className="flex space-y-2 flex-col py-2">
            <label className="text-xl">Name</label>
            <input
              onChange={setData}
              value={name}
              name="name"
              autoComplete="off"
              placeholder="Please enter your name"
              className="border border-four rounded px-2 py-2"
              type="text"
            ></input>
          </div>
          <div className="flex space-y-2 flex-col py-2">
            <label className="text-xl">Email</label>
            <input
              onChange={setData}
              value={email}
              name="email"
             autoComplete="off"
              placeholder='Enter your email'
              className="border border-four rounded px-2 py-2"
              type="text"
            ></input>
          </div>
          <div className="flex space-y-2 flex-col py-2">
            <label className="text-xl">Password</label>
            <input
              onChange={setData}
              value={password}
              autoComplete="off"
              name="password"
              className="border border-four rounded px-2 py-2"
              type="password"
            ></input>
          </div>
          <div className="flex space-y-2 flex-col py-2">
            <label className="text-xl">Confirm Password</label>
            <input
              onChange={setData}
              value={cpwd}
              name="cpwd"
              type="password"
              autoComplete="off"
              className="border border-four rounded px-2 py-2"
              
            ></input>
          </div>
          <div className="py-5 flex justify-center">
            <button
              onClick={() => {
                handleSubmit();
              }}
              className="bg-five text-[white] text-xl rounded px-10 py-2"
            >
              Registration
            </button>
          </div>
        </div>
      );
};

export default Registration;