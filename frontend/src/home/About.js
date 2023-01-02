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
              <a href="https://www.facebook.com/profile.php?id=100045252939849">
                <FontAwesomeIcon
                  className="font-bold text-[blue] text-5xl mx-1 ring ring-[blue] rounded-full bg-[white] socialIcon"
                  icon={faFacebook}
                  href="google.com"
                />
              </a>
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
              <a href="https://www.facebook.com/arthi.barua.54/">
                <FontAwesomeIcon
                  className="font-bold text-[blue] text-5xl mx-1 ring ring-[blue] rounded-full bg-[white] socialIcon"
                  icon={faFacebook}
                />
              </a>
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
              src="https://scontent.fcgp27-1.fna.fbcdn.net/v/t39.30808-6/271888220_3018028241792319_5839650459381959613_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHDk3H2Xx3gov9wTe42LrDDMQ9JTzwR53UxD0lPPBHndYmyv9BEt6Tp6OR1N6_VG--UKjgNWC63QC3_r7QL0lPU&_nc_ohc=xjVSh_tYX8cAX_vtewO&tn=NTjOQyB_FZ_9WnSz&_nc_ht=scontent.fcgp27-1.fna&oh=00_AfCFD7jqn58BWdSruKMtg6gUH4wy9sXjFE4dVo2IaKWXJg&oe=63B7928B"
              alt=""
            />
            <div className="absolute inset-x-[110px] bottom-[-17px]">
              <a href="https://www.facebook.com/annoy.nayon">
                <FontAwesomeIcon
                  className="font-bold text-[blue] text-5xl mx-1 ring ring-[blue] rounded-full bg-[white] socialIcon"
                  icon={faFacebook}
                />
              </a>
              <a href="">
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
