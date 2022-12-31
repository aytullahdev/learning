import React, { useEffect, useState } from "react";
import CoursesCard from "../card/CoursesCard";

const Crashcourses = (props) => {
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5556/api/users/getcourses")
      .then((response) => response.json())
      .then((data) => {
        if (props.lim) {
          setCourses(data.slice(0, props.lim));
        } else {
          setCourses(data);
        }
      });
  }, []);
  return (
    <div className="py-10">
      <h1 className="text-center font-bold text-xl lg:text-5xl py-10 ">
        Available Crash-Courses for You
      </h1>
      <div className=" grid gap-5 grid-cols-1 md:gap-10  md:grid-cols-2 lg:grid-cols-3 lg:w-3/4 mx-auto">
        {/* Cards */}
        {courses &&
          courses.map((e) => {
            return (
              <CoursesCard
                tittle={e.tittle}
                id={e._id}
                price={e.price}
                img={e.img}
                key={e._id}
                catagory={e.catagory}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Crashcourses;
