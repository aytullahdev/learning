import React from 'react';

const UpcomeCourses = () => {
    return (
        <div className="py-10">
      <h1 className="text-center font-bold text-xl lg:text-5xl py-10 ">
        Upcoming Courses
      </h1>
      <div className=" grid gap-5 grid-cols-1 md:gap-10  md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto">
      <div className="bg-[white]  relative h-[250px] lg:h-[290px] rounded shadow-sm border-[gray] overflow-hidden  hover:border-five border">
        <img src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg" alt="" />
        <div className="px-2">
          <p className="text-lg py-2 font-bold title-des">The Complete Python Bootcamp From Zero to Hero in Python</p>
          <p className="flex justify-between items-center">
            <span className="text-xl font-bold text-five ">1000৳</span>
            <span className="text-md font-bold uppercase">
              Programming
            </span>
          </p>
        </div>
      </div>
      <div className="bg-[white]  relative h-[250px] lg:h-[290px] rounded shadow-sm border-[gray] overflow-hidden  hover:border-five border">
        <img src="https://img-c.udemycdn.com/course/240x135/343008_1ad0_4.jpg" alt="" />
        <div className="px-2">
          <p className="text-lg py-2 font-bold title-des">Linux Administration & Linux Command Line For Beginners</p>
          <p className="flex justify-between items-center">
            <span className="text-xl font-bold text-five ">1000৳</span>
            <span className="text-md font-bold uppercase">
              IT & Software
            </span>
          </p>
        </div>
      </div><div className="bg-[white]  relative h-[250px] lg:h-[290px] rounded shadow-sm border-[gray] overflow-hidden  hover:border-five border">
        <img src="https://img-c.udemycdn.com/course/240x135/903744_8eb2.jpg" alt="" />
        <div className="px-2">
          <p className="text-lg py-2 font-bold title-des">OpenAI Python API Bootcamp: Learn to use AI, GPT, and more!</p>
          <p className="flex justify-between items-center">
            <span className="text-xl font-bold text-five ">1000৳</span>
            <span className="text-md font-bold uppercase">
              IT & Software
            </span>
          </p>
        </div>
      </div>
      </div>
    </div>
    );
};

export default UpcomeCourses;