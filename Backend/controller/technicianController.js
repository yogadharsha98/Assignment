const Technician = require("../model/technicianModel");

const technicianRegister = async (req, res, next) => {
  const { name, email, password,isTechnician,isAdmin,department,isAvailable } = req.body;
  let technician;
  try {
    technician = new Technician({
        name, email, password,isTechnician,isAdmin,department,isAvailable 
    });
    await technician.save();
  } catch (err) {
    console.log(err);
  }
  if (!technician) {
    return res.status(500).json({ message: "Unable to register" });
  }
  return res.status(201).json({ technician });
};

const getAllTechnicians = async (req, res, next) => {
  let technicians;
  try {
    technicians = await Technician.find();
  } catch (err) {
    console.log(err);
  }
  if (!technicians) {
    return res.status(404).json({ message: "No technicians found" });
  }
  return res.status(200).json({ technicians });
};

const getTechnicianById = async (req, res, next) => {
  const id = req.params.technicianId;
  let technician;
  try {
    technician = await Technician.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!technician) {
    return res.status(404).json({ message: "No technician Found" });
  }
  return res.status(200).json({ technician });
};

const updateTechnician = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password, isAdmin, isTechnician } = req.body;
  let technician;
  try {
    technician = await Technician.findByIdAndUpdate(id, {
      name,
      email,
      password,
      isAdmin,
      isTechnician,
    });
    technician = await technician.save();
  } catch (err) {
    console.log(err);
  }
  if (!technician) {
    return res.status(404).json({ message: "Unable To Update by this id" });
  }
  return res.status(200).json({ message: "Technician updated" });
};

const deleteTechnician = async (req, res, next) => {
  const id = req.params.id;
  let technician;
  try {
    technician = await Technician.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!technician) {
    return res.status(404).json({ message: "Unable To Delete by this id" });
  }
  return res.status(200).json({ message: "Technician deleted" });
};

exports.technicianRegister = technicianRegister;
exports.getAllTechnicians = getAllTechnicians;
exports.getTechnicianById = getTechnicianById;
exports.updateTechnician=updateTechnician;
exports.deleteTechnician=deleteTechnician;
