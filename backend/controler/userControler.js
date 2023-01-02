const asyncHandler = require("express-async-handler");
const User = require("../modal/userModal");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Review = require("../modal/reviewModal");
const Course = require("../modal/courseModal");
const Enrol = require("../modal/enrolModal");
const { default: mongoose } = require("mongoose");
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please all the valid Data!");
  }
  // Check user
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }
  // Hash password

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  // Create User

  const user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  if (user) {
    res.status(201);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      img: user.img,
      profession: user.profession,
      token: getToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not created please try again later!");
  }
});
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(500);
    throw new Error("Provide all require field!");
  }

  const user = await User.findOne({ email });
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200);
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      img: user.img,
      profession: user.profession,
      token: getToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Credential doesn't match!");
  }
});
const addReview = asyncHandler(async (req, res) => {
  const { review, courseid, rating, enrolledid } = req.body;
  if (!review || !courseid) {
    res.status(400);
    throw new Error("Please provide all data");
  }
  //  //.log(req.user)
  const findReview = await Review.findOne({
    user: req.user._id,
    course: courseid,
  });

  if (findReview) {
    res.status(400);
    throw new Error("Review Alrady added");
  }
  const updateEnroll = await Enrol.findOneAndUpdate(
    { _id: enrolledid },
    { isReviewed: true }
  );
  if (!updateEnroll) {
    res.status(400);
    throw new Error("Course status not updated!");
  }
  const newReview = await Review.create({
    text: review,
    user: req.user._id,
    course: courseid,
    rating,
  });
  res.json(newReview);
});
const getReview = asyncHandler(async (req, res) => {
  const { courseid } = req.body;
  ////.log(courseid)
  const findReview = await Review.findOne({
    user: req.user._id,
    course: courseid,
  });
  if (!findReview) {
    res.status(400);
    throw new Error("Something Wrong plz try again Later!");
  }
  res.json(findReview);
});
const updateReview = asyncHandler(async (req, res) => {
  const { review, courseid, rating, enrolledid } = req.body;
  if (!review || !courseid) {
    res.status(400);
    throw new Error("Please provide all data");
  }
  //  //.log(req.user)
  const findReview = await Review.findOneAndUpdate(
    { user: req.user._id, course: courseid },
    { text: review, rating }
  );
  res.json(findReview);
});
const uploadContent = asyncHandler(async (req, res) => {
  ////.log(req.body);
  const resData = await Course.create(req.body);
  if (!resData) {
    res.status(400);
    throw new Error("Failed to insert course Data");
  }
  res.json(resData);
});

const addCourse = asyncHandler(async (req, res) => {
  const { tittle, price, img } = req.body;
  if (!tittle || !price || !img) {
    res.status(400);
    throw new Error("Please provide all data");
  }

  const newCourse = await Course.create({
    tittle,
    price,
    img,
  });
  res.json(newCourse);
});
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});
  res.json(courses);
});
const getCourse = asyncHandler(async (req, res) => {
  const id = req.params.id;
  if (!mongoose.isValidObjectId(id)) {
    res.status(400);
    throw new Error("Object is isn't valid");
  }
  //console.log(id);
  if (!id) {
    res.status(400);
    throw new Error("No course found!");
  }
  const course = await Course.findById(id).select([
    "-createdAt",
    "-updatedAt",
    "-__v",
  ]);
  res.json(course);
});
const getReviews = asyncHandler(async (req, res) => {
  const reviews = await Review.find({}).populate(
    "user",
    "-_id -email -password -isAdmin"
  );
  res.json(reviews);
});
const getMe = (req, res) => {
  res.json(req?.user);
};
// Course enroll
const enrolCourse = asyncHandler(async (req, res) => {
  const { userID, courseID } = req.body;
  if (!userID || !courseID) {
    res.status(400);
    throw new Error("Please provide all data!");
  }
  const findData = await Enrol.findOne({ user: userID, course: courseID });
  const courseData = await Course.findOne({ _id: courseID });
  const total_enroll = courseData.total_enroll + 1;
  if (findData) {
    res.status(400);
    throw new Error("Already enrolled!");
  }
  const result = await Enrol.create({ user: userID, course: courseID });
  const updateCourseData = await Course.findByIdAndUpdate(
    { _id: courseID },
    { total_enroll }
  );
  res.json(result);
});
const getEnrolCourse = asyncHandler(async (req, res) => {
  res.json(await Enrol.find({ user: req.user._id }).populate("course"));
});
const getCatagory = asyncHandler(async (req, res) => {
  const key = req.params.id;
  const resData = await Course.find({ catagory: key });
  res.json(resData);
});
// Genarate token

const getToken = (id) => {
  return jwt.sign({ id }, process.env.DBPWD);
};

const updateCourse = asyncHandler(async (req, res) => {
  ////.log(req.body)
  const {
    tittle,
    price,
    img,
    description,
    duration,
    catagory,
    instructor_img,
    instructor_name,
    instructor_profession,
    instructor_qual,
  } = req.body;
  const resData = await Course.findOneAndUpdate(
    { _id: req.body._id },
    {
      tittle,
      price,
      img,
      description,
      duration,
      catagory,
      instructor_img,
      instructor_name,
      instructor_profession,
      instructor_qual,
    }
  );
  res.json(resData);
});
const deleteReview = asyncHandler(async (req, res) => {
  const { courseID } = req.body;
  const result = await Review.findOneAndDelete({
    course: courseID,
    user: req.user._id,
  });
  if (!result) {
    res.status(400);
    throw new Error("Can't Deleted");
  }
  const enrollResult = await Enrol.findOneAndUpdate(
    { course: courseID, user: req.user._id },
    { isReviewed: false }
  );
  if (!enrollResult) {
    res.status(400);
    throw new Error("Can't Deleted");
  }
  res.json(enrollResult);
});
const userUpdate = asyncHandler(async (req, res) => {
  const result = await User.findOneAndUpdate(
    { _id: req.user._id },
    req.body.userdata
  );
  if (!result) {
    res.status(400);
    throw new Error("User isn't updated!");
  }
  // console.log(req.body.userdata);
  res.json(result);
});
const getStatus = asyncHandler(async (req, res) => {
  const users = await (await User.find({})).length;
  const reviews = await (await Review.find({})).length;
  const enrolls = await (await Enrol.find({})).length;
  const courses = await (await Course.find({})).length;
  res.json({ users, reviews, enrolls, courses });
});
module.exports = {
  createUser,
  loginUser,
  getMe,
  uploadContent,
  addReview,
  addCourse,
  getCourses,
  getReviews,
  getCourse,
  enrolCourse,
  getEnrolCourse,
  getReview,
  updateReview,
  getCatagory,
  updateCourse,
  userUpdate,
  deleteReview,
  getStatus,
};
