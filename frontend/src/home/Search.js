import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Search = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    if (!search) {
      toast.error("Enter some valid keywords");
      return;
    }
    navigate(`catagories/search/${search}`);
  };
  return (
    <div>
      <div className="flex justify-center items-center">
        <input
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-2 py-2 rounded text-sm outline-none"
        />
        <div
          onClick={() => handleSearch()}
          className="bg-green-500 py-2  px-2  text-white cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Search;
