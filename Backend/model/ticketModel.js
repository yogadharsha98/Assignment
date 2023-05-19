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
    required: true,
  },
  category: {
    type: String,
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
  technician:{
    type: String,
    default: "Kevin",
    required: true,
  },
  progress: {
    type: String,
    default: "Case Opened",
    required: true,
  },
  
});

module.exports = mongoose.model("Ticket", ticketSchema);
