import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/users/getstatus`)
      .then((response) => response.json())
      .then((data) => {
        setStatus(data);
      });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-1 my-5 lg:gap-10 ">
        {/* Card 2x2 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="bg-one text-black  rounded flex justify-center items-center flex-col p-5 ">
            <h1 className="text-3xl font-semibold">{status?.enrolls}</h1>
            <span className="text-base">Total Enroll</span>
          </div>
          <div className="bg-two text-black  rounded flex justify-center items-center flex-col p-5 ">
            <h1 className="text-3xl font-semibold">{status?.users}</h1>
            <span className="text-base">Total User</span>
          </div>
          <div className="bg-three text-black  rounded flex justify-center items-center flex-col p-5 ">
            <h1 className="text-3xl font-semibold">{status?.reviews}</h1>
            <span className="text-base">Total Review</span>
          </div>

          <div className="bg-four text-black rounded flex justify-center items-center flex-col p-5  ">
            <h1 className="text-3xl font-semibold">{status?.courses}</h1>
            <span className="text-base">Total Course</span>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div>
          <Link
            to="/upload"
            className="py-2 px-10 bg-green-500 rounded text-white"
          >
            Upload Course
          </Link>
          <Link
            to="/catagories/all"
            className="py-2 px-10 bg-green-500 rounded text-white"
          >
            Manage Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
