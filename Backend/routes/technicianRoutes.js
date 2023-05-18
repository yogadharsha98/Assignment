const express = require("express");
const router = express.Router();
const User = require("../model/technicianModel")
const technicianController=require("../controller/technicianController")

router.post("/", technicianController.technicianRegister)
router.get("/", technicianController.getAllTechnicians)
router.get("/:userId", technicianController.getTechnicianById)
router.put("/:id", technicianController.updateTechnician)
router.delete("/:id", technicianController.deleteTechnician)


module.exports=router;