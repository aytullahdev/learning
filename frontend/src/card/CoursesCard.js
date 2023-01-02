import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import { useContext } from "react";

const CoursesCard = (props) => {
  const { user } = useContext(ThemeContext);
  return (
    <div>
      <div className="bg-[white]  relative h-[350px] lg:h-[380px] rounded shadow-sm border-[gray] overflow-hidden  hover:border-five border">
        <img src={props.img} alt="" />
        <div className="px-2">
          <p className="text-lg py-2 font-bold title-des">{props.tittle}</p>
          <p className="flex justify-between items-center">
            <span className="text-xl font-bold text-five ">{props.price}৳</span>
            <span className="text-md font-bold uppercase">
              {props.catagory}
            </span>
          </p>
          {user && user.isAdmin && (
            <div>
              <Link
                to={`/update/${props.id}`}
                className="absolute inset-x-0 bottom-0 w-60 shadow-lg text-[white] text-xl text-center my-2 mx-auto block py-2 bg-five  hover:bg-[green] rounded"
              >
                Update
              </Link>
            </div>
          )}
          {(!user || (user && !user.isAdmin)) && (
            <div>
              <Link
                to={`/course/${props.id}`}
                className="absolute inset-x-0 bottom-0 w-60 shadow-lg text-[white] text-center my-2 text-xl mx-auto block py-2 bg-five  hover:bg-[green] rounded"
              >
                Details
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
