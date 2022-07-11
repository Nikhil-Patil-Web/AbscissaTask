const Academy = require('../models/AcademyModel')

exports.getAllAcademies = async (req, res) => {
  try {
    const academies = await Academy.find()
    res.status(200).json({
      status: 'success',
      results: academies.length,
      data: {
        academies,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.createAcademy = async (req, res) => {
  try {
    const newAcademy = await Academy.create(req.body)

    res.status(201).json({
      status: 'success',
      academy: newAcademy,
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}
