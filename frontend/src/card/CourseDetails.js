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
        <div className=" grid grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="row-span-2">
            <h1 className="pt-10 pb-5 text-2xl font-bold">
              {courseData.tittle}
            </h1>
            <p className="pb-10">
              {courseData.description}
            </p>
            <div className="border-2 border-[black] py-5">
              <h1 className="text-2xl font-bold py-2 px-5">Why You Enroll This Course</h1>
              <ul className="list-disc p-5">
                <li>To gain new skills or knowledge: This course can help you learn new skills or knowledge in a specific area, which can be beneficial for personal or professional development.</li>
                <li>To advance your career: Taking this course can help you advance your career by increasing your expertise in a certain field or by helping you qualify for new job opportunities.</li>
                <li>To meet new people: Courses often bring together a diverse group of people who have a common interest. This can be a great opportunity to meet new people and expand your network.</li>
              </ul>
              <h5 className="p-2">Overall, there are many reasons to consider taking this course, and the specific reasons will depend on your individual goals and interests.</h5>
            </div>
            <h1 className="text-2xl font-bold py-5">Course Instructor</h1>
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
          <div className="flex flex-row-reverse sticky top-0">
            <div className=" shadow rounded w-2/3  ">
              <div className="">
                <img className="mx-auto " src={courseData.img} alt="" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-center text-five py-1 px-5">
                  {courseData.price}৳
                </h1>
                <h1 className="text-xl font-semibold py-1 px-5 uppercase">
                  =&gt; {courseData.duration}
                </h1>
                <h1 className="text-xl font-semibold pb-5 px-5 uppercase ">
                  =&gt; {courseData.catagory}
                </h1>
              </div>
              <div className="px-5">
                <button
                  disabled={user ? false : true}
                  onClick={openModal}
                  className="w-full text-[white] text-xl mx-auto block py-2 mb-5 bg-five  hover:bg-[green] rounded"
                >
                  Enrollment
                </button>
              </div>
            </div>
          </div>
          <div class="row-span-2 col-span-2"></div>
        </div>
      )}
    </div>
  );
};

export default CourseDetails;
