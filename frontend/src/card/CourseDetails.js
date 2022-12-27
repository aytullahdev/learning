import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { ThemeContext } from "../App";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("body");

const CourseDetails = () => {
  const { courseID } = useParams();
  const [courseData, setCoursesData] = useState(null);
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
  const { user } = useContext(ThemeContext);
  useEffect(() => {
    fetch(`http://localhost:5556/api/users/course/${courseID}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          toast.error("Course isn't found");
          return navigate("/");
        }
        setCoursesData(data);
      });
  }, []);

  return (
    <div className="my-5">
      {user && (
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className="flex flex-col space-y-5">
            <div className="flex flex-col space-y-2">
              <label htmlFor="">User Email</label>
              <input type="text" className=" p-4 rounded-lg" value={user.email} disabled />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="">Course Name</label>
              <input type="text" className=" p-4 rounded-lg" value={courseData.tittle} disabled />
            </div>
            <div>
            <button
                  
                  className="w-full text-[white] text-xl mx-auto block py-2 mb-5 bg-five  hover:bg-[green] rounded"
                >
                  Enrol
                </button>
            </div>
          </div>
        </Modal>
      )}
      {courseData && (
        <div className=" grid lg:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="pt-10 pb-5 text-xl font-semibold">
              {courseData.tittle}
            </h1>
            <p className="pb-10">
              দৈনন্দিন জীবনে Spoken English-এ পারদর্শী ও আত্মবিশ্বাসী হয়ে উঠুন।
              ইংরেজি বলায় দক্ষ হয়ে উঠতে এনরোল করুন “ঘরে বসে Spoken English”
              কোর্সে।
            </p>
            <h1 className="text-xl font-bold py-5">কোর্স ইন্সট্রাক্টর</h1>
            <div className="flex shadow rounded p-5 ">
              <div className="w-1/3">
                <img
                  className="w-20 h-20 rounded-full"
                  src="https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"
                />
              </div>
              <div className="w-2/3 ">
                <p className="hover:text-five  pointer">Munzereen Shahid</p>
                <p>BA, MA (English), University of Dhaka;</p>
                <p>MSc (English), University of Oxford (UK);</p>
                <p>IELTS: 8.5</p>
              </div>
            </div>
          </div>
          <div className=" relative flex flex-row-reverse">
            <div className=" shadow rounded w-2/3  ">
              <div className="">
                <img className="mx-auto " src={courseData.img} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold py-10 px-10">
                  {courseData.price} $
                </h1>
              </div>
              <div className="px-5">
                <button
                  disabled={user ? false : true}
                  onClick={openModal}
                  className="w-full text-[white] text-xl mx-auto block py-2 mb-5 bg-five  hover:bg-[green] rounded"
                >
                  কোর্সটি কিনুন
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
