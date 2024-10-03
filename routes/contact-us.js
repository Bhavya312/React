const express = require('express');
const { register } = require('../controllers/auth');
const multer = require('multer');
const validateData = require('../middleware/validation');
const userLoginSchema = require('../schema/userSchema');
const { createContactUs } = require('../controllers/contact-us');
const router = express.Router();

router.route('/').post(createContactUs);

module.exports = router;
