const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  vehicleYear: {
    type: Number,
    required: true,
  },
  vehicleMake: {
    type: String,
    required: true,
  },
  vehicleMileage: {
    type: String,
    required: true,
  },
  appointmentDate: {
    type: String,
    required: true,
  },
  timeFrame: {
    type: String,
    required: true,
  },
  selectedServices: {
    type: [String],
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    default: "",
  },
});

module.exports = mongoose.model("appointment", appointmentSchema);
