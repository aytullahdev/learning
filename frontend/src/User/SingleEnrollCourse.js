import React from 'react';

const SingleEnrollCourse = (props) => {
    return (
        <div>
            <div className='grid grid-cols-3 gap-10 justify-center items-center p-5 hover:shadow-sm cursor-pointer rounded bg-[#ffffff]'>
                    <div>
                        <img className='w-50 h-50 rounded' src={props.img} alt="" />
                    </div>
                    <div>
                        <h1 className='text-3xl font-semibold'>{props.tittle}</h1>
                        <p className='py-5 text-xl'>Enrolled: {props.createdAt}</p>
                    </div>
                    <div>
                        <button className='px-20 py-2 bg-[#36b323] hover:bg-[#2e9d1d] text-[white] rounded'>Add Review</button>
                    </div>
                </div>
        </div>
    );
};

export default SingleEnrollCourse;