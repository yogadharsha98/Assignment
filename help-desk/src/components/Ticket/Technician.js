import React, { useEffect, useState } from "react";
import axios from "axios";
import Tickets from "./Tickets";

const URL = "http://localhost:5000/technicians";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const Technician = () => {
  const [technicians, setTechnicians] = useState();

  useEffect(() => {
    fetchHandler().then((data)=>setTechnicians(data))
  }, []);
  console.log(technicians);

  return (
  <div>
    <ul>
    {technicians.map((technician, i) => (
            <div key={i}>
                <Tickets technician={technician} />
                
            </div>
        ))}

    </ul>
  </div>
  );
};

export default Technician;
