import React from 'react';

const CoursesCard = (props) => {
    return (
        <div>
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
        </div>
    );
};

export default CoursesCard;