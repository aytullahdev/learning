import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Grid } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/grid";
const ReviewSlider = () => {
  return (
    <>
      <div className=" mx-auto my-10">
        <h1 className="text-5xl font-bold text-center py-8">
          শিক্ষার্থীরা যা বলছে
        </h1>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Grid]}
          spaceBetween={0}
          slidesPerView={3}
          allowTouchMove = {false}
          navigation={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <div className="rounded w-[325px]   shadow-sm border-[gray] overflow-hidden  hover:border-five border">
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
                  অফলাইনে শেখার মত সময় হয়ে উঠছিল না তাই অনলাইন কোর্স কে বেছে
                  নেওয়া । কোর্সটিতে খুব সুন্দর করে হরফ তানভীন মাদ পড়ানো হয়েছে
                  । খুব সহজেই প্রতিদিন প্র্যাকটিস করে খুব দ্রুত শুদ্ধ তেলাওয়াত
                  আয়ত্ত করতে পেরেছি।
                </p>
              </div>
              <div className="p-2 flex">
                <img
                  className="rounded-full w-1/4"
                  src="https://imageio.forbes.com/specials-images/imageserve/5c76b7d331358e35dd2773a9/0x0.jpg?format=jpg&crop=4401,4401,x0,y0,safe&height=416&width=416&fit=bounds"
                  alt=""
                />
                <div className="flex flex-col justify-center mx-2">
                  <h5 className="font-mono font-bold">Mark Zuckerberg</h5>
                  <span className="text-gray">Ceo,Facebook</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded w-[325px] shadow-sm border-[gray] overflow-hidden  hover:border-five border">
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
                  টেন মিনিট স্কুলের অনলাইন ব্যাচে ইংরেজি ক্লাস করার পর ইংরেজি
                  বিষয়ে আমি ৯০+ মার্কস পেয়েছি। এছাড়াও টেন মিনিট স্কুলের লাইভ
                  চ্যাট, পোল এবং লিডারবোর্ড ফিচারটি চমৎকার যা আমাদের প্রতিনিয়ত
                  পড়াশোনার আগ্রহ বাড়াতে সাহায্য করেছে।
                </p>
              </div>
              <div className="p-2 flex">
                <img
                  className="rounded-full w-1/4"
                  src="https://imageio.forbes.com/specials-images/imageserve/62d700cd6094d2c180f269b9/0x0.jpg?format=jpg&crop=959,959,x0,y0,safe&height=416&width=416&fit=bounds"
                  alt=""
                />
                <div className="flex flex-col justify-center mx-2">
                  <h5 className="font-mono font-bold">Elon Musk</h5>
                  <span className="text-gray">Ceo,Tesla</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded w-[325px] shadow-sm border-[gray] overflow-hidden  hover:border-five border">
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
                  আমার একটি অনলাইন পেজ ছিল কিন্তু পেইজটিকে নিয়ে কিভাবে সামনে
                  আগাবে কোন কিছু বুঝতে পারছিলাম না । কোর্সটি করার মাধ্যমে কিভাবে
                  একটি বেসিক পোস্ট দিবো কিভাবে ইউজ করব কিভাবে কন্টাক্ট করবো
                  শিখতে পেরেছি। একটি বেসিক পোস্ট দিবো কিভাবে ইউজ করব কিভাবে
                  কন্টাক্ট করবো শিখতে পেরেছি।
                </p>
              </div>
              <div className="p-2 flex">
                <img
                  className="rounded-full w-1/4"
                  src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-center mx-2">
                  <h5 className="font-mono font-bold">Bill Gates</h5>
                  <span className="text-gray">Ceo,Microsoft</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded w-[325px] shadow-sm border-[gray] overflow-hidden  hover:border-five border">
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
                  অনলাইন ব্যাচের ক্লাসের সবচেয়ে চমৎকার বিষয় হলো ক্লাসে পড়ানোর
                  টেকনিক। প্রত্যেকটি শিক্ষক এত যত্ন করে ক্লাসগুলো করান যে আমার
                  বাচ্চা ক্লাসগুলো খুব এঞ্জয় করে। পড়াশোনা এমন মজারই হওয়া
                  দরকার! এছাড়া, মান্থলি এক্সাম, লেকচার শীট গুলো ও খুবই
                  মানসম্মত।
                </p>
              </div>
              <div className="p-2 flex">
                <img
                  className="rounded-full w-1/4"
                  src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-center mx-2">
                  <h5 className="font-mono font-bold">Tim Cook</h5>
                  <span className="text-gray">Ceo,Apple</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className=" rounded w-[325px] shadow-sm border-[gray] overflow-hidden  hover:border-five border">
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
                  টেন মিনিট স্কুলের অনলাইন ব্যাচে ইংরেজি ক্লাস করার পর ইংরেজি
                  বিষয়ে আমি ৯০+ মার্কস পেয়েছি। এছাড়াও টেন মিনিট স্কুলের লাইভ
                  চ্যাট, পোল এবং লিডারবোর্ড ফিচারটি চমৎকার যা আমাদের প্রতিনিয়ত
                  পড়াশোনার আগ্রহ বাড়াতে সাহায্য করেছে।
                </p>
              </div>
              <div className="p-2 flex">
                <img
                  className="rounded-full w-1/4"
                  src="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
                  alt=""
                />
                <div className="flex flex-col justify-center mx-2">
                  <h5 className="font-mono font-bold">Sundar Pichai</h5>
                  <span className="text-gray">Ceo,Google</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ReviewSlider;
