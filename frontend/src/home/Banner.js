import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";

const banner = () => {
  return (
    <div className="py-10 bg-[black] rounded-3xl">
      <div>
        <h1 className="text-center font-bold text-3xl pt-2 text-[white]">
          Popular Courses
        </h1>
        <h1 className="text-center font-light text-[white] ">
          Find Your Best Course
        </h1>
        <div className="banner-slide">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Grid]}
            spaceBetween={20}
            slidesPerView={3}
            allowTouchMove={false}
            navigation={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="flex flex-col rounded-xl">
                <img
                  src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg"
                  alt=""
                />
                <div className="px-2">
                  <p className="text-lg py-2 font-bold text-[white] title-des">The Complete 2023 Web Development Bootcamp</p>
                  <p>
                    <span className="text-xl font-bold text-[white] ">
                      1000৳
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src="https://img-b.udemycdn.com/course/480x270/4087810_2aaf.jpg"
                  alt=""
                />
                <div className="px-2">
                  <p className="text-lg py-2 font-bold text-[white]">Competitive Programming Essentials, Master Algorithms</p>
                  <p>
                    <span className="text-xl font-bold text-[white] ">
                      1000৳
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg"
                  alt=""
                />
                <div className="px-2">
                  <p className="text-lg py-2 font-bold text-[white]">Title</p>
                  <p>
                    <span className="text-xl font-bold text-[white] ">
                      1000৳
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img
                  src="https://img-c.udemycdn.com/course/480x270/1565838_e54e_16.jpg"
                  alt=""
                />
                <div className="px-2">
                  <p className="text-lg py-2 font-bold text-[white]">Title</p>
                  <p>
                    <span className="text-xl font-bold text-[white] ">
                      1000৳
                    </span>
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default banner;
