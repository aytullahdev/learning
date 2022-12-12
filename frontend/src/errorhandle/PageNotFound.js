import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h1 className='text-2xl font-bold text-center uppercase '>Page not found go <Link to="/" className=" underline text-[gray]">Home</Link></h1>
        </div>
    );
};

export default PageNotFound;