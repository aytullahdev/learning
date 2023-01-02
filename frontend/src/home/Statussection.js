import React, { useEffect, useState } from "react";

const Statussection = () => {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5556/api/users/getstatus")
      .then((response) => response.json())
      .then((data) => {
        setStatus(data);
      });
  }, []);
  console.log(status);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 ">
      {/* Card 2x2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
      <div>
        <img
          src="https://cdn.10minuteschool.com/lg/images/1667905292144.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Statussection;
