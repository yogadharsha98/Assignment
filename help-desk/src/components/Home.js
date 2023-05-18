import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection={"column"}
        alignItems={'center'}
        maxWidth={700}
        alignContent={"center"}
        alignSelf={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        marginTop={8}
      >
        <h2>Welcome to help desk application</h2>
        <br/>
        <img
          src="https://images.unsplash.com/photo-1518655048521-f130df041f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt="image" width="690" height="400"
        />
      </Box>
    </div>
  );
};

export default Home;
