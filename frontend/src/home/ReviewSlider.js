import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const ReviewSlider = () => {
  return (
    <>
      <h1 className="text-5xl font-bold text-center py-10">শিক্ষার্থীরা যা বলছে</h1>
      <div className=" mx-auto my-10">
        <Swiper
        // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={10}
      slidesPerView={3}
      

      navigation={{clickable: true}}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide
          
          >
            <div className=" rounded w-[300px]   shadow-sm border-[gray] overflow-hidden  hover:border-five border">
              <img
                src="https://cdn.10minuteschool.com/md/images/thumbnails/HSC_2023_Short_Syllabus_Crash_Course_Course_Thumbnail_1.91x1.jpg"
                alt=""
              />
              <div className="p-2">
                <p className="text-lg py-2 font-bold">
                  HSC 2023 শর্ট সিলেবাস ক্র্যাশ কোর্স [বিজ্ঞান বিভাগ]
                </p>
                <p>
                  <span className="text-xl font-bold text-five ">৳ 2000</span>
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" rounded w-[300px] shadow-sm border-[gray] overflow-hidden  hover:border-five border">
          <img
            src="https://cdn.10minuteschool.com/md/images/k-12-courses/thumbnail/ssc_smp_23.jpeg"
            alt=""
          />
          <div className="p-2">
            <p className="text-lg py-2 font-bold">
              SSC 2023 শেষ মুহূর্তের প্রস্তুতি কোর্স [বিজ্ঞান বিভাগ]
            </p>
            <p>
              <span className="text-xl font-bold text-five ">৳ 2000</span>
            </p>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" rounded w-[300px] shadow-sm border-[gray] overflow-hidden  hover:border-five border">
          <img
            src="https://cdn.10minuteschool.com/md/images/thumbnails/HSC_2023_Short_Syllabus_Crash_Course_Course_Thumbnail_1.91x1.jpg"
            alt=""
          />
          <div className="p-2">
            <p className="text-lg py-2 font-bold">
            HSC 2023 শর্ট সিলেবাস ক্র্যাশ কোর্স [বিজ্ঞান বিভাগ]
            </p>
            <p>
              <span className="text-xl font-bold text-five ">৳ 2000</span>
            </p>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" rounded w-[300px] shadow-sm border-[gray] overflow-hidden  hover:border-five border">
          <img
            src="https://cdn.10minuteschool.com/md/images/k-12-courses/thumbnail/ssc_smp_23.jpeg"
            alt=""
          />
          <div className="p-2">
            <p className="text-lg py-2 font-bold">
              SSC 2023 শেষ মুহূর্তের প্রস্তুতি কোর্স [বিজ্ঞান বিভাগ]
            </p>
            <p>
              <span className="text-xl font-bold text-five ">৳ 2000</span>
            </p>
          </div>
        </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className=" rounded w-[300px] shadow-sm border-[gray] overflow-hidden  hover:border-five border">
          <img
            src="https://cdn.10minuteschool.com/md/images/thumbnails/HSC_2023_Short_Syllabus_Crash_Course_Course_Thumbnail_1.91x1.jpg"
            alt=""
          />
          <div className="p-2">
            <p className="text-lg py-2 font-bold">
            HSC 2023 শর্ট সিলেবাস ক্র্যাশ কোর্স [বিজ্ঞান বিভাগ]
            </p>
            <p>
              <span className="text-xl font-bold text-five ">৳ 2000</span>
            </p>
          </div>
        </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ReviewSlider;
