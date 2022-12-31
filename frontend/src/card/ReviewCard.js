import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import { ThemeContext } from "../App";
import { useContext } from "react";
import ReactStars from "react-rating-stars-component";

const ReviewsCard = (props) => {
  const { user } = useContext(ThemeContext);
  return (
      <div>
        <div className="relative rounded w-[270px] lg:w-[325px] h-[225px] shadow-sm border-[gray] overflow-hidden  hover:border-five border">
          <div className="flex mx-2 my-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 30"
            >
              <path
                fill="#3FC3FC"
                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 30"
            >
              <path
                fill="#3FC3FC"
                d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
              ></path>
            </svg>
          </div>
          <div className="p-2">
            <p className="text-sm review-des">
              {props.comment}
            </p>
          </div>
          <div className="p-2 flex absolute inset-x-0 bottom-0">
            <img
              className="rounded-full w-1/4"
              src={props.img}
              alt=""
            />
            <div className="grid grid-cols-2 justify-between items-center">
            <div className="flex flex-col justify-center mx-2">
              <h5 className="font-mono font-bold">{props.name}</h5>
              <span className="text-gray text-xs">{props.profession}</span>
            </div>
            <div>
            <ReactStars
                
                value={props.rating}
                activeColor="#ffd700"
                edit={false}
                
              />
            </div>
            </div>

          </div>
        </div>
      </div>
  );
};

export default ReviewsCard;
