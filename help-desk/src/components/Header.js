import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import {NavLink} from 'react-router-dom'

const Header = () => {
  const [value , setValue] = useState()
  return (
    <div>
      <AppBar sx={{backgroundColor: "#232F3D"}} position="sticky">
        <Toolbar>
          <Typography><SupportAgentIcon sx={{width:"50px",height:"50px"}} /></Typography>
          <Tabs sx={{ml:'auto'}} textColor="inherit" indicatorColor="primary" value={value} onChange={(e,val)=>setValue(val)}>
            <Tab LinkComponent={NavLink} to="/add" label='Add Ticket' />
            <Tab LinkComponent={NavLink} to="/tickets" label='Ticket List' />
            <Tab LinkComponent={NavLink} to="/login" label='Logout' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
