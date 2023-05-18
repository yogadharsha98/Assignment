const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    required: true,
  },
  category: {
    type: String,
    enum: ["Software", "Hardware"],
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    default: "$0",
  },
  image: {
    type: String,
    required: true,
  },
  progress: {
    type: String,
    enum: ["Case Opened", "Ongoing", "Finished"],
    default: "Case Opened",
  },
  
});

module.exports = mongoose.model("Ticket", ticketSchema);
