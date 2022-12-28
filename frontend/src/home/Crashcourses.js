import React, { useEffect, useState } from "react";
import CoursesCard from "../card/CoursesCard";

const Crashcourses = () => {
  const [courses,setCourses] = useState(null)
  useEffect(()=>{
    fetch('http://localhost:5556/api/users/getcourses')
  .then((response) => response.json())
  .then((data) => {setCourses(data)});

  },[])
  return (
    <div className="py-10">
      <h1 className="text-center font-bold text-5xl py-10 ">
        চলে এসেছে নতুন ক্র্যাশ কোর্স
      </h1>
      <div className=" grid gap-5 md:gap-10  md:grid-cols-3 grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto">
        {/* Cards */}
        {courses && courses.map(e=>{
        return <CoursesCard tittle={e.tittle} id={e._id} price={e.price} img={e.img} key={e._id}/>
      })}
      </div>
    </div>
  );
};

export default Crashcourses;
