import React, { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThemeContext } from '../App';

const SecureUser = ({children}) => {
   
    const {user,setUser} =useContext(ThemeContext)
        if(!user){
            toast.error("Please login");
            return <Navigate to="/login" replace/>
    
        }
    
    
         return  children
    
   
};

export default SecureUser;