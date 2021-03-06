const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'First Name is required'],
      trim: true,
      text: true,
    },
    last_name: {
      type: String,
      required: [true, 'Last Name is required'],
      trim: true,
      text: true,
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      trim: true,
      text: true,
      unique: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    picture: {
      type: String,
      default:
        'https://res.cloudinary.com/dmhcnhtng/image/upload/v1643044376/avatars/default_pic_jeaybr.png',
    },
    cover: {
      type: String,
      trim: true,
    },
    gender: {
      type: String,
      required: [true, 'Gender is required'],
    },
    bYear: {
      type: Number,
      required: [true, ' Your birth year is required'],
      trim: true,
    },
    bMonth: {
      type: Number,
      required: [true, ' Your birth month is required'],
      trim: true,
    },
    bDay: {
      type: Number,
      required: [true, ' Your birth day is required'],
      trim: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    city: {
      type: String,
      required: [true, 'Your City is required'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
