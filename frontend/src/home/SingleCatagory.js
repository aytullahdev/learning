import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CoursesCard from "../card/CoursesCard";


const SingleCatagory = () => {
  let { catagory } = useParams();
  const [courses, setCourses] = useState(null);
  const [cat, setCat] =  useState(catagory)
  let link = `http://localhost:5556/api/users/catagories/${catagory}`;
  if(catagory=='all'){
    catagory = "Available Courses"
    link = `http://localhost:5556/api/users/getcourses`
  }
  useEffect(() => {
    if(catagory){
    fetch(link)
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      });
      return ()=>{

      }
    }
  }, []);
  return (
    <div className="py-5">
      <h1 className="text-center font-bold text-5xl py-8 uppercase">
        {catagory}
      </h1>
      <div className=" grid gap-5 md:gap-10  md:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:w-3/4 mx-auto">
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

export default SingleCatagory;
