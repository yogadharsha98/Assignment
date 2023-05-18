const User = require("../model/userModel");

const register = async (req, res, next) => {
  const { name, email, password,isTechnician } = req.body;
  let user;
  try {
    user = new User({
      name,
      email,
      password,
      isTechnician
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(500).json({ message: "Unable to register" });
  }
  return res.status(201).json({ user });
};

const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
};

const getUserById = async (req, res, next) => {
  const id = req.params.userId;
  let user;
  try {
    user = await User.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "No user Found" });
  }
  return res.status(200).json({ user });
};

const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { name, email, password, isAdmin, isTechnician } = req.body;
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      name,
      email,
      password,
      isAdmin,
      isTechnician,
    });
    user = await user.save();
  } catch (err) {
    console.log(err);
  }
  if (!user) {
    return res.status(404).json({ message: "Unable To Update by this id" });
  }
  return res.status(200).json({ message: "User updated" });
};

const deleteUser = async (req, res, next) => {
  const id = req.params.id;
  let user;
  try {
    user = await User.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!user) {
    return res.status(404).json({ message: "Unable To Delete by this id" });
  }
  return res.status(200).json({ message: "User deleted" });
};

exports.register = register;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;
exports.updateUser=updateUser;
exports.deleteUser=deleteUser;
