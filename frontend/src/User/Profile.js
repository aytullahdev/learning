import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ThemeContext } from '../App';
import EnrolCourses from './EnrolCourses';

const Profile = () => {
    const {user, setUser} = useContext(ThemeContext)
    const [userUpdate,setUserUpdate] = useState({
        img:"",
        profession:""
    })
    
    const handleSubmit = () =>{
        //console.log(userUpdate);
        if(!img || !profession){
            toast.error("Please add all the data!");
            return;
        }
        const config = {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          };
         toast.promise(axios
            .post("http://localhost:5556/api/users/userupdate", {userdata:userUpdate}, config)
            .then((res) => {
              if (res.data) {
                setUser((prev)=>({...prev,profession,img}));
                toast.success("Data is inserted");
              }
            }),{
                pending: "User is updating"
            });

    }

    const changeHandle = (e)=>{
        setUserUpdate((prev)=>({...prev,[e.target.name]:e.target.value}));
        
    }
    const {profession,img} = userUpdate;
    useEffect(()=>{
        if(user){
            setUserUpdate({
                img:user.img,
                profession:user.profession
            });
        }
    },[user])
    return (
        <div className='my-10 w-full '>
           {user &&
           <div className='grid grid-cols-1 lg:grid-cols-2 w-full'>
                <div className=''>
                     <div className='flex items-center justify-center'>
                        
                        <img className='rounded-full w-50' src={user.img} alt="" />
                     </div>
                </div>
                <div className=''>
                    <h1 className='text-4xl  mb-5  text-center uppercase'>User information</h1>
                    <div className=' grid grid-cols-2 gap-10'>
                        <div>
                            <span className='  '>Name</span>
                            <input type="text" value={user.name}  disabled className='w-full my-2 border rounded'/>
                        </div>
                        <div>
                            <span>Email</span>
                            <input type="text" value={user.email}  disabled className='w-full my-2 border rounded'/>
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 gap-2'>
                        <div>
                            <span className='  '>Profession</span>
                            <input onChange={changeHandle} type="text" name='profession' value={profession}   className='w-full my-2 border rounded'/>
                        </div>
                        <div>
                            <span>Image</span>
                            <input onChange={changeHandle} type="text" value={img} name="img"  className='w-full my-2 border rounded'/>
                        </div>
                    </div>
                    <div>
                        <button  onClick={()=>{ handleSubmit() }} className='px-10 py-2 bg-five text-white rounded mx-auto block'>Update</button>
                    </div>
                </div>
            </div>
            }   
        </div>
    );
};

export default Profile;