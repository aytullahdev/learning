import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import axios from "axios";
import SingleEnrollCourse from "./SingleEnrollCourse";
const EnrolCourses = () => {
  const { user } = useContext(ThemeContext);
  const [courses, setCourses] = useState(null);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .get("http://localhost:5556/api/users/getenrollcourse", config)
      .then((res) => {
        if (res.data) {
          setCourses(res.data);
        }
      });
  }, []);
  return (
    <div>
      <h1 className="uppercase text-3xl font-semibold pb-2 text-five">
        enrolled <span className=" text-[black]">courses</span>
      </h1>
      {courses && courses.length && (
        <div className="grid grid-cols-1 gap-5">
          
          {
            /* Single Course */
          }
          {courses.map((e) => {
            
            // const date = e.createdAt.slice(0,10);
            const date = new Date(e.createdAt).toDateString();
            return (
              <SingleEnrollCourse
                
                key={e.course._id}
                tittle={e.course.tittle}
                img={e.course.img}
                createdAt={date}
                id={e.course._id}
                isReviewed={e.isReviewed}
                enrolledid={e._id}
              />
            );
          })}
        </div>
      )}
      {courses && !courses.length && (
        <div className="bg-[#e9e4e4cb] py-10 rounded">
          <h1 className="text-3xl text-center">No Courses Enrolled</h1>
        </div>
      )}
    </div>
  );
};

export default EnrolCourses;
