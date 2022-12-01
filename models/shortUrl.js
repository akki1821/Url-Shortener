const mongoose = require("mongoose");
const shortid = require("shortid");

const shortUrlSchema = new mongoose.Schema({
    original: {
        type: String,
        required: true,
      },

  short: {
    type: String,
    required: true,
    default: shortid.generate,
  },

  count: {
    type: Number,
    required: true,
    default: 0
  },

  category: {
    type: String,
    required:false,
    
  },

  pin: {
    type: Number,
    required:true,
    default:0
    
  },


});

module.exports = mongoose.model("shortUrl", shortUrlSchema);
