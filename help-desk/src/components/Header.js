import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar } from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  
  const [value, setValue] = useState();
  const location = useLocation();
  const excludeHeader = ["/login"];

  const result = excludeHeader.includes(location.pathname);

  if (result) {
    return null;
  }

  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <Link to="/">
            <SupportAgentIcon sx={{ width: "50px", height: "50px" }} />
          </Link>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add Ticket" />
            <Tab LinkComponent={NavLink} to="/tickets" label="Ticket List" />
            <Tab LinkComponent={NavLink} to="/login" label="Logout" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
