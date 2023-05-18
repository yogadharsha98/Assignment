const express = require("express");
const mongoose = require("mongoose");
const cors=require('cors')
const app = express();
const user = require("./routes/userRoutes")
const ticket = require("./routes/ticketRoutes")
const technicians = require("./routes/technicianRoutes")


//Middlerware
app.use(express.json())
app.use(cors())
app.use("/user",user)
app.use("/tickets",ticket)
app.use("/technicians",technicians)

mongoose
  .connect(
    "mongodb+srv://yoga:1998@cluster0.l0keun3.mongodb.net/helpdesk?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));


