const express = require('express')
const router = express.Router();
const courseController = require('../controllers/courseController')

router.route('/').post(courseController.courseCreate)
router.route('/').get(courseController.getAllCourses)

module.exports = router