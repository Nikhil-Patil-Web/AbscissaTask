const mongoose = require('mongoose')

const { ObjectId } = mongoose.Schema

const academySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      max: [60, 'The name of the academy cannot have more than 60 characters'],
      min: [6, 'The name of the academy needs to have more than 6 characters'],
    },

    address: {
      type: String,
      required: [true, 'Please enter your academy address'],
    },

    city: {
      type: String,
      required: [true, 'Please enter your current city'],
    },

    description: {
      type: String,
      required: true,
      required: [true, 'Please enter a short decription of your academy'],
      max: [500, 'The description canat the max have 500 characters'],
    },

    speciality: {
      type: String,
      required: [true, 'Please enter the speciality of your sporting academy'],
      enum: [
        'Cricket',
        'Cycling',
        'Football',
        'Yoga',
        'Badminton',
        'Athletics',
        'Gym',
        'Basketball',
      ],
    },

    establishedDate: {
      type: Number,
      trim: true,
    },
    establishedMonth: {
      type: Number,
      trim: true,
    },
    establishedYear: {
      type: Number,
      trim: true,
    },

    users: {
      type: Array,
      default: [],
      user: {
        type: ObjectId,
        ref: 'User',
      },
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Academy', academySchema)
