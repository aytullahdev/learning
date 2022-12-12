import React from 'react';

const Login = () => {
    return (
        <div className='mx-auto  py-10 bg-white w-[250px] '>
            <h1 className='text-4xl font-semibold py-10'>Login</h1>
            <div className='flex space-y-2 flex-col'>
                <label className='text-xl'>Email</label>
                <input className='border border-four rounded px-2 py-2' type="text"></input>
            </div>
            <div className='flex space-y-2 flex-col'>
                <label className='text-xl'>Password</label>
                <input className='border border-four rounded px-2 py-2' type="password"></input>
            </div>
            <div className='py-5 flex justify-center'>
                <button className='bg-five text-[white] text-xl rounded px-10 py-2'>Login</button>
            </div>
        </div>
    );
};

export default Login;