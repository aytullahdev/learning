import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
const Contentupload = () => {
    const [uploadContent, setUploadContent] = useState();
    const handleSubmit = ()=>{
        const formData = new FormData();
        formData.append('uploadContent', uploadContent)
        axios.post("http://localhost:5556/api/users/upload",formData, {
        }).then(res=>{
            console.log(res);
        })

    }
    const onFilechange = (e)=>{
        setUploadContent(e.target.files[0]);
    }
    return (
        <div>
            <h1 className='text-3xl text-center font-semibold py-10'>Upload</h1>
            <div className='flex flex-col'>
                <input type="file" className='' onChange={onFilechange} />
                <button className='px-5 py-2 bg-five text-[white] rounded my-2 hover:bg-[green]' onClick={()=> handleSubmit()}>Upload</button>
            </div>
        </div>
    );
};

export default Contentupload;