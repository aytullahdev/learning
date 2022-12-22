const express = require('express');
const router = express.Router();
const { createUser , loginUser , getMe, uploadContent} = require('../controler/userControler');
const protect = require('../middleware/authMiddleware')
const multer = require('multer')
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
     
      cb(null, Date.now() +"."+ file.mimetype.split('/').pop()) //
    }
  })
  
var upload = multer({ storage: storage });
router.post('/', createUser);
router.post('/login', loginUser);
router.get('/me', protect ,getMe);
router.post('/upload',upload.single('uploadContent'),uploadContent)

module.exports = router;