import React, { useEffect, useState } from "react";
import './Ticket.css'
import axios from "axios";
import Ticket from "./Ticket";

const URL = "http://localhost:5000/tickets";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Tickets = () => {
  const [tickets, setTickets] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setTickets(data.tickets));
  }, []);
  console.log(tickets);
  console.log(typeof tickets);

  return (
    <div>
      <ul>
        {tickets &&
          tickets.map((ticket, i) => (
            <li key={i}>
              <Ticket ticket={ticket} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Tickets;
