const mongoose = require("mongoose");

const footerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true
  }

});

module.exports = mongoose.model("Footer", footerSchema);
