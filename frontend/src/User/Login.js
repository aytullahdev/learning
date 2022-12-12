import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Login = () => {
   const [userData, setUserData] = useState({
        email:'',
        password:'',
   })
   const {email,password} = userData
   const setData = (e)=>{
    setUserData((prev)=>({...prev,[e.target.name]:e.target.value}));
   }
    const handleSubmit = ()=>{
        if(!email || !password){
            toast.error("Please provide all data!");
            return;
        }
        toast.success("All data provided");
    }
    return (
        <div className='mx-auto  py-10 bg-white w-[250px] '>
            <h1 className='text-4xl font-semibold py-10'>Login</h1>
            <div className='flex space-y-2 flex-col'>
                <label className='text-xl'>Email</label>
                <input onChange={setData} value={email} name="email" className='border border-four rounded px-2 py-2' type="text"></input>
            </div>
            <div className='flex space-y-2 flex-col'>
                <label className='text-xl'>Password</label>
                <input onChange={setData} value={password} name="password" className='border border-four rounded px-2 py-2' type="password"></input>
            </div>
            <div className='py-5 flex justify-center'>
                <button onClick={()=>{handleSubmit()}} className='bg-five text-[white] text-xl rounded px-10 py-2'>Login</button>
            </div>
        </div>
    );
};

export default Login;