import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-[black]">
      <div className="text-center pt-5">
        <a href="">
          <FontAwesomeIcon
            className="text-center font-bold text-[blue] text-5xl mx-5 ring ring-[blue] rounded-full bg-[white] socialIcon"
            icon={faFacebook}
          />
        </a>
        <a href="https://github.com/aytullahdev/learning">
          <FontAwesomeIcon
            className="text-center font-bold text-[blue] text-5xl mx-5 ring ring-[blue] rounded-full bg-[white] socialIcon"
            icon={faGithub}
          />
        </a>
      </div>

      <p className="text-sm text-center text-[white] py-5">
        {" "}
        &copy; Learner 2023
      </p>
    </div>
  );
};

export default Footer;
