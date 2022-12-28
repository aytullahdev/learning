import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import EnrolCourses from './EnrolCourses';

const Profile = () => {
    const {user} = useContext(ThemeContext)
    return (
        <div className='my-10'>
            <EnrolCourses/>
        </div>
    );
};

export default Profile;