const mongoose = require('mongoose');

const User = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    select: false,
  },

  events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
},
{
  timestamps: true,
});

module.exports = mongoose.model('User', User);
