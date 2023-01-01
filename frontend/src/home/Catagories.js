import React from "react";
import { Link } from "react-router-dom";


const Catagories = () => {
  return (
    <div className="py-10">
      <h1 className="text-center font-bold text-3xl py-10">
        Catagories You Looking For
      </h1>
      <div className="grid grid-cols-1 gap-3 px-5 md:grid-cols-2 md:gap-10">
        <Link to="/catagories/development">
          <div className="flex items-center border-0 rounded-lg p-7 bg-one">
            <div>
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/512/2282/2282188.png"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h1 className="mx-5 font-extrabold tracking-wide text-sm lg:text-3xl">Development</h1>
            </div>
            <div className="items-end">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-500"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </Link>
        <Link to="/catagories/design">
          <div className="flex items-center border-0 rounded-lg p-7 bg-two">
            <div>
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/512/922/922699.png"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h1 className="mx-5 font-extrabold tracking-wide text-sm lg:text-3xl">Design</h1>
            </div>
            <div className="items-end">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-500"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </Link>
        <Link to="/catagories/programming">
          <div className="flex items-center border-0 rounded-lg p-7 bg-three">
            <div>
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/512/2721/2721620.png"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h1 className="mx-5 font-extrabold tracking-wide text-sm lg:text-3xl">Programming</h1>
            </div>
            <div className="items-end">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-500"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </Link>
        <Link to="/catagories/it_software">
          <div className="flex items-center border-0 rounded-lg p-7 bg-four">
            <div>
              <img
                className="w-20"
                src="https://cdn-icons-png.flaticon.com/512/3950/3950815.png"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h1 className="mx-5 font-extrabold tracking-wide text-sm lg:text-3xl">IT & Software</h1>
            </div>
            <div className="items-end">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="text-gray-500"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Catagories;
