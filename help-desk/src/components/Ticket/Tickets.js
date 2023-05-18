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
  const id = useParams().id
  const [tickets, setTickets] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setTickets(data.tickets));
  }, []);

  const deleteHandler = async() => {
    await axios
      .delete(`http://localhost:5000/tickets/${id}`)
      .then((res) => res.data)
      .then(()=>history("/tickets"));
  };

  return (
    <>
      <div>
        <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
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
                <TableCell>Technician</TableCell>
                <TableCell>Assign</TableCell>
                <TableCell>Progress</TableCell>
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
                    <TableCell>
                      <select value="techician">
                        <option value="Kevin">Kevin</option>
                        <option value="Sampth">Sampth</option>
                        <option value="James">James</option>
                      </select>
                    </TableCell>
                    <TableCell>
                      <Button>Assign</Button>
                    </TableCell>
                    <TableCell>
                      <select value="progress">
                        <option value="Case Opened">Case Opened</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Finished">Finished</option>
                      </select>
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
