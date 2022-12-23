import React, { useEffect, useState } from 'react';

const useUserstate = () => {
   const [user,setUser] = useState(null);
   useEffect(()=>{
      setUser( JSON.parse(localStorage.getItem('user')));
    //   console.log(user)
   },[])
   const load = ()=>{
       
        setUser( JSON.parse(localStorage.getItem('user')));
        console.log(user)
   }
   return {user,setUser,load};
};

export default useUserstate;