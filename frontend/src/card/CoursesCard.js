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
                to={`update/${props.id}`}
                className="w-full shadow-lg text-[white] text-xl text-center my-2 mx-auto block py-2 bg-five  hover:bg-[green] rounded"
              >
                Update
              </Link>
            </div>
          )}
          {(!user || (user && !user.isAdmin)) && (
            <div>
              <Link
                to={`/course/${props.id}`}
                className="w-full shadow-lg text-[white] text-center my-2 text-xl mx-auto block py-2 bg-five  hover:bg-[green] rounded"
              >
                Details
              </Link>
            </div>
          )}
          <div>
            <button 
              data-tooltip-target="tooltip-default"
              type="button"
              class="text-white bg-[blue] hover:bg-[#0000ffed] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[blue] dark:hover:bg-[blue] dark:focus:ring-[blue]"
            >
              Default tooltip
            </button>
            <div
              id="tooltip-default"
              role="tooltip"
              class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-[white] bg-[gray] rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-[gray]"
            >
              Tooltip content
              <div class="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
