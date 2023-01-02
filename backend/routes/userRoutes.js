const express = require('express');
const router = express.Router();
const { createUser , loginUser ,getStatus, getMe, uploadContent, addReview, addCourse, getCourses,getCourse, getReviews, enrolCourse, getEnrolCourse, getReview, updateReview, getCatagory, updateCourse, userUpdate,deleteReview} = require('../controler/userControler');
const protect = require('../middleware/authMiddleware')

  

router.post('/', createUser);
router.post('/login', loginUser);
router.get('/me', protect ,getMe);
router.post('/upload',protect,uploadContent)
router.post('/addreview',protect,addReview)
router.post('/addcourse',protect,addCourse)
router.get('/getcourses',getCourses)
router.get('/course/:id',getCourse)
router.get('/catagories/:id',getCatagory)
router.get('/getreviews',getReviews)
router.post('/enroll',protect,enrolCourse);
router.get('/getenrollcourse',protect,getEnrolCourse);
router.post('/getreview',protect,getReview)
router.post('/updatereview',protect,updateReview)
router.post('/updatecourse',protect,updateCourse);
router.post('/userupdate',protect,userUpdate);
router.post('/reviewdelete',protect,deleteReview)
router.get('/getstatus',getStatus)
module.exports = router;