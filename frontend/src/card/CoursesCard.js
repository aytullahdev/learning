import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import { useContext } from "react";

const CoursesCard = (props) => {
  const { user } = useContext(ThemeContext);
  return (
    <div>
      <div className=" rounded shadow-sm border-[gray] overflow-hidden  hover:border-five border">
        <img src={props.img} alt="" />
        <div className="px-2">
          <p className="text-lg py-2 font-bold">{props.tittle}</p>
          <p>
            <span className="text-xl font-bold text-five ">
              ৳ {props.price}
            </span>
          </p>
          { user && user.isAdmin &&
            <div>
              <Link to={`update/${props.id}`} className="w-full text-[white] text-xl text-center my-2 mx-auto block py-2 bg-five  hover:bg-[green] rounded">
                Update
              </Link>
            </div>
          }
          { ((!user) || (user && !user.isAdmin)) &&
            <div>
              <Link to={`/course/${props.id}`} className="w-full text-[white] text-center my-2 text-xl mx-auto block py-2 bg-five  hover:bg-[green] rounded">
                Details
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;