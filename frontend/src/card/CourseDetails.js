import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { ThemeContext } from "../App";
import axios from "axios";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width:"50%"
  },
};
Modal.setAppElement("body");

const CourseDetails = () => {
  const { user } = useContext(ThemeContext);
  const { courseID } = useParams();
  const [courseData, setCoursesData] = useState(null);
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const enrollCourse = (userID, courseID) => {
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    toast.promise(axios
      .post(
        "http://localhost:5556/api/users/enroll",
        { userID, courseID },
        config
      )
      .then((res) => {
        if (res.data && res.data?._id) {
          
          closeModal()
        } else if (res.data && res.data?.message) {
          closeModal()
        } 
      }),{
        pending: "Enrolling Courses",
        success: "Course Enroll Sucessfully",
      })
  };
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

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
      {user && courseData && (
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
              <input
                type="text"
                className=" p-4 rounded-lg"
                value={user.email}
                disabled
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label htmlFor="">Course Name</label>
              <input
                type="text"
                className=" p-4 rounded-lg"
                value={courseData.tittle}
                disabled
              />
            </div>
            <div>
              <button
                onClick={() => enrollCourse(user._id, courseData._id)}
                className="w-full text-[white] text-xl mx-auto block py-2 mb-5 bg-five  hover:bg-[green] rounded"
              >
                Enrollment
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
              {courseData.description}
            </p>
            <h1 className="text-xl font-bold py-5">Course Instructor</h1>
            <div className="flex shadow rounded p-5 ">
              <div className="w-1/3">
                <img
                  className="w-20 h-20 rounded-full"
                  src={courseData.instructor_img}
                />
              </div>
              <div className="w-2/3 ">
                <p className="hover:text-five  pointer">{courseData.instructor_name}</p>
                <p>{courseData.instructor_profession}</p>
                <p>{courseData.instructor_qual}</p>
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
                  Enroll
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
