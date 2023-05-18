import {
  Box,
  Button,
  FormLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const AddTicket = () => {
  const history = useNavigate()
  const [inputs, setInpus] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    description: "",
    category: "",
    priority: "",
    image: "",
  });
  const handleChange = (e) => {
    setInpus((prevState)=>({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    //console.log(e.target.name, e.target.value);
  };

  const sendRequest = async()=> {
    await axios.post("http://localhost:5000/tickets",{
      name:String(inputs.name),
      email: String(inputs.email),
      phone: Number(inputs.phone),
      location: String(inputs.location),
      title: String(inputs.title),
      description: String(inputs.description),
      category: String(inputs.category),
      priority: String(inputs.priority),
      image: String(inputs.image),
    }).then(res=>res.data)
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs)
    sendRequest().then(()=>history('/tickets'))
  }
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={8}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />

        <FormLabel>Email</FormLabel>
        <TextField
          value={inputs.email}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="email"
        />

        <FormLabel>Phone</FormLabel>
        <TextField
          value={inputs.phone}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="phone"
        />

        <FormLabel>Location</FormLabel>
        <TextField
          value={inputs.location}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="location"
        />
        <FormLabel>Title</FormLabel>
        <TextField
          value={inputs.title}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="title"
        />

        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />

        <FormLabel>Category</FormLabel>
        <Select value={inputs.category} onChange={handleChange} name="category">
          <MenuItem value="Software">Software</MenuItem>
          <MenuItem value="Harware">Harware</MenuItem>
        </Select>

        <FormLabel>Prority</FormLabel>
        <Select value={inputs.priority} onChange={handleChange} name="priority">
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </Select>

        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          type="file"
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
        <Button type="submit" variant="contained">
          Create Ticket
        </Button>
      </Box>
    </form>
  );
};

export default AddTicket;
