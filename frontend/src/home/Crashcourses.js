import React from "react";

const Crashcourses = () => {
  return (
    <div className="py-10">
      <h1 className="text-center font-bold text-5xl py-10 ">
        চলে এসেছে নতুন ক্র্যাশ কোর্স
      </h1>
      <div className=" grid gap-5 md:gap-10  md:grid-cols-3 grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto">
        {/* Cards */}
        <div className=" rounded shadow-sm border-[gray] overflow-hidden  hover:border-five border">
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
        <div className=" rounded shadow-sm border-[gray] overflow-hidden  hover:border-five border">
          <img
            src="https://cdn.10minuteschool.com/md/images/k-12-courses/thumbnail/hsc_24_cc_1st_paper.png"
            alt=""
          />
          <div className="p-2">
            <p className="text-lg py-2 font-bold">
            HSC 2024 ক্র্যাশ কোর্স - প্রথম পত্র [বিজ্ঞান বিভাগ]
            </p>
            <p>
              <span className="text-xl font-bold text-five ">৳ 2000</span>
            </p>
          </div>
        </div>
        <div className=" rounded shadow-sm border-[gray] overflow-hidden  hover:border-five border">
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
        

      </div>
    </div>
  );
};

export default Crashcourses;
