import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import CoursesCard from "../card/CoursesCard";

const SingleCatagory = () => {
  let { catagory, search } = useParams();
  const [courses, setCourses] = useState(null);
  const [cat, setCat] = useState(catagory);
  let link = `${process.env.REACT_APP_API_URL}/api/users/catagories/${catagory}`;
  if (catagory === "all") {
    catagory = "Available Courses";
    link = `${process.env.REACT_APP_API_URL}/api/users/getcourses`;
  }
  if (catagory === "search") {
    catagory = "Search result";
    link = `${process.env.REACT_APP_API_URL}/api/users/getcourses?search=${search}`;
  }
  useEffect(() => {
    if (catagory) {
      fetch(link)
        .then((response) => response.json())
        .then((data) => {
          setCourses(data);
        });
      return () => {};
    }
  }, [search, catagory]);
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
