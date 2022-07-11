const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema

const userSchema = mongoose.Schema(
  {
    first_name: {
      type: String,
      required: [true, 'Please enter your first name'],
      max: [40, 'First Name Can have No more than 40 Characters'],
      min: [3, 'First Name needs to have Minimum 3 Characters'],
      trim: true,
      text: true,
    },

    last_name: {
      type: String,
      required: [true, 'Please enter your last name'],
      max: [40, 'Last Name Can have No more than 40 Characters'],
      min: [3, 'Last Name needs to have Minimum 3 Characters'],
      trim: true,
      text: true,
    },

    address: {
      type: String,
      required: [true, 'Please enter your house address'],
    },

    city: {
      type: String,
      required: [true, 'Please enter your current city'],
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
    academies_enrolled: {
      type: Array,
      default: [],
      academy: {
        type: ObjectId,
        ref: 'Academy',
      },
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('User', userSchema)
