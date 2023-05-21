import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  return (
    <div className="mx-10">
      <div>
        <h1 className="text-center font-bold text-3xl">Our Team</h1>
        <div className="grid grid-cols-3 gap-10 my-10">
          <div className="relative">
            <img
              className="drop-shadow-md w-full rounded-full"
              src="https://avatars.githubusercontent.com/u/58880826?v=4"
              alt=""
            />

            <div className="absolute inset-x-[110px] bottom-[-17px]">
              <a href="https://github.com/aytullahdev">
                <FontAwesomeIcon
                  className="font-bold text-[black] text-5xl mx-1 ring ring-[black] rounded-full bg-[white] socialIcon"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              className="drop-shadow-md w-full rounded-full"
              src="https://avatars.githubusercontent.com/u/90525298?v=4"
              alt=""
            />

            <div className="absolute inset-x-[110px] bottom-[-17px]">
              <a href="https://github.com/ArthiDa">
                <FontAwesomeIcon
                  className="font-bold text-[black] text-5xl mx-1 ring ring-[black] rounded-full bg-[white] socialIcon"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
          <div className="relative">
            <img
              className="drop-shadow-md w-full rounded-full"
              src="https://avatars.githubusercontent.com/u/121741081?v=4"
              alt=""
            />

            <div className="absolute inset-x-[110px] bottom-[-17px]">
              <a href="https://github.com/Syed-Mohiuzzaman24">
                <FontAwesomeIcon
                  className="font-bold text-[black] text-5xl mx-1 ring ring-[black] rounded-full bg-[white] socialIcon"
                  icon={faGithub}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
