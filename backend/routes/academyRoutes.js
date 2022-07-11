const express = require('express')

const router = express.Router()

const academyController = require('../controllers/academyController')

router
  .route('/')
  .get(academyController.getAllAcademies)
  .post(academyController.createAcademy)

module.exports = router
