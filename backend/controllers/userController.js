const User = require('../models/UserModel')
const bcrypt = require('bcrypt')
const { generateToken } = require('../helpers/tokens')

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err,
    })
  }
}

exports.register = async (req, res) => {
  try {
    console.log(generateToken)
    const {
      first_name,
      last_name,
      username,
      address,
      city,
      email,
      password,
      picture,
      bYear,
      bMonth,
      bDay,
    } = req.body

    const checkUsername = await User.findOne({ username })
    if (checkUsername) {
      return res.status(400).json({
        message: 'This username already exisits, try another one',
      })
    }

    const check = await User.findOne({ email })
    if (check) {
      return res.status(400).json({
        message: 'This email address already exists,try with another address',
      })
    }
    const cryptedPassword = await bcrypt.hash(password, 12)
    console.log(cryptedPassword)

    const newUser = await new User({
      first_name,
      last_name,
      username,
      address,
      city,
      email,
      password: cryptedPassword,
      picture,
      bYear,
      bMonth,
      bDay,
    }).save()

    const token = generateToken({ id: newUser._id.toString() }, '7d')
    res.status(201).json({
      id: newUser._id,
      username: newUser.username,
      picture: newUser.picture,
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      address: newUser.address,
      city: newUser.city,
      bYear: newUser.bYear,
      bDay: newUser.bDay,
      bMonth: newUser.bMonth,
      token: token,
      message:
        'Your user registration is successful, please activate your account',
    })
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      error: err.message,
    })
  }
}

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: 'User not found with this email' })
    }

    const check = await bcrypt.compare(password, user.password)

    if (!check) {
      return res.status(400).json({
        message: 'Invalid Credential. Please Try Again',
      })
    }

    const token = generateToken({ id: user._id.toString() }, '7d')
    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}
