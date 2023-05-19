import { Box, Button, FormLabel, MenuItem, Select, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TicketDetail = () => {
  const [inputs,setInputs]=useState({})
  const id = useParams().id;
  const history = useNavigate()

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/tickets/${id}`)
        .then((res) =>res.data).then(data=>setInputs(data.ticket));
    };
    fetchHandler()
  }, [id]);

  const sendRequest =async()=>{
    await axios.put(`http://localhost:5000/tickets/${id}`,{
        name: String(inputs.name),
        email: String(inputs.email),
        phone: Number(inputs.phone),
        location: String(inputs.location),
        title: String(inputs.title),
        description: String(inputs.description),
        category: String(inputs.category),
        priority: String(inputs.priority),
        image: String(inputs.image),
        price: String(inputs.price),
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    window.alert('Ticket updated Successful!')
    sendRequest().then(()=>history("/tickets"))
  }

  const handleChange = (e)=>{
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  } 

  return <div>
   { inputs && <form onSubmit={handleSubmit}>
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
          <Select
            value={inputs.category}
            onChange={handleChange}
            name="category"
          >
            <MenuItem value="Software">Software</MenuItem>
            <MenuItem value="Harware">Harware</MenuItem>
          </Select>

          <FormLabel>Priority</FormLabel>
          <Select
            value={inputs.priority}
            onChange={handleChange}
            name="priority"
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </Select>

          <FormLabel>Image</FormLabel>
          <TextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />
          <FormLabel>Price</FormLabel>
          <TextField
            value={inputs.price}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
            
          />
          <Button type="submit" variant="contained">
            Update Ticket
          </Button>
        </Box>
      </form>}
  </div>;
};

export default TicketDetail;
