const mongoose = require('mongoose');

const Event = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },

  desc: {
    type: String,
    required: false,
  },

  qrcode: {
    type: String,
  },

  owner: {
    type: String,
    required: true,
  },

  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

},
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Event', Event);
