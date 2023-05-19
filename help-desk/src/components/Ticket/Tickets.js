import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

const URL = "http://localhost:5000/tickets";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Tickets = () => {
  const history = useNavigate();
  const id = useParams().id;
  const [tickets, setTickets] = useState();

  const [inputs, setInputs] = useState({
    technician: "",
    progress: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/tickets", {
        technician: String(inputs.technician),
        progress: String(inputs.progress),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    window.alert("Assigned Successful!");
    sendRequest().then(() => history("/tickets"));
  };

  useEffect(() => {
    fetchHandler().then((data) => setTickets(data.tickets));
  }, []);

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/tickets/${id}`)
      .then((res) => res.data)
      .then(() => history("/tickets"));
  };

  return (
    <>
      <div>
        <TableContainer
          component={Paper}
          sx={{
            maxHeight: "500px",
          }}
        >
          <Table aria-label="Ticket lists" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Image</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Technician</TableCell>
                <TableCell>Progress</TableCell>
                <TableCell>Assign</TableCell>
                <TableCell>Update or Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets &&
                tickets.map((ticket, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{ticket._id}</TableCell>
                    <TableCell>{ticket.name}</TableCell>
                    <TableCell>{ticket.email}</TableCell>
                    <TableCell>{ticket.phone}</TableCell>
                    <TableCell>{ticket.location}</TableCell>
                    <TableCell>{ticket.title}</TableCell>
                    <TableCell>{ticket.description}</TableCell>
                    <TableCell>{ticket.category}</TableCell>
                    <TableCell>{ticket.priority}</TableCell>
                    <TableCell>{ticket.image}</TableCell>
                    <TableCell>{ticket.price}</TableCell>
                    <TableCell>
                      <select
                        value={inputs.technician}
                        onChange={handleChange}
                        name="technician"
                      >
                        <option value="Kevin">Kevin</option>
                        <option value="Sampath">Sampth</option>
                        <option value="James">James</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <select
                        value={inputs.progress}
                        onChange={handleChange}
                        name="progress"
                      >
                        <option value="Case Opened">Case Opened</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Finished">Finished</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <Button onClick={handleSubmit}> Assign</Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        LinkComponent={Link}
                        to={`/tickets/${ticket._id}`}
                      >
                        Update
                      </Button>
                      <Button onClick={deleteHandler}>Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default Tickets;
