import React from "react";

const Statussection = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 ">
      {/* Card 2x2 */}
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-10">
        <div className="bg-one text-black  rounded flex justify-center items-center flex-col p-5 ">
          <h1 className="text-3xl font-semibold">1 কোটি +</h1>
          <span className="text-base">মোট শিক্ষার্থী</span>
        </div>
        <div className="bg-two text-black  rounded flex justify-center items-center flex-col p-5 ">
          <h1 className="text-3xl font-semibold">47 লক্ষ +</h1>
          <span className="text-base">অ্যাপ ব্যবহারকারী</span>
        </div>
        <div className="bg-three text-black  rounded flex justify-center items-center flex-col p-5 ">
          <h1 className="text-3xl font-semibold"> 3,000+</h1>
          <span className="text-base">স্টাডি ম্যাটেরিয়াল</span>
        </div>
        <div className="bg-four text-black rounded flex justify-center items-center flex-col p-5  ">
          <h1 className="text-3xl font-semibold">24,000+</h1>
          <span className="text-base">লার্নিং কন্টেন্ট</span>
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
