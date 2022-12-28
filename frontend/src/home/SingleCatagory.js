import React from 'react';
import { useParams } from 'react-router-dom';

const SingleCatagory = () => {
    const { catagory } = useParams();
    return (
        <div>
           <h1>{catagory}</h1>
        </div>
    );
};

export default SingleCatagory;