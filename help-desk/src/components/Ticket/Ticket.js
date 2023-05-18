import {Button} from '@mui/material'
import React from "react";
import './Ticket.css'

const Ticket = (props) => {
  const {
    _id,
    name,
    email,
    phone,
    location,
    title,
    image,
    description,
    priority,
    category,
    progress,
    price
  } = props.ticket;
  return <div className='card'>
    <img src={image} alt={title} />
    <article>Name: {name}</article>
    <p>Email: {email}</p>
    <p>Contact: {phone}</p>
    <p>Location: {location}</p>
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Priority: {priority}</p>
    <p>Category: {category}</p>
    <p>Progress: {progress}</p>
    <h4>{price}</h4>
    <Button sx={{mt:'auto'}}>Update</Button>
    <Button sx={{mt:'auto'}}>Delete</Button>

    {/* <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Contact</th>
        <th>Location</th>
        <th>Image</th>
        <th>Title</th>
        <th>Description</th>
        <th>Priority</th>
        <th>Category</th>
        <th>Price</th>
        <th>Progress</th>
      </tr>
      <tr>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{location}</td>
        <td>{name}</td>
        <td>{title}</td>
        <td>{description}</td>
        <td>{priority}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>{pro}</td>
      </tr>
    </table> */}


  
  </div>;
};

export default Ticket;
