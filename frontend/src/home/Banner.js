import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
import CoursesCard from "../card/CoursesCard";

const Banner = (props) => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5556/api/users/getcourses")
      .then((response) => response.json())
      .then((data) => {
        if (props.lim) {
          setCourses(
            data
              .sort((a, b) => {
                return b.total_enroll - a.total_enroll;
              })
              .slice(0, props.lim)
          );
        } else {
          setCourses(
            data.sort((a, b) => {
              return b.total_enroll - a.total_enroll;
            })
          );
        }
      });
  }, []);
  return (
    <div className="py-10 bg-[black] rounded-3xl">
      <div>
        <h1 className="text-center font-bold text-3xl pt-2 text-[white]">
          Popular Courses For You
        </h1>
        <h1 className="text-center font-light text-[white] ">
          Find Your Best Course
        </h1>
        <div className="banner-slide px-2 lg:px-10">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Grid]}
            spaceBetween={20}
            slidesPerView={1}
            allowTouchMove={false}
            navigation={{ clickable: true }}
            breakpoints={{
              // when window width is >= 640px
              300: {

                slidesPerView: 1,
              },
              // when window width is >= 768px
              768: {
                
                slidesPerView: 3,
              },
            }}
          >
            {courses &&
              courses.map((e) => {
                return (
                  <SwiperSlide>
                    <CoursesCard
                      tittle={e.tittle}
                      id={e._id}
                      price={e.price}
                      img={e.img}
                      key={e._id}
                      catagory={e.catagory}
                    />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
