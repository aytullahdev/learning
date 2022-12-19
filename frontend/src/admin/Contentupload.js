import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { ThemeContext } from '../App';
const Contentupload = () => {
    const [uploadContent, setUploadContent] = useState(null);
    const [courseData,setCourseData] = useState({
        tittle:'',
        price:0
    })
    const {tittle,price} = courseData;
    const {user} = useContext(ThemeContext);
    const config = {
        headers:{
            Authorization: `Bearer ${user.token}`
        }
    }
    const handleSubmit = ()=>{
        if(!uploadContent){
            toast.warning("Please Select a files!");
            return;
        }
        if(!tittle){
            toast.warning("Enter course course tittle!");
            return;
        }
        if(price<1000){
            toast.warning("Course Price must be gretter then 1000!");
            return;
        }
        const formData = new FormData();

        formData.append('uploadContent', uploadContent);
        formData.append('courseData',courseData);
        console.log(formData,courseData);
        axios.post("http://localhost:5556/api/users/upload",formData, config).then(res=>{
            if(res.data && res.data?.destination){
                toast.success("Content is uploaded");
                setCourseData({
                    tittle:'',
                    price:0
                });
                setUploadContent(null);
            }else{
                toast.error("Server error please try again");
            }
        })

    }
    const onCourseDataChange = (e)=>{
        setCourseData((prev)=>({...prev,[e.target.name]: e.target.value}))
    }
    const onFilechange = (e)=>{
        setUploadContent(e.target.files[0]);
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold py-10'>Upload</h1>
            <div>
                <span className='text-xl  font-semibold'>Tittle:</span>
                <input type="text" onChange={onCourseDataChange} className='p-4 bg-[#ffffff] shadow-sm rounded w-full my-4' placeholder='Enter the course tittle' value={tittle} name='tittle' />
            </div>
            <div>
                <span className='text-xl  font-semibold'>Price:</span>
                <input onChange={onCourseDataChange} type="number" min="999" className='p-4 bg-[#ffffff] shadow-sm rounded w-full my-4' placeholder='Enter the course amount' value={price} name='price' />
            </div>
            <div className='flex flex-col'>
                
                <input type="file" className=''   onChange={onFilechange} />
                <button className='px-5 py-2 bg-five text-[white] rounded my-2 hover:bg-[green]' onClick={()=> handleSubmit()}>Upload</button>
            </div>
        </div>
    );
};

export default Contentupload;