import React, { useContext } from 'react';
import { ThemeContext } from '../App';

const Profile = () => {
    const {user} = useContext(ThemeContext)
    return (
        <div>
            <h1 className='text-3xl uppercase text-center'>Welcome  <span className='text-[dodgerblue] font-bold'>{user.name}</span></h1>
        </div>
    );
};

export default Profile;