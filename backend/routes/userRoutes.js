const express = require('express');
const router = express.Router();
const { createUser , loginUser , getMe} = require('../controler/userControler');
const protect = require('../middleware/authMiddleware')
router.post('/', createUser);
router.post('/login', loginUser);
router.get('/me', protect ,getMe);

module.exports = router;