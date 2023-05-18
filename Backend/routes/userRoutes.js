const express = require("express");
const router = express.Router();
const User = require("../model/userModel")
const usersController=require("../controller/userController")

router.post("/", usersController.register)
router.get("/", usersController.getAllUsers)
router.get("/:userId", usersController.getUserById)
router.put("/:id", usersController.updateUser)
router.delete("/:id", usersController.deleteUser)


module.exports=router;