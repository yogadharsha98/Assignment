const Ticket = require("../model/ticketModel");

const getAllTickets = async (req, res, next) => {
  let tickets;
  try {
    tickets = await Ticket.find();
  } catch (err) {
    console.log(err);
  }
  if (!tickets) {
    return res.status(404).json({ message: "No ticket found" });
  }
  return res.status(200).json({ tickets });
};

const getById = async (req, res, next) => {
  const id = req.params.ticketId;
  let ticket;
  try {
    ticket = await Ticket.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!ticket) {
    return res.status(404).json({ message: "No ticket Found" });
  }
  return res.status(200).json({ ticket });
};

const addTicket = async (req, res, next) => {
  const {
    name,
    email,
    phone,
    title,
    description,
    priority,
    category,
    location,
    image,
    price,
  } = req.body;

  let ticket;
  try {
    ticket = new Ticket({
      name,
      email,
      phone,
      title,
      description,
      priority,
      category,
      location,
      image,
      price,
    });

    await ticket.save();

    if (!ticket) {
      return res.status(500).json({ message: "Unable to register" });
    }
    return res.status(201).json({ ticket });
  } catch (err) {
    console.log(err);
  }
};
const updateTicket = async (req, res, next) => {
  const id = req.params.id;
  const {
    name,
    email,
    phone,
    title,
    description,
    priority,
    category,
    location,
    image,
    price,
  } = req.body;
  let ticket;
  try {
    ticket = await Ticket.findByIdAndUpdate(id, {
      name,
      email,
      phone,
      title,
      description,
      priority,
      category,
      location,
      image,
      price,
    });
    ticket = await ticket.save();
  } catch (err) {
    console.log(err);
  }
  if (!ticket) {
    return res.status(404).json({ message: "Unable To Update by this id" });
  }
  return res.status(200).json({ message: "Ticket updated" });
};

const deleteTicket = async (req, res, next) => {
  const id = req.params.id;
  let ticket;
  try {
    ticket = await Ticket.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!ticket) {
    return res.status(404).json({ message: "Unable To Delete by this id" });
  }
  return res.status(200).json({ message: "Ticket deleted" });
};

exports.addTicket = addTicket;
exports.getAllTickets = getAllTickets;
exports.getById = getById;
exports.updateTicket = updateTicket;
exports.deleteTicket = deleteTicket;
