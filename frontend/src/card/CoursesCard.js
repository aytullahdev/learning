import React from 'react';
import { Link } from 'react-router-dom';

const CoursesCard = (props) => {
    return (
        <Link to={`/course/${props.id}`}>
            <div className=" rounded shadow-sm border-[gray] overflow-hidden  hover:border-five border">
          <img
            src={props.img}
            alt=""
          />
          <div className="p-2">
            <p className="text-lg py-2 font-bold">
              {props.tittle}
            </p>
            <p>
              <span className="text-xl font-bold text-five ">৳ {props.price}</span>
            </p>
          </div>
        </div>
        </Link>
    );
};

export default CoursesCard;