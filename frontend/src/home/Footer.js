import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[black]">
      <Link to="/">
        <div className="flex justify-center py-2">
          <p className="text-4xl text-center lg:text-left font-bold text-white">
            Lear<span className="text-five">ner</span>
          </p>
        </div>
      </Link>
      <div className="text-center pt-5">
        <a href="">
          <FontAwesomeIcon
            className="text-center font-bold text-[blue] text-5xl mx-5 ring ring-[blue] rounded-full bg-[white] socialIcon"
            icon={faFacebook}
          />
        </a>
        <a href="https://github.com/ArthiDa/Learner_eLearning_Client">
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