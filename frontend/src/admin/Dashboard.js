import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Course Status",
    },
  },
};

const labels = ["User", "Courses", "Enroll", "Reviews"];

const Dashboard = () => {
  const [status, setStatus] = useState(null);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/users/getstatus`)
      .then((response) => response.json())
      .then((data) => {
        setStatus(data);
      });
  }, []);
  const data = {
    labels,
    datasets: [
      {
        label: "Data",
        data: [
          status?.users,
          status?.courses,
          status?.enrolls,
          status?.reviews,
        ],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
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
      <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
        <div className="flex flex-row items-center gap-5">
          <Link
            to="/upload"
            className="py-4 px-10 bg-green-500 rounded text-white"
          >
            Add Course
          </Link>
          <Link
            to="/catagories/all"
            className="py-4 px-10 bg-orange-500 rounded text-white"
          >
            Manage Courses
          </Link>
          <Link
            to="/profile"
            className="py-4 px-10 bg-blue-500 rounded text-white"
          >
            Profile
          </Link>
        </div>
        <div>
          <Bar className="" options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
